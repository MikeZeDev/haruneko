import { Tags } from '../Tags';
import icon from './IkigaiMangas.webp';
import { Chapter, DecoratableMangaScraper, type Manga } from '../providers/MangaPlugin';
import * as Common from './decorators/Common';
import { FetchCSS } from '../platform/FetchProvider';

// TODO: Add Novel support
function MangaInfoExtractor(anchor: HTMLAnchorElement) {
    return {
        id: anchor.pathname,
        title: anchor.querySelector<HTMLHeadingElement>('h2.font-semibold').innerText.trim()
    };
}

@Common.MangaCSS(/^https:\/\/(lector|visor|visual)ikigai\.\w+\.(net|com|xyz|online|org)\/series\/[^/]+\/$/, 'article > img', (element: HTMLImageElement) => element.alt.trim())
@Common.MangasMultiPageCSS('/series/?pagina={page}', 'section ul.grid li > a', 1, 1, 0, MangaInfoExtractor)
@Common.PagesSinglePageCSS('div.w-full img[alt*="Page"]')
@Common.ImageAjax()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('ikigaimangas', 'Ikigai Mangas', 'https://lectorikigai.foodib.net', Tags.Media.Manhwa, Tags.Media.Manhua, Tags.Language.Spanish, Tags.Source.Aggregator, Tags.Accessibility.DomainRotation);
    }

    public override async Initialize(): Promise<void> {
        const response = await fetch('https://visualikigai.com');
        this.URI.href = new URL(response.url).origin;
        console.log(`Assigned URL '${this.URI}' to ${this.Title}`);
    }

    public override get Icon() {
        return icon;
    }

    public override async FetchChapters(manga: Manga): Promise<Chapter[]> {
        const chapterList: Chapter[] = [];
        for (let page = 1, run = true; run; page++) {
            const chapters = await this.GetChaptersFromPage(manga, page);
            chapters.length > 0 ? chapterList.push(...chapters) : run = false;
        }
        return chapterList;
    }

    private async GetChaptersFromPage(manga: Manga, page: number): Promise<Chapter[]> {
        const data = await FetchCSS<HTMLAnchorElement>(new Request(new URL(`${manga.Identifier}?pagina=${page}`, this.URI)), 'ul li.w-full a');
        return data.map(chapter => new Chapter(this, manga, chapter.pathname, chapter.querySelector<HTMLHeadingElement>('h3.font-semibold').textContent.trim()));
    }
}