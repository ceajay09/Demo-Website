import React, { ReactNode } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTranslation } from 'react-i18next';

interface LayoutProps {
  children: ReactNode;
}

// TODO: Passen Sie theme nach Bedarf an
const defaultTheme = createTheme();

const Layout = ({ children }: LayoutProps) => {
  const { t } = useTranslation();

  const sections = [
    { title: t('layout.sections.home'), url: '/' },
    { title: 'Contact Us', url: '/contactUs' },
    { title: t('layout.sections.aboutUs'), url: '/aboutUs' },
    { title: t('layout.sections.services'), url: '/services' },
    // { title: 'Tech Insights (Coming soon)', url: '/techInsights' },
    // { title: 'Latest Posts (Coming soon)', url: '/latestPosts' },
    { title: t('layout.sections.realEstateForRent'), url: 'https://www.airbnb.ch/rooms/1599354106232235267?guests=1&adults=1&s=67&unique_share_id=79e58c73-d11a-4a7d-ba30-175443eedd98&source_impression_id=p3_1771681794_P3cvUeg8zLQbKYm_' },
  ];
  
  let GitHub = {
    name: 'GitHub',
    icon: GitHubIcon,
    url: 'https://github.com/ceajay09'
  }
  
  let LinkedIn = {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    url: 'https://linkedin.com/in/cesar-jaquiéry-9215aa179'
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title={t('layout.headerTitle')} sections={sections} />
        <main>{children}</main>
        <Footer
          title={t('layout.footer.title')}
          description={t('layout.footer.description')}
        />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
