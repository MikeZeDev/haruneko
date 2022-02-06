// Auto-Generated export from HakuNeko Legacy
// See: https://gist.github.com/ronny1982/0c8d5d4f0bd9c1f1b21dbf9a2ffbfec9

//import { Tags } from '../../Tags';
import icon from './RagnarokScan.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('ragnarokscan', `RagnarokScan`, 'https://ragnarokscan.com' /*, Tags.Language.English, Tags ... */);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class RagnarokScan extends WordPressMadara {

    constructor() {
        super();
        super.id = 'ragnarokscan';
        super.label = 'RagnarokScan';
        this.tags = [ 'webtoon', 'spanish' ];
        this.url = 'https://ragnarokscan.com';
    }
}
*/