import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'CyberAPI Docs',
    description: 'CyberAPI Reference & Documentation',
    base: '/',
    ignoreDeadLinks: true,

    themeConfig: {
        logo: '/logo.png',

        nav: [
            { text: 'Guide', link: '/guide/getting-started' },
            { text: 'API Reference', link: '/api/check-endpoint' },
            { text: 'SDKs', link: '/guide/sdks' },
            { text: 'Home', link: 'https://www.cyberapi.io' }
        ],

        sidebar: {
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
            message: 'Built with ❤️ for security teams',
            copyright: 'Copyright © 2025 CyberAPI'
        },

        search: {
            provider: 'local'
        }
    },

    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ]
})
