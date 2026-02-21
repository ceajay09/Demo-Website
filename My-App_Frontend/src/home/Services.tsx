import * as React from 'react';
import { Container, Grid, Paper, Typography, CssBaseline, ThemeProvider, Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Layout from './Layout';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';

const theme = createTheme();

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    maxWidth: '60%', // Good for landscape
    width: 'auto',
    [theme.breakpoints.down('sm')]: { // When the device is small
      maxWidth: '80%',
    },
    [theme.breakpoints.only('xs')]: { // Extra small devices
      maxWidth: '95%',
    },
    '@media (orientation: portrait)': { // Specific styles for portrait mode
      maxWidth: '90%',
    },
  },
}));

export default function Services() {
  const [openOverview, setOpenOverview] = React.useState(false);
  const [openDetail, setOpenDetail] = React.useState(false);
  const { t } = useTranslation();

  const handleClickOpenOverview = () => {
    setOpenOverview(true);
  };
  const handleCloseOverview = () => {
    setOpenOverview(false);
  };

  const handleClickOpenDetail = () => {
    setOpenDetail(true);
  };
  const handleCloseDetail = () => {
    setOpenDetail(false);
  };

  return (
    <Layout>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" style={{ marginBottom: '15px' }}>
          <Typography variant="h3" align="center" paddingTop={2} gutterBottom>
            {t('services.title')}
          </Typography>
          <Paper elevation={6} sx={{ p: 4, margin: 'auto', maxWidth: 936 }}>
            <Typography variant="h4" align="center" gutterBottom>
              {t('services.introduction.title')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('services.introduction.text')}
            </Typography>
            <Typography variant="h4" align="center" gutterBottom>
              {t('services.technologiesAndToolsUsed.title')}
            </Typography>

            <Box display="flex" justifyContent="center" margin={2} onClick={handleClickOpenOverview}>
              <img src={`/assets/My-App-Overview.drawio.svg`} alt={t('services.technologiesAndToolsUsed.overviewImageAlt')}
                style={{ width: '60%', height: 'auto' }} />
            </Box>
            <BootstrapDialog
              onClose={handleCloseOverview}
              aria-labelledby={t('services.technologiesAndToolsUsed.overviewImageAlt')}
              open={openOverview}
            >
              <IconButton
                aria-label="close"
                onClick={handleCloseOverview}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent>
                <Box display="flex" justifyContent="center" margin={2} onClick={handleClickOpenOverview}>
                  <img src={`/assets/My-App-Overview.drawio.svg`} alt={t('services.technologiesAndToolsUsed.overviewImageAlt')}
                    style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }} />
                </Box>
              </DialogContent>
            </BootstrapDialog>

            <Typography variant="h6" gutterBottom>
              {t('services.versionControlAndCiCd.title')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('services.versionControlAndCiCd.text')}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {t('services.awsInfrastructure.title')}
            </Typography>

            <Box display="flex" justifyContent="center" margin={2} onClick={handleClickOpenDetail}>
              <img src={`/assets/My-App-diagrams.drawio.svg`} alt={t('services.technologiesAndToolsUsed.awsDetailImageAlt')}
                style={{ width: '60%', height: 'auto' }} />
            </Box>
            <BootstrapDialog
              onClose={handleCloseDetail}
              aria-labelledby={t('services.technologiesAndToolsUsed.awsDetailImageAlt')}
              open={openDetail}
            >
              <IconButton
                aria-label="close"
                onClick={handleCloseDetail}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent>
                <Box display="flex" justifyContent="center" margin={2} onClick={handleClickOpenDetail}>
                  <img src={`/assets/My-App-diagrams.drawio.svg`} alt={t('services.technologiesAndToolsUsed.awsDetailImageAlt')}
                    style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }} />
                </Box>
              </DialogContent>
            </BootstrapDialog>

            <Typography variant="body1" paragraph>
              {t('services.awsInfrastructure.text')}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {t('services.frontendDevelopment.title')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('services.frontendDevelopment.text')}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {t('services.backendDevelopment.title')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('services.backendDevelopment.text')}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {t('services.dockerAndContainerization.title')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('services.dockerAndContainerization.text')}
            </Typography>
              <Typography variant="body1" component="div">
                <ul>
                  <li><strong>Backend Service:</strong> {t('services.dockerAndContainerization.backendService')}</li><br />
                  <li><strong>Frontend Service: </strong>{t('services.dockerAndContainerization.frontendService')}</li><br />
                  <li><strong>Traefik as a Reverse Proxy: </strong>{t('services.dockerAndContainerization.traefikService')}</li>
                </ul>
            </Typography>
            <Typography variant="h6" gutterBottom>
              {t('services.continuousMonitoringAndLoadBalancing.title')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('services.continuousMonitoringAndLoadBalancing.text')}
            </Typography>
            <Typography variant="h4" gutterBottom>
              {t('services.repositoryAndCodeStructure.title')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('services.repositoryAndCodeStructure.text')}
            </Typography>
            <Typography variant="body1" component="div">
                <ul>
                  <li><strong>Config: </strong>{t('services.repositoryAndCodeStructure.config')}</li>
                  <li><strong>Controllers: </strong>{t('services.repositoryAndCodeStructure.controllers')}</li>
                  <li><strong>Services: </strong>{t('services.repositoryAndCodeStructure.services')}</li>
                  <li><strong>Repositories: </strong>{t('services.repositoryAndCodeStructure.repositories')}</li>
                  <li><strong>Models: </strong>{t('services.repositoryAndCodeStructure.models')}</li>
                </ul>
            </Typography>
            <Typography variant="h4" align="center" gutterBottom>
              {t('services.summary.title')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('services.summary.text')}
            </Typography>
          </Paper>
        </Container>
      </ThemeProvider>
    </Layout>
  );
}
