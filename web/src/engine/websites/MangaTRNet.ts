import { Tags } from '../Tags';
import icon from './MangaTRNet.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as Madara from './decorators/WordPressMadara';
import * as Common from './decorators/Common';

@Madara.MangaCSS(/^{origin}\/manga\/[^/]+\/$/, 'ol.breadcrumb li:last-of-type a')
@Madara.MangasMultiPageAJAX()
@Madara.ChaptersSinglePageAJAXv2()
@Madara.PagesSinglePageCSS()
@Common.ImageAjax()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('mangatrnet', 'MangaTR (.Net)', 'https://mangatr.app', Tags.Media.Manhwa, Tags.Media.Manhua, Tags.Language.Turkish, Tags.Source.Aggregator, Tags.Accessibility.RegionLocked);
    }

    public override get Icon() {
        return icon;
    }
}