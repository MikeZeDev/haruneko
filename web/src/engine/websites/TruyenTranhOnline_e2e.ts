import { TestFixture } from '../../../test/WebsitesFixture';

const config = {
    plugin: {
        id: 'truyentranhaudioonline',
        title: 'Truyện tranh audio'
    }/*,
    container: {
        url: 'https://truyentranhaudio.online/manga/.../',
        id: JSON.stringify({ post: '0', slug: '/manga/.../' }),
        title: 'Manga ?'
    },
    child: {
        id: '/manga/.../.../',
        title: 'Chapter ?'
    },
    entry: {
        index: 0,
        size: -1,
        type: 'image/jpeg'
    }*/
};

new TestFixture(config).AssertWebsite();