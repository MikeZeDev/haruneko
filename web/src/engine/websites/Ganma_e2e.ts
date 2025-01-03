﻿import { TestFixture } from '../../../test/WebsitesFixture';

const config = {
    plugin: {
        id: 'ganma',
        title: 'GANMA!'
    },
    container: {
        url: 'https://ganma.jp/kyatapi',
        id: '5111fc10-5046-11ee-8042-c6601c61f7a6',
        title: 'きゃたぴランド'
    },
    child: {
        id: '8c1ab720-60cc-11ee-a11e-86ad1c7f6bc1',
        title: '1: 【第1話】 しんそつ！！'
    },
    entry: {
        index: 0,
        size: 910_108,
        type: 'image/jpeg'
    }
};

new TestFixture(config).AssertWebsite();