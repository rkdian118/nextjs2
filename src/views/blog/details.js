/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

'use client';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
// project imports
import Customization from 'layout/Customization';
import AppBar from 'components/ui-component/extended/AppBar';
import { Typography, Stack, IconButton, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ReactHtmlParser from 'react-html-parser';
import FooterSection from 'components/landingpage/FooterSection';
import Chip from 'components/ui-component/extended/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import axiosServices from 'utils/axiosApi';
import { useParams } from 'next/navigation';
import { format } from 'date-fns';
import CommentSection from './comment';
import Avatar from 'components/ui-component/extended/Avatar';
import MainCard from 'components/ui-component/cards/MainCard';

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

const BlogDetails = () => {
  const theme = useTheme();
  const params = useParams();
  const { blogId } = params;

  const BaseUrl = process.env.REACT_API_URL;
  const [blogDetails, setBlogDetails] = useState({});

  const getBlogDetails = useCallback(async () => {
    try {
      const response = await axiosServices.post('api/blog/detail', { id: blogId });
      setBlogDetails(response?.data?.ResponseBody);
    } catch (error) {
      console.log(error);
    }
  }, [blogId]);

  useEffect(() => {
    getBlogDetails();
  }, [getBlogDetails]);

  console.log(blogDetails, 'blogDetails');

  return (
    <>
      {/* 1. header and hero section */}
      <HeaderWrapper id="blog-details">
        <AppBar />
      </HeaderWrapper>

      {/* Blog Content Details */}
      <SectionWrapper
        sx={{
          bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'dark.900',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography variant="subtitle2" noWrap sx={{ fontSize: 18, fontWeight: 900, py: 2 }}>
          {blogDetails?.createdAt && `Published: ${format(new Date(blogDetails.createdAt), 'E, MMMM d yyyy')}`}
        </Typography>
        <Typography sx={{ fontSize: 30, fontWeight: 900, pb: 1 }}>{blogDetails?.title}</Typography>
        <Chip sx={{ fontWeight: 900, my: 2 }} chipcolor="medium" label={blogDetails?.category?.name} size="medium" />
        {blogDetails?.image && (
          <Image
            src={BaseUrl + blogDetails?.image}
            alt="cover"
            width={1150}
            height={600}
            style={{
              borderRadius: '1.5rem',
              border: '2px solid #ccc',
              transition: 'all 1s ease-out 0s'
            }}
          />
        )}
        <Typography variant="subtitle1" sx={{ py: 1, px: 25 }}>
          {blogDetails?.content && ReactHtmlParser(blogDetails?.content)}
        </Typography>
      </SectionWrapper>

      {/* Share icons */}
      <SectionWrapper
        sx={{
          bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'dark.900',
          py: 0,
          px: 25,
          display: 'flex'
        }}
      >
        <Stack direction="row">
          <IconButton href={`https://www.wmgamingstudioz.com/details/${blogDetails?._id}`} target="__blank">
            <FacebookIcon color="primary" sx={{ fontSize: 30 }} round />
          </IconButton>
          <IconButton href={`https://www.wmgamingstudioz.com/details/${blogDetails?._id}`} target="__blank">
            <TwitterIcon color="primary" sx={{ fontSize: 30 }} round />
          </IconButton>
          <IconButton href={`https://www.wmgamingstudioz.com/details/${blogDetails?._id}`} target="__blank">
            <LinkedInIcon color="primary" sx={{ fontSize: 30 }} round />
          </IconButton>
        </Stack>
      </SectionWrapper>

      {/* Comment Add form Sections */}
      <SectionWrapper
        sx={{
          bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'dark.900',
          py: 2,
          px: 25
          // display: 'flex'
        }}
      >
        <Grid item xs={12} md={6}>
          <CommentSection blogId={blogDetails._id} />
        </Grid>
      </SectionWrapper>

      {/* Comment List Sections */}
      <SectionWrapper
        sx={{
          bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'dark.900',
          py: 2,
          px: 25
          // display: 'flex'
        }}
      >
        {blogDetails?.comments?.map((comment) => (
          <MainCard>
            <Grid container spacing={2} alignItems="center" pt={2}>
              <Grid item>
                <Avatar alt={comment?.user_name} src={`${avatarImage}`} />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography align="left" fontSize={16} fontWeight={900} component="div">
                  {comment?.user_name} <CheckCircleIcon sx={{ color: 'success.dark', width: 14, height: 14 }} />
                </Typography>
                <Typography align="left" variant="subtitle2" noWrap>
                  {format(new Date(comment.createdAt), 'MMM d yyyy')}
                </Typography>
                <Typography align="left" varient="body1" component="div">
                  {comment?.comment}
                </Typography>
              </Grid>
            </Grid>
          </MainCard>
        ))}
      </SectionWrapper>

      {/* footer section */}
      <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'dark.900', pb: 0 }}>
        <FooterSection />
      </SectionWrapper>
      <Customization />
    </>
  );
};

export default BlogDetails;
