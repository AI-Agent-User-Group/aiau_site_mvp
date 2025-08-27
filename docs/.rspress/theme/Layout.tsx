import React from 'react';
import { Layout as DefaultLayout } from 'rspress/theme';

function Footer() {
  return (
    <footer style={{
      marginTop: 48, padding: '24px 16px', borderTop: '1px solid var(--rp-c-divider)'
    }}>
      <div>© 2025 AIエージェントユーザーグループ (AIAU)</div>
    </footer>
  );
}

export default function Layout(props: React.ComponentProps<typeof DefaultLayout>) {
  return <DefaultLayout {...props} bottom={<Footer />} />;
}


