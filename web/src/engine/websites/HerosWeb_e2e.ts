﻿import { TestFixture } from '../../../test/WebsitesFixture';

new TestFixture({
    plugin: {
        id: 'herosweb',
        title: `Hero's (ヒーローズ)`
    },
    container: {
        url: 'https://viewer.heros-web.com/episode/3269754496844315695',
        id: '/episode/3269754496844315695',
        title: '虫葬りの巫女'
    },
    child: {
        id: '/episode/3269754496844315695',
        title: '第一話  羽黒神社の巫女'
    },
    entry: {
        index: 0,
        size: 2_043_781,
        type: 'image/png'
    }
}).AssertWebsite();