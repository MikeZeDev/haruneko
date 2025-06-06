﻿import { TestFixture } from '../../../test/WebsitesFixture';

new TestFixture({
    plugin: {
        id: 'valkyriescan',
        title: 'ValkyrieScan'
    },
    container: {
        url: 'https://valkyriescan.com/manga/ideia-errada/',
        id: JSON.stringify({ post: '27742', slug: '/manga/ideia-errada/' }),
        title: 'Ideia Errada'
    },
    child: {
        id: '/manga/ideia-errada/capitulo-01/',
        title: 'Capítulo 01 - Amor Tolo'
    },
    entry: {
        index: 0,
        size: 30_643,
        type: 'image/jpeg'
    }
}).AssertWebsite();