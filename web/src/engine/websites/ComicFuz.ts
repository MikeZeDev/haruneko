﻿import { Tags } from '../Tags';
import icon from './ComicFuz.webp';
import { Chapter, DecoratableMangaScraper, Manga, Page, type MangaPlugin } from '../providers/MangaPlugin';
import * as Common from './decorators/Common';
import protoTypes from './ComicFuz.proto?raw';
import { FetchProto } from '../platform/FetchProvider';
import type { Priority } from '../taskpool/TaskPool';
import { Exception } from '../Error';
import { WebsiteResourceKey as R } from '../../i18n/ILocale';
import protobuf from 'protobufjs';
import { GetBytesFromHex } from '../BufferEncoder';

type MangasByDayOfWeekResponse = {
    mangas: ApiManga[]
}

type MangaDetailResponse = {
    manga: ApiManga,
    chapters: ChapterGroup[]
}

type ApiManga = {
    id: number,
    title: string
}

type ChapterGroup = {
    chapters: ApiChapter[]
}

type ApiChapter = {
    id: number,
    title: string
}

type MangaViewerResponse = {
    pages: ViewerPage[];

}

type ViewerPage = {
    image: ApiImage
}

type ApiImage = {
    imageUrl: string,
    iv: string,
    encryptionKey: string,
    isExtraPage: boolean
}

type PageParameters = {
    keyData?: string,
    iv?: string
};

export default class extends DecoratableMangaScraper {

    private readonly apiUrl = 'https://api.comic-fuz.com';
    private readonly imgUrl = 'https://img.comic-fuz.com';

    public constructor() {
        super('comicfuz', 'COMIC FUZ', 'https://comic-fuz.com', Tags.Media.Manga, Tags.Language.Japanese, Tags.Source.Official);
    }

    public override get Icon() {
        return icon;
    }

    public override ValidateMangaURL(url: string): boolean {
        return new RegExpSafe(`^${this.URI.origin}/manga/\\d+$`).test(url);

    }

    public override async FetchManga(provider: MangaPlugin, url: string): Promise<Manga> {
        const id = new URL(url).pathname.split('/').at(-1);
        const data = await this.FetchMangaDetail(id);
        return new Manga(this, provider, id, data.manga.title);
    }

    private async FetchMangaDetail(titleId: string): Promise<MangaDetailResponse> {
        const uri = new URL('v1/manga_detail', this.apiUrl);
        const payload = {
            deviceInfo: {
                deviceType: 2,
            },
            mangaId: titleId
        };
        const request = await this.CreatePROTORequest(uri, 'ComicFuz.MangaDetailRequest', payload);
        return FetchProto<MangaDetailResponse>(request, protoTypes, 'ComicFuz.MangaDetailResponse');
    }

    private async CreatePROTORequest(uri: URL, messageProtoType: string, payload: unknown): Promise<Request> {
        const root = await protobuf.parse(protoTypes, { keepCase: true }).root;
        const messageType = root.lookupType(messageProtoType);
        const message = messageType.encode(payload);
        return new Request(uri.href, {
            body: message.finish(),
            method: 'POST'
        });
    }

    public override async FetchMangas(provider: MangaPlugin): Promise<Manga[]> {
        const uri = new URL('v1/mangas_by_day_of_week', this.apiUrl);
        const payload = {
            deviceInfo: {
                deviceType: 2
            },
            dayOfWeek: 0
        };
        const request = await this.CreatePROTORequest(uri, 'ComicFuz.MangasByDayOfWeekRequest', payload);
        const data = await FetchProto<MangasByDayOfWeekResponse>(request, protoTypes, 'ComicFuz.MangasByDayOfWeekResponse');
        return data.mangas.map(manga => new Manga(this, provider, manga.id.toString(), manga.title));
    }

    public override async FetchChapters(manga: Manga): Promise<Chapter[]> {
        const data = await this.FetchMangaDetail(manga.Identifier);
        return data.chapters.map(group => group.chapters.map(chapt => new Chapter(this, manga, chapt.id.toString(), chapt.title))).flat();
    }

    public override async FetchPages(chapter: Chapter): Promise<Page[]> {
        const uri = new URL('v1/manga_viewer', this.apiUrl);
        const payload = {
            deviceInfo: {
                deviceType: 2
            },
            chapterId: chapter.Identifier,
            useTicket: false,
            consumePoint: {
                event: 0,
                paid: 0
            }
        };
        const request = await this.CreatePROTORequest(uri, 'ComicFuz.MangaViewerRequest', payload);
        let data: MangaViewerResponse = undefined;
        try {
            data = await FetchProto<MangaViewerResponse>(request, protoTypes, 'ComicFuz.MangaViewerResponse');
        } catch { // TODO: Do not use same message for generic errors
            throw new Exception(R.Plugin_Common_Chapter_UnavailableError);
        }
        return data.pages
            .filter(page => page.image?.imageUrl && page.image.isExtraPage != true)
            .map(({ image }) => new Page<PageParameters>(this, chapter, new URL(image.imageUrl, this.imgUrl), { keyData: image.encryptionKey, iv: image.iv }));
    }

    public override async FetchImage(page: Page<PageParameters>, priority: Priority, signal: AbortSignal): Promise<Blob> {
        const data = await Common.FetchImageAjax.call(this, page, priority, signal, true);
        const { keyData, iv } = page.Parameters;
        return keyData && iv ? this.DecryptPicture(data, page.Parameters) : data;
    }

    private async DecryptPicture(encrypted: Blob, page: PageParameters): Promise<Blob> {
        const algorithm = { name: 'AES-CBC', iv: GetBytesFromHex(page.iv) };
        const secretKey = await crypto.subtle.importKey('raw', GetBytesFromHex(page.keyData), algorithm, false, [ 'decrypt' ]);
        const decrypted = await crypto.subtle.decrypt(algorithm, secretKey, await encrypted.arrayBuffer());
        return Common.GetTypedData(decrypted);
    }
}