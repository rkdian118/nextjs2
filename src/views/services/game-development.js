/* eslint-disable import/no-unresolved */

'use client';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
// project imports
import Customization from 'layout/Customization';
import AppBar from 'components/ui-component/extended/AppBar';
import { Container, Typography } from '@mui/material';

import FooterSection from 'components/landingpage/FooterSection';
import vr1 from '../../../public/assets/images/website_images/VR.jpg';
import Image from 'next/image';
import Head from 'next/head';

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

// =============================|| LANDING MAIN ||============================= //

const ServicesGame = () => {
  const theme = useTheme();

  return (
    <>
      {/* 1. header and hero section */}
      <HeaderWrapper id="game-development">
        <AppBar />
      </HeaderWrapper>
      <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'dark.900', pb: 0 }}>
        {/* <FooterSection /> */}
        <Typography variant="subtitle1">Game Development</Typography>
      </SectionWrapper>
      {/* 2. card section */}
      <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default', width: '100%' }}>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image src={vr1} alt="home" width="1500" height="600" />
        </Container>
      </SectionWrapper>

      <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'dark.900', pb: 0 }}>
        <FooterSection />
      </SectionWrapper>
      <Customization />
    </>
  );
};

export default ServicesGame;
