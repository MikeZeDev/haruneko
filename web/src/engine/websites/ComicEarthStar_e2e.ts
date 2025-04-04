﻿import { TestFixture } from '../../../test/WebsitesFixture';

new TestFixture({
    plugin: {
        id: 'comicearthstar',
        title: 'コミック アース・スター (Comic Earth Star)'
    },
    container: {
        url: 'https://comic-earthstar.com/episode/14079602755509015085',
        id: '/episode/14079602755509015085',
        title: `貧乏貴族ノードの冒険譚 ～Nord's Adventure～`
    },
    child: {
        id: '/episode/14079602755509015085',
        title: '第1話-①'
    },
    entry: {
        index: 9,
        size: 1_174_457,
        type: 'image/png'
    }
}).AssertWebsite();