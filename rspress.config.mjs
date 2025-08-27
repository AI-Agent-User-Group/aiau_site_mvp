import { defineConfig } from 'rspress/config';
import path from 'node:path';

export default defineConfig({
  root: 'docs',
  base: '/aiau_site_mvp/',
  lang: 'ja-JP',
  title: 'AIAU',
  description: 'AIエージェントユーザーグループ (AIAU)',
  icon: '/favicon.svg',
  themeDir: path.resolve(process.cwd(), 'theme'),
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
  ],
  // globalUIComponents: ['@theme/Footer.tsx'],
  // globalUIComponents: ['@theme/Footer'],
  themeConfig: {
    nav: [
      { text: 'プライバシーポリシー', link: '/privacy-policy' },
      { text: '行動規範', link: '/code-of-conduct' }
    ],
    footer: {
      message: '© 2025 AIエージェントユーザーグループ (AIAU)'
    }
  }
});


