import { TestFixture } from '../../../test/WebsitesFixture';

new TestFixture({
    plugin: {
        id: 'comick',
        title: 'ComicK'
    },
    container: {
        url: 'https://comick.io/comic/00-solo-leveling',
        id: '71gMd0vF',
        title: 'Solo Leveling'
    },
    child: {
        id: 'rwd968fk',
        title: 'Vol. 3 Ch. 200 - Side Story 21 (en) [Flame Scans]'
    },
    entry: {
        index: 2,
        size: 854_209,
        type: 'image/png'
    }
}).AssertWebsite();