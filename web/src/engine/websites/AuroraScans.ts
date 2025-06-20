import { Tags } from '../Tags';
import icon from './AuroraScans.webp';
import { VTheme } from './templates/VTheme';

export default class extends VTheme {

    public constructor() {
        super('aurorascans', 'Aurora Scans', 'https://aurorascans.com', Tags.Media.Manga, Tags.Media.Manhwa, Tags.Language.English, Tags.Source.Scanlator );
        this.apiUrl = new URL('https://api.aurorascans.com/api/');
    }

    public override get Icon() {
        return icon;
    }
}
