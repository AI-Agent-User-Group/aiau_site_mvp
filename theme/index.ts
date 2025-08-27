import DefaultTheme from 'rspress/theme';
import Layout from './Layout';
import Footer from './Footer';
import DiscordButton from './DiscordButton';

export * from 'rspress/theme';

export default {
  ...DefaultTheme,
  Layout,
  DocFooter: Footer,
};

export { DiscordButton };


