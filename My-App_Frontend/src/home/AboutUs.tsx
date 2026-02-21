import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper, Box, Typography, CssBaseline, ThemeProvider, Button, Link } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Layout from './Layout';
import DownloadIcon from '@mui/icons-material/Download';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const theme = createTheme();
const practicalProjectURL = "https://studierendenprojekte.wirtschaft.fhnw.ch/view/2750"
const bachelorProjectURL = "https://studierendenprojekte.wirtschaft.fhnw.ch/view/2019"


export default function AboutUs() {
  const { t } = useTranslation();
  const [showNumber, setShowNumber] = useState(false);

  const handleClick = () => {
    setShowNumber(!showNumber);
  };

  return (
    <Layout>
      <main>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" paddingTop={2} gutterBottom>
            {t('aboutUs.title')}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Paper elevation={4} sx={{ p: 2, mb: 2 }}>
                <img src={`/assets/Passfoto.jpg`} alt="Image of myself" style={{ width: '100%', height: 'auto' }} />
              </Paper>
              <Paper elevation={4} sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6" gutterBottom>{t('aboutUs.contactDetails')}</Typography>
                <Typography component="div" variant="body1" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{t('aboutUs.qualification')}</span>
                  <span>{t('aboutUs.qualificationDetail')}</span>
                </Typography>
                <Typography component="div" variant="body1" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{t('aboutUs.age')}</span>
                  <span>28</span>
                </Typography>
                <Typography component="div" variant="body1" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body1" component="span">
                    {t('aboutUs.phoneNumber')}
                  </Typography>
                  {showNumber ? (
                    <Typography variant="body1" component="span">
                      +41 xx xx xx
                    </Typography>
                  ) : (
                    <Button onClick={handleClick}>
                      <Typography component="div" variant="body1" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        {t('aboutUs.showNumber')}
                      </Typography>
                    </Button>
                  )}
                </Typography>
                <Typography component="div" variant="body1" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{t('aboutUs.email')}</span>
                  <Link href="mailto:xxxxx@gmail.com">
                    xxxx@gmail.com
                  </Link>
                </Typography>
                <Typography component="div" variant="body1" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{t('aboutUs.basedIn')}</span>
                  <span>{t('aboutUs.basedInDetail')}</span>
                </Typography>
                {/* <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  component="a"
                  href="/api/downloadPDF/CV_Jaquiery_Cesar.pdf"
                  sx={{ marginTop: 2 }}
                >
                  {t('aboutUs.downloadCV')}
                </Button> */}
              </Paper>
              {/* <Paper elevation={4} sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6" gutterBottom>{t('aboutUs.interests')}</Typography>
                <Typography variant="body1"><ul>
                  <li>Small private IT projects</li>
                  <li>Climbing</li>
                  <li>Hiking</li>
                  <li>Water sports</li>
                  <li>Diving</li>
                </ul></Typography>
              </Paper> */}
              
              <Paper elevation={4} sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6" gutterBottom>{t('aboutUs.interests')}</Typography>
                <Typography variant="body1" component="div">
                  <ul>
                    {t('aboutUs.interestList').split(', ').map((interest) => (
                      <li key={interest}>{interest}</li>
                    ))}
                  </ul>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={7}>
              <Paper elevation={4} sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6" gutterBottom>{t('aboutUs.hello')}</Typography>
                <Accordion sx={{ p: 0, mb: 2 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography variant="body1">
                      {t('aboutUs.techJourney')}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      {t('aboutUs.techJourneyDetail')}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ p: 0, mb: 2 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography variant="body1">
                      {t('aboutUs.keySkills')}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      {t('aboutUs.keySkillsDetail')}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ p: 0, mb: 2 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography variant="body1">
                      {t('aboutUs.continuousLearning')}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      {t('aboutUs.continuousLearningDetail')}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ p: 0, mb: 2 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography variant="body1">
                      {t('aboutUs.careerGoals')}<br />
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      {t('aboutUs.careerGoalsDetail')}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Paper>
              <Paper elevation={4} sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6" gutterBottom>{t('aboutUs.projects')}</Typography>
                <Typography variant="subtitle2" gutterBottom>
                  {t('aboutUs.bachelorThesis')}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {t('aboutUs.bachelorThesisDetail')}
                </Typography>
                <Typography variant="body2" component="div">
                  <ul>
                    {t('aboutUs.bachelorThesisTasks').split(', ').map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </Typography>
                {/* <Link variant="body2" href={practicalProjectURL} target="_blank" sx={{ zIndex: 2 }}>
                  {t('aboutUs.moreDetails')}
                </Link> */}
                <br /><br />
                <Typography variant="subtitle2" gutterBottom>
                  {t('aboutUs.practicalProject')}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {t('aboutUs.practicalProjectDetail')}
                </Typography>
                <Typography variant="body2" component="div">
                  <ul>
                    {t('aboutUs.practicalProjectTasks').split(', ').map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </Typography>
                {/* <Link variant="body2" href={bachelorProjectURL} target="_blank" sx={{ zIndex: 2 }}>
                  {t('aboutUs.moreDetails')}
                </Link> */}
              </Paper>
              <Grid item xs={12} md={4}>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    </Layout>
  );
}