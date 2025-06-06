import { TestFixture } from '../../../test/WebsitesFixture';

new TestFixture({
    plugin: {
        id: 'manhuaus',
        title: 'Manhua Us'
    },
    container: {
        url: 'https://manhuaus.com/manga/beware-of-obsession/',
        id: JSON.stringify({ post: '1356687', slug: '/manga/beware-of-obsession/' }),
        title: 'Beware of Obsession'
    },
    child: {
        id: '/manga/beware-of-obsession/chapter-1/',
        title: 'Chapter 1'
    },
    entry: {
        index: 0,
        size: 241_696,
        type: 'image/webp'
    }
}).AssertWebsite();