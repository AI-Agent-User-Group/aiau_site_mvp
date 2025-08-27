import React from 'react';
import { Layout as DefaultLayout } from 'rspress/theme';
import { Helmet, usePageData, withBase } from '@rspress/runtime';

function Footer() {
  return (
    <footer style={{
      marginTop: 48,
      padding: '24px 16px',
      borderTop: '1px solid var(--rp-c-divider)'
    }}>
      <div>© 2025 AIエージェントユーザーグループ (AIAU)</div>
    </footer>
  );
}

export default function Layout(props: React.ComponentProps<typeof DefaultLayout>) {
  const { siteData, page } = usePageData();
  const siteTitle = siteData?.title || '';
  const base = siteData?.base || '/';
  const headingTitle = page?.headingTitle || '';
  const description = (page?.description || siteData?.description || '').toString();
  const fullTitle = headingTitle && headingTitle !== siteTitle ? `${headingTitle} - ${siteTitle}` : siteTitle;
  const canonicalPath = withBase((page?.pagePath as string) || '/', base);
  const ogImage = '/OGP.jpg';
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalPath} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonicalPath} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      <DefaultLayout {...props} bottom={<Footer />} />
    </>
  );
}


