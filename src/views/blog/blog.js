/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */

'use client';

// material-ui
import React, { useCallback, useEffect, useState } from 'react';
import { useTheme, styled } from '@mui/material/styles';
// project imports
import Customization from 'layout/Customization';
import AppBar from 'components/ui-component/extended/AppBar';

import FooterSection from 'components/landingpage/FooterSection';
import Image from 'next/image';
import { Box, Typography, IconButton, Container, Grid, Stack } from '@mui/material';
import Chip from 'components/ui-component/extended/Chip';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { gridSpacing } from 'store/constant';
import MainCard from 'components/ui-component/cards/MainCard';
import EastIcon from '@mui/icons-material/East';
import axios from 'utils/axiosApi';
import Avatar from 'components/ui-component/extended/Avatar';
import { format } from 'date-fns';
import Link from 'next/link';

const avatarImage = '/assets/images/users';

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
  paddingTop: 50,
  paddingBottom: 50
});

// =============================|| LANDING MAIN ||============================= //

const BlogPage = () => {
  const theme = useTheme();
  const BaseUrl = process.env.REACT_API_URL;
  const [blogs, setBlogs] = useState([]);

  const getBlogs = useCallback(async () => {
    try {
      const response = await axios.get('api/blog/active');
      setBlogs(response?.data?.ResponseBody);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <>
      {/* 1. header and hero section */}
      <HeaderWrapper id="blog">
        <AppBar />
      </HeaderWrapper>

      <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'dark.900', pb: 0 }}>
        <Container sx={{ py: 8 }}>
          <Typography sx={{ fontSize: '40px', fontWeight: 'bold', pb: 5, display: 'flex' }}>Blogs</Typography>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid container item spacing={6}>
                    {blogs.map((blog) => (
                      <Grid item xs={6}>
                        <Link href={`/blog/details/${blog._id}`} passHref>
                          <MainCard justifyContent="center">
                            <Image
                              src={BaseUrl + blog.image}
                              alt="cover"
                              width="450"
                              height="210"
                              style={{
                                objectFit: 'cover',
                                borderRadius: '1.5rem',
                                border: '2px solid #ccc',
                                transition: 'all 1s ease-out 0s'
                              }}
                            />
                            <Chip sx={{ fontWeight: 900, my: 1.5 }} chipcolor="medium" label={blog?.category?.name} size="large" />
                            <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>{blog?.title?.slice(0, 90)}</Typography>
                            <Stack direction="row" sx={{ paddingTop: '15px' }}>
                              <IconButton href={`https://www.wmgamingstudioz.com/details/${blog._id}`} target="__blank">
                                <FacebookIcon color="primary" sx={{ fontSize: 20 }} round />
                              </IconButton>
                              <IconButton href={`https://www.wmgamingstudioz.com/details/${blog._id}`} target="__blank">
                                <TwitterIcon color="primary" sx={{ fontSize: 20 }} round />
                              </IconButton>
                              <IconButton href={`https://www.wmgamingstudioz.com/details/${blog._id}`} target="__blank">
                                <LinkedInIcon color="primary" sx={{ fontSize: 20 }} round />
                              </IconButton>
                            </Stack>
                            <Grid container spacing={2} alignItems="center" pt={2}>
                              <Grid item>
                                <Avatar alt="User 1" src={`${avatarImage}`} />
                              </Grid>
                              <Grid item xs zeroMinWidth>
                                <Typography align="left" variant="subtitle1" component="div">
                                  {blog?.author?.name}{' '}
                                  {blog?.author?.status === 1 && <CheckCircleIcon sx={{ color: 'success.dark', width: 14, height: 14 }} />}
                                </Typography>
                                <Typography align="left" variant="subtitle2" noWrap>
                                  {format(new Date(blog.createdAt), 'E, MMM d yyyy')}
                                </Typography>
                              </Grid>
                              <IconButton href={`https://www.wmgamingstudioz.com/details/${blog.id}`} target="__blank">
                                <EastIcon sx={{ fontSize: 32 }} />
                              </IconButton>
                            </Grid>
                          </MainCard>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Box>
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

export default BlogPage;
