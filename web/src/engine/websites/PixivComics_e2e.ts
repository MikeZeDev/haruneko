﻿import { TestFixture } from '../../../test/WebsitesFixture';

new TestFixture({
    plugin: {
        id: 'pixivcomics',
        title: 'pixivコミック'
    },
    container: {
        url: 'https://comic.pixiv.net/works/9037',
        id: '9037',
        title: 'ダセェと言われた令嬢の華麗なる変身'
    },
    child: {
        id: '135724',
        title: '1話 - ダセェ田舎令嬢①'
    },
    entry: {
        index: 0,
        size: 678_371,
        type: 'image/png'
    }
}).AssertWebsite();