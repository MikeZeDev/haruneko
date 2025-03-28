import { TestFixture } from '../../../test/WebsitesFixture';

new TestFixture({
    plugin: {
        id: 'manhuagold',
        title: 'Manhua Gold',
    },
    container: {
        url: 'https://manhuagold.top/manga/cultivator-against-hero-society',
        id: '/manga/cultivator-against-hero-society',
        title: 'Cultivator Against Hero Society',
    },
    child: {
        id: '/manga/cultivator-against-hero-society/chapter-311',
        title: 'Chapter 311',
    },
    entry: {
        index: 0,
        size: 957_872,
        type: 'image/jpeg',
    }
}).AssertWebsite();