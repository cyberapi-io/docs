import { defineConfig } from 'vitepress'

// PRIVATE BETA GATE.
// Only index.md is published; the guide and reference pages stay in the repo
// but are left out of the build, so direct URLs 404 rather than serving docs
// for an API nobody can obtain. To reopen: delete PRIVATE_BETA below and
// restore the nav/sidebar/search blocks marked further down.
const PRIVATE_BETA = true

export default defineConfig({
    title: 'CyberAPI Docs',
    description: 'CyberAPI Reference & Documentation',
    base: '/',
    ignoreDeadLinks: true,

    srcExclude: PRIVATE_BETA ? ['guide/**', 'api/**'] : [],

    themeConfig: {
        logo: '/logo.png',

        nav: PRIVATE_BETA ? [
            { text: 'Request access', link: 'https://www.cyberapi.io' }
        ] : [
            { text: 'Guide', link: '/guide/getting-started' },
            { text: 'API Reference', link: '/api/check-endpoint' },
            { text: 'SDKs', link: '/guide/sdks' },
            { text: 'Home', link: 'https://www.cyberapi.io' }
        ],

        sidebar: PRIVATE_BETA ? {} : {
            '/guide/': [
                {
                    text: 'Getting Started',
                    items: [
                        { text: 'Quick Start', link: '/guide/getting-started' },
                        { text: 'Authentication', link: '/guide/authentication' }
                    ]
                },
                {
                    text: 'SDKs',
                    items: [
                        { text: 'Overview', link: '/guide/sdks' }
                    ]
                }
            ],
            '/api/': [
                {
                    text: 'API Reference',
                    items: [
                        { text: 'Check Endpoint', link: '/api/check-endpoint' }
                    ]
                }
            ]
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/cyberapi-io/sdk' }
        ],

        footer: {
            message: 'Private beta',
            copyright: 'Copyright © 2026 CyberAPI'
        },

        // Nothing left to index while the pages are excluded.
        search: PRIVATE_BETA ? undefined : {
            provider: 'local'
        }
    },

    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ]
})
