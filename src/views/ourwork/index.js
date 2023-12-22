/* eslint-disable import/no-unresolved */

'use client';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
// project imports
import Customization from 'layout/Customization';
import AppBar from 'components/ui-component/extended/AppBar';
import { Container, Grid } from '@mui/material';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import FooterSection from 'components/landingpage/FooterSection';
import vr1 from '../../../public/assets/images/website_images/VR.jpg';
import Image from 'next/image';

const StyledContainer = styled('div')({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto'
});

const StyledSlide = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%', // Use 100% height to maintain aspect ratio
  '& img': {
    maxWidth: '100%', // Ensure images don't exceed the container width
    maxHeight: '100%', // Ensure images don't exceed the container height
    objectFit: 'contain' // Maintain aspect ratio and prevent stretching
  }
});

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

const Index = () => {
  const theme = useTheme();

  const images = [
    '/assets/images/ourwork/i (1).png',
    '/assets/images/ourwork/i (2).png',
    '/assets/images/ourwork/i (3).png',
    '/assets/images/ourwork/i (4).png',
    '/assets/images/ourwork/i (5).png',
    '/assets/images/ourwork/i (6).png',
    '/assets/images/ourwork/i (7).png',
    '/assets/images/ourwork/i (8).png',
    '/assets/images/ourwork/i (9).png',
    '/assets/images/ourwork/i (10).png',
    '/assets/images/ourwork/i (11).png',
    '/assets/images/ourwork/i (12).png',
    '/assets/images/ourwork/i (13).png',
    '/assets/images/ourwork/i (14).png',
    '/assets/images/ourwork/i (15).png',
    '/assets/images/ourwork/i (16).png',
    '/assets/images/ourwork/i (17).png',
    '/assets/images/ourwork/i (18).png',
    '/assets/images/ourwork/i (19).png',
    '/assets/images/ourwork/i (20).png',
    '/assets/images/ourwork/i (21).png',
    '/assets/images/ourwork/i (22).png',
    '/assets/images/ourwork/i (23).png',
    '/assets/images/ourwork/i (24).png',
    '/assets/images/ourwork/i (25).png',
    '/assets/images/ourwork/i (26).png',
    '/assets/images/ourwork/i (27).png',
    '/assets/images/ourwork/i (28).png',
    '/assets/images/ourwork/i (29).png',
    '/assets/images/ourwork/i (31).png',
    '/assets/images/ourwork/i (32).png',
    '/assets/images/ourwork/i (33).png',
    '/assets/images/ourwork/i (34).png',
    '/assets/images/ourwork/i (35).png',
    '/assets/images/ourwork/i (36).png',
    '/assets/images/ourwork/i (37).png',
    '/assets/images/ourwork/i (38).png',
    '/assets/images/ourwork/i (39).jpg'
  ];

  const slides = images.map((image, index) => (
    <StyledSlide key={index}>
      <Image src={image} width="220" height="390" alt={`Slide ${index + 1}`} />
    </StyledSlide>
  ));

  const settings = {
    className: 'center',
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      {/* 1. header and hero section */}
      <HeaderWrapper id="ourwork">
        <AppBar />
      </HeaderWrapper>

      {/** top bar sliders */}
      <SectionWrapper
        sx={{
          bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'dark.900',
          pb: 0,
          height: 600,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <StyledContainer>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={10} md={8} lg={12}>
              <Slider {...settings} sx={{ width: '100%' }}>
                {slides}
              </Slider>
            </Grid>
          </Grid>
        </StyledContainer>
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

export default Index;
