import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        testTimeout: 7500,
        fileParallelism: false,
        globalSetup: './test/PuppeteerGlobal.ts',
        dir: './web/src',
        include: [ '**/*[_.]e2e.[jt]s' ],
        exclude: [ '**/engine/websites/**' ],
        reporters: process.env.GITHUB_ACTIONS ? [ 'github-actions'] : [ 'default', 'hanging-process' ],
    },
});