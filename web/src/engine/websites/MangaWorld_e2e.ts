import { TestFixture, type Config } from '../../../test/WebsitesFixture';

const config: Config = {
    plugin: {
        id: 'mangaworld',
        title: 'Manga World'
    },
    container: {
        url: 'https://www.mangaworld.nz/manga/2682/subzero/',
        id: '/manga/2682/subzero/',
        title: 'SubZero'
    },
    child: {
        id: '/manga/2682/subzero/read/6406d54f3382854b52f4311f?style=list',
        title: 'Capitolo 47'
    },
    entry: {
        index: 0,
        size: 1_908_032,
        type: 'image/jpeg'
    }
};

new TestFixture(config).AssertWebsite();