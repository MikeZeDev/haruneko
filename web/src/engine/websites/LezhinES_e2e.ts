import { TestFixture } from '../../../test/WebsitesFixture';

new TestFixture({
    plugin: {
        id: 'lezhin-es',
        title: 'Lezhin (Spanish)'
    },
    container: {
        url: 'https://www.lezhin.es/detail/un-perro-vive-en-el-jardin-imperial',
        id: 'un-perro-vive-en-el-jardin-imperial',
        title: 'Un perro vive en el jardín imperial'
    },
    /* NEED LOGIN
    child: {
        id: '1',
        title: 'CAP 1'
    },
    entry: {
        index: 0,
        size: 531_808,
        type: 'image/webp'
    }*/
}).AssertWebsite();