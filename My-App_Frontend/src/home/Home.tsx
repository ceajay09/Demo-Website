import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';
import * as React from 'react';
import { Container, Grid, Paper, Typography, Box, ImageList, ImageListItem } from '@mui/material';
import Layout from './Layout';
import Main from './Main';
import Sidebar from './Sidebar';
import { useTranslation } from 'react-i18next';


export default function Blog() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);

  const sidebar = {
    title: t('blog.sidebar.title'),
    description: t('blog.sidebar.description'),
    social: [
      { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/ceajay09' },
      { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://linkedin.com/in/cesar-jaquiéry-9215aa179' },
    ],
  };

const TextBlock = ({ children }: { children: React.ReactNode }) => (
  <Paper elevation={4} sx={{ p: 2,  mt: 3, mb: 3 }}>
    <Typography variant="body1" align="center">
      {children}
    </Typography>
  </Paper>
);

// ... dein restlicher Code (sidebar, state, etc.)

const sampleImages = Array.from({ length: 16 }, (_, i) => ({
  img: `https://picsum.photos/seed/basel-${i + 1}/300/300`,
  title: `Work ${i + 1}`,
}));

// Beispielbilder + Ziel-Links (spaeter anpassen)
const featuredWorkItems = [
  { img: 'https://picsum.photos/seed/featured-1/600/600', alt: 'Work 1', href: '#featured-work-1' },
  { img: 'https://picsum.photos/seed/featured-2/600/600', alt: 'Work 2', href: '#featured-work-2' },
  { img: 'https://picsum.photos/seed/featured-3/600/600', alt: 'Work 3', href: '#featured-work-3' },
  { img: 'https://picsum.photos/seed/featured-4/600/600', alt: 'Work 4', href: '#featured-work-4' },
];
  

  return (
    <Layout>
      <main>
        <Container maxWidth="lg" sx={{ mt: 3 }}>
          {/* Intro Text (volle Breite) */}
          {/* <Paper elevation={4} sx={{ p: 2, mb: 3 }}>
            <Typography variant="body1" align="center">
              {t('blog.introText')}
            </Typography>
          </Paper> */}
          <TextBlock>{t('blog.introText')}</TextBlock>

          {/* 3 horizontale, quadratische Boxen */}
          <Grid container spacing={3}>
            {/* Linke Box: Featured Work + 4x4 Bilder */}
            <Grid item xs={12} md={4}>
              <Paper
                elevation={4}
                sx={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h6" align="center" gutterBottom>
                  {t('blog.leftBox.title')}
                </Typography>

                <Box
                  sx={{
                    flex: 1,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 1,
                    overflow: 'hidden',
                  }}
                >
                  {featuredWorkItems.map((item) => (
                    <Box
                      key={item.img}
                      component="a"
                      href={item.href}
                      sx={{
                        display: 'block',
                        borderRadius: 1,
                        overflow: 'hidden',
                        lineHeight: 0, // verhindert "inline-gap"
                        cursor: 'pointer',
                      }}
                    >
                      <Box
                        component="img"
                        src={item.img}
                        alt={item.alt}
                        loading="lazy"
                        sx={{
                          width: '100%',
                          height: '100%',
                          aspectRatio: '1 / 1',
                          objectFit: 'cover',
                          display: 'block',
                          transition: 'transform 150ms ease',
                          '&:hover': { transform: 'scale(1.03)' },
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>

            {/* Mittlere Box: leer */}
            <Grid item xs={12} md={4}>
              <Paper elevation={4} sx={{ width: '100%', aspectRatio: '1 / 1', p: 2 }} />
            </Grid>

            {/* Rechte Box: leer */}
            <Grid item xs={12} md={4}>
              <Paper
                elevation={4}
                sx={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >


                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                  }}
                >
                  {/* Obere klickbare Box */}
                  <Box
                    component="a"
                    href="#services"
                    sx={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 1,
                      textDecoration: 'none',
                      bgcolor: 'grey.100',
                      color: 'inherit',
                      cursor: 'pointer',
                      transition: 'all 150ms ease',
                      '&:hover': {
                        bgcolor: 'grey.200',
                        transform: 'scale(1.01)',
                      },
                      '&:visited': {
                        color: 'inherit',      // verhindert magenta
                      },
                    }}
                  >
                    <Typography variant="h6">
                      {t('blog.rightBox.topText')}
                    </Typography>
                  </Box>

                  {/* Untere klickbare Box */}
                  <Box
                    component="a"
                    href="#contact"
                    sx={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 1,
                      textDecoration: 'none',
                      color: 'inherit',
                      bgcolor: 'grey.100',
                      cursor: 'pointer',
                      transition: 'all 150ms ease',
                      '&:hover': {
                        bgcolor: 'grey.200',
                        transform: 'scale(1.01)',
                      },
                      '&:visited': {
                        color: 'inherit',      // verhindert magenta
                      },
                    }}
                  >
                    <Typography variant="h6">
                      {t('blog.rightBox.bottomText')}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            </Grid>
              {/* <Paper elevation={4} sx={{ p: 2, mb: 3 }}>
                <Typography variant="body1" align="center">
                  {t('blog.outroText')}
                </Typography>
              </Paper> */}
            <TextBlock>{t('blog.outroText')}</TextBlock>
          {/* Rest bleibt wie gehabt */}
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title={t('blog.mainFeaturedPost.title')} posts={[]} />
            <Sidebar title={sidebar.title} description={sidebar.description} social={sidebar.social} />
          </Grid>
        </Container>
      </main>
    </Layout>
  );
}