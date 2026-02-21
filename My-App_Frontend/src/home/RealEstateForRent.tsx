import * as React from 'react';
import { Container, Grid, Paper, Box, Typography, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Layout from './Layout';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';


export default function RealEstateForRent() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" paddingTop={2} gutterBottom>
        {t('realEstateForRent.title')}
        </Typography>
        <Accordion sx={{ p: 0, mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="subtitle1" gutterBottom sx={{ textDecoration: 'underline' }}>
            {t('realEstateForRent.purpose.title')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography variant="body2" paragraph sx={{ fontStyle: 'italic' }}>
          {t('realEstateForRent.purpose.text')}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ p: 0, mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="subtitle1" gutterBottom sx={{ textDecoration: 'underline' }}>
            {t('realEstateForRent.contactInformation.title')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>  
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} md={2} lg={1}>
                  <Typography variant="body2" paragraph sx={{ fontStyle: 'italic' }}>
                  {t('realEstateForRent.contactInformation.owner')}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9} md={10} lg={11}>
                  <Typography variant="body2" paragraph sx={{ fontStyle: 'italic' }}>
                  {t('realEstateForRent.contactInformation.ownerName')}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={2} lg={1}>
                  <Typography variant="body2" paragraph sx={{ fontStyle: 'italic' }}>
                  {t('realEstateForRent.contactInformation.email')}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9} md={10} lg={11}>
                  <Typography variant="body2" paragraph sx={{ fontStyle: 'italic' }}>
                  {t('realEstateForRent.contactInformation.emailAddress')}
                  </Typography>
                </Grid>
              </Grid>
          </AccordionDetails>
        </Accordion>        <Accordion sx={{ p: 0, mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="subtitle1" gutterBottom sx={{ textDecoration: 'underline' }}>
            {t('realEstateForRent.disclaimer.title')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" paragraph sx={{ fontStyle: 'italic' }}>
            {t('realEstateForRent.disclaimer.text')}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Layout >
  );
}
