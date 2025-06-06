import { TestFixture } from '../../../test/WebsitesFixture';

new TestFixture({
    plugin: {
        id: 'feelweb',
        title: 'FeelWeb'
    },
    container: {
        url: 'https://feelweb.jp/episode/3269754496334652390',
        id: '/episode/3269754496334652390',
        title: 'おとうさん、いっしょに遊ぼ わんぱく日仏ファミリー！'
    },
    child: {
        id: '/episode/3269754496334652390',
        title: '第1話'
    },
    entry: {
        index: 0,
        size: 2_513_928,
        type: 'image/png'
    }
}).AssertWebsite();