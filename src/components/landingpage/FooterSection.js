// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, IconButton, Link, Stack, Typography, FormControl, InputLabel, OutlinedInput } from '@mui/material';

// project import
import Chip from 'components/ui-component/extended/Chip';
import { frameworks } from './FrameworkSection';

// assets
import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import Image from 'next/image';
import logoSmall from '../../../public/assets/images/logo-small.png';
import LayersTwoToneIcon from '@mui/icons-material/LayersTwoTone';

// Link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.hint,
  '&:hover': {
    color: theme.palette.primary.main
  },
  '&:active': {
    color: theme.palette.primary.main
  }
}));

// =============================|| LANDING - FOOTER SECTION ||============================= //

const FooterSection = () => {
  const theme = useTheme();
  const textColor = theme.palette.mode === 'dark' ? 'text.secondary' : 'text.hint';

  return (
    <>
      <Container sx={{ mb: 15 }}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Grid container spacing={8}>
              <Grid item xs={12} md={4}>
                <Stack spacing={{ xs: 2, md: 5 }}>
                  <Typography
                    variant="h4"
                    color={textColor}
                    display="flex"
                    // justifyContent="space-between"
                    alignItems="center"
                    sx={{ fontWeight: 500 }}
                  >
                    <Image src={logoSmall} alt="Berry" width="130" />
                    &nbsp;&nbsp; Webmobril Gaming Studioz
                  </Typography>
                  <Typography variant="body2" color={textColor}>
                    Berry React is a dashboard template that utilizes the Material-UI framework and the React JavaScript library. It offers
                    a range of features and customization options to help you create a powerful and user-friendly admin panel.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container spacing={{ xs: 5, md: 2 }}>
                  {/* <Grid item xs={6} sm={2} /> */}
                  <Grid item xs={6} sm={4}>
                    <Stack spacing={{ xs: 3, md: 5 }}>
                      <Typography variant="h4" color={textColor} sx={{ fontWeight: 500 }}>
                        Our Services
                      </Typography>
                      <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                        <FooterLink href="/blog" underline="none">
                          Blog
                        </FooterLink>
                        <FooterLink href="/about-us" underline="none">
                          About
                        </FooterLink>
                        <FooterLink href="/privacy-policy" underline="none">
                          Privacy Policy
                        </FooterLink>
                        <FooterLink href="/services/out-staffing" underline="none">
                          Outstaffing
                        </FooterLink>
                        <FooterLink href="/services/game-development" underline="none">
                          Game Development
                        </FooterLink>
                        <FooterLink href="/services/game-art" underline="none">
                          Game Art
                        </FooterLink>
                        <FooterLink href="/services/virtual-game" underline="none">
                          Virtual Game
                        </FooterLink>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} sm={8} display="flex" alignItems="center" flexDirection="column">
                    <FormControl
                      fullWidth
                      // sx={{ ...theme.typography.customInput }}
                      sx={{
                        ...theme.typography.customInput,
                        borderRadius: '5rem'
                      }}
                    >
                      <InputLabel htmlFor="outlined-adornment-email-forgot">Enter your Email</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-email-forgot"
                        type="email"
                        value=""
                        name="email"
                        // onBlur={handleBlur}
                        // onChange={handleChange}
                        label="Email Address / Username"
                        inputProps={{}}
                      />
                    </FormControl>
                    <Button
                      variant="contained"
                      endIcon={<LayersTwoToneIcon />}
                      aria-label="two layers"
                      sx={{
                        boxShadow: theme.customShadows.secondary,
                        ':hover': {
                          boxShadow: 'none'
                        },
                        fontStyle: 'oblique',
                        fontWeight: 'bold',
                        borderRadius: '5rem',
                        background: 'linear-gradient(90deg, rgba(50, 243, 253, 1) 5%, rgba(71, 54, 228, 1) 70%)',
                        marginTop: '5px'
                      }}
                    >
                      Subscribe Now
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ bgcolor: 'dark.dark', py: { xs: 3, sm: 1.5 } }}>
        <Container>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignItems="center"
            justifyContent="space-between"
            spacing={{ xs: 1.5, sm: 1, md: 3 }}
          >
            <Typography color="text.secondary">
              © WM Gaming Studioz is managed by{' '}
              <Link href="https://wmgamingstudioz.com/" target="_blank" underline="hover">
                Webmobril Tech.
              </Link>
            </Typography>
            <Stack direction="row" alignItems="center" spacing={{ xs: 3, sm: 1.5, md: 2 }}>
              <IconButton size="small" component={Link} href="https://links.codedthemes.com/HTIBc" aria-label="blog" target="_blank">
                <PublicIcon sx={{ color: 'text.secondary', '&:hover': { color: 'error.main' } }} />
              </IconButton>
              <IconButton size="small" component={Link} href="https://twitter.com/codedthemes" aria-label="twitter" target="_blank">
                <TwitterIcon sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }} />
              </IconButton>
              <IconButton size="small" component={Link} href="https://dribbble.com/codedthemes" aria-label="dribble" target="_blank">
                <SportsBasketballIcon sx={{ color: 'text.secondary', '&:hover': { color: 'warning.main' } }} />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default FooterSection;
