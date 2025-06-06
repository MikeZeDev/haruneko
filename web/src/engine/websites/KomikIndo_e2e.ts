import { TestFixture } from '../../../test/WebsitesFixture';

new TestFixture({
    plugin: {
        id: 'komikindo',
        title: 'KomikIndo'
    },
    container: {
        url: 'https://komiksin.net/manga/please-go-home-akutsu-san/',
        id: '/manga/please-go-home-akutsu-san/',
        title: 'Please Go Home, Akutsu-san!'
    },
    child: {
        id: '/please-go-home-akutsu-san-chapter-1/',
        title: 'Chapter 01'
    },
    entry: {
        index: 0,
        size: 4_107_459,
        type: 'image/jpeg'
    }
}).AssertWebsite();