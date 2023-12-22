'use client';

import React from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';
import Customization from 'layout/Customization';

import { gridSpacing } from 'store/constant';
import AppBar from 'components/ui-component/extended/AppBar';
import FooterSection from 'components/landingpage/FooterSection';
import ContactForm from './contactForm';

// assets
// const mailImg = '/assets/images/landing/widget-mail.svg';

// ===========================|| CONTACT CARD - FORMS ||=========================== //

const ContactCard = () => {
  const theme = useTheme();

  const HeaderWrapper = styled('div')(({ theme }) => ({
    paddingTop: 30,
    overflowX: 'hidden',
    overflowY: 'clip',
    background:
      theme.palette.mode === 'dark'
        ? theme.palette.background.default
        : `linear-gradient(360deg, ${theme.palette.grey[100]} 1.09%, ${theme.palette.background.paper} 100%)`,
    [theme.breakpoints.down('md')]: {}
  }));

  const SectionWrapper = styled('div')({
    paddingTop: 100,
    paddingBottom: 100
  });

  return (
    <>
      <HeaderWrapper id="ourwork">
        <AppBar />
      </HeaderWrapper>

      <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default', width: '100%', pt: 10, pb: 40 }}>
        <Container>
          <Grid container justifyContent="center" spacing={gridSpacing}>
            <Grid item sm={10} md={7} sx={{ mt: { md: 8, xs: 2.5 }, mb: { md: 8, xs: 2.5 } }}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <Typography
                    variant="h1"
                    color="white"
                    component="div"
                    sx={{
                      fontSize: '3.5rem',
                      fontWeight: 900,
                      // lineHeight: 1.4,
                      [theme.breakpoints.down('md')]: { fontSize: '1.8125rem', marginTop: '80px' }
                    }}
                  >
                    Talk to our account expert
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={10} sx={{ mb: -37.5 }}>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'dark.900', pb: 0 }}>
        <FooterSection />
      </SectionWrapper>
      <Customization />
    </>
  );
};

export default ContactCard;
