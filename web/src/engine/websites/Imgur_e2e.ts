import { TestFixture } from '../../../test/WebsitesFixture';

const config = {
    plugin: {
        id: 'imgur',
        title: 'Imgur'
    },
    container: {
        url: 'https://imgur.com/gallery/sNDK0',
        id: '/gallery/sNDK0',
        title: 'My Walpapers'
    },
    child: {
        id: '/gallery/sNDK0',
        title: 'My Walpapers'
    },
    entry: {
        index: 0,
        size: 226_151,
        type: 'image/jpeg'
    }
};

new TestFixture(config).AssertWebsite();