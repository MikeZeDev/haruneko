﻿import { TestFixture } from '../../../test/WebsitesFixture';

new TestFixture({
    plugin: {
        id: 'anzmanga',
        title: 'AnzManga',
    },
    container: {
        url: 'https://www.anzmanga25.com/manga/sono-bisque-doll-wa-koi-wo-suru',
        id: '/manga/sono-bisque-doll-wa-koi-wo-suru',
        title: 'Sono Bisque Doll wa Koi wo Suru',
    },
    child: {
        id: '/manga/sono-bisque-doll-wa-koi-wo-suru/98',
        title: '98',
    },
    entry: {
        index: 1,
        size: 392_625,
        type: 'image/jpeg',
    }
}).AssertWebsite();