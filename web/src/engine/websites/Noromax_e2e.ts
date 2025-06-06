﻿import { TestFixture } from '../../../test/WebsitesFixture';

const config = {
    plugin: {
        id: 'noromax',
        title: 'Noromax'
    },
    container: {
        url: 'https://noromax01.my.id/Komik/all-hail-the-sect-leader-bahasa-indonesia/',
        id: '/Komik/all-hail-the-sect-leader-bahasa-indonesia/',
        title: 'All Hail the Sect Leader'
    },
    child: {
        id: '/all-hail-the-sect-leader-chapter-01-bahasa-indonesia/',
        title: 'Chapter 01'
    },
    entry: {
        index: 0,
        size: 225_081,
        type: 'image/jpeg'
    }
};

new TestFixture(config).AssertWebsite();