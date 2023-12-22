'use client';

import PropTypes from 'prop-types';
import { cloneElement, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  AppBar as MuiAppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
  Menu,
  MenuItem
} from '@mui/material';

// project imports
import Logo from '../Logo';

// assets
import { IconBook, IconCreditCard, IconDashboard, IconHome2 } from '@tabler/icons-react';
import MenuIcon from '@mui/icons-material/Menu';

function ElevationScroll({ children, window }) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window
  });

  return cloneElement(children, {
    elevation: trigger ? 1 : 0
    // style: {
    //   backgroundColor: theme.palette.mode === 'dark' && trigger ? theme.palette.dark[800] : theme.palette.background.default,
    //   color: theme.palette.text.dark
    // }
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.node,
  window: PropTypes.object
};

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

const AppBar = ({ ...others }) => {
  const theme = useTheme();
  const [drawerToggle, setDrawerToggle] = useState(false);
  const [anchorEl, setAnchorEl] = useState();
  const handleClickRightMenu = (event) => {
    setAnchorEl(event?.currentTarget);
  };

  const handleCloseRightMenu = () => {
    setAnchorEl(null);
  };

  const drawerToggler = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerToggle(open);
  };

  return (
    <ElevationScroll {...others}>
      <MuiAppBar>
        <Container>
          <Toolbar sx={{ py: 1.5, px: `0 !important` }}>
            <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
              <Logo />
            </Typography>
            <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={{ xs: 1.5, md: 2.5 }}>
              <Button color="inherit" component={Link} href="/">
                Home
              </Button>
              <Button color="inherit" onClick={handleClickRightMenu}>
                Services
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseRightMenu}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center'
                }}
              >
                <MenuItem component={Link} href="/services/game-development">
                  Game Development
                </MenuItem>
                <MenuItem component={Link} href="/services/game-art">
                  Game Art
                </MenuItem>
                <MenuItem component={Link} href="/services/out-staffing">
                  Outstaffing
                </MenuItem>
                <MenuItem component={Link} href="/services/virtual-game">
                  Virtual Game
                </MenuItem>
              </Menu>
              <Button color="inherit" component={Link} href="/ourwork">
                Our Work
              </Button>
              <Button color="inherit" component={Link} href="/blog">
                Blog
              </Button>
              <Button color="inherit" component={Link} href="/about-us">
                About Us
              </Button>
              <Button color="inherit" component={Link} href="/contact-us">
                Contact Us
              </Button>
              <Button
                component={Link}
                href="/webverse/index.html"
                target="__blank"
                // disableElevation
                variant="contained"
                color="secondary"
                sx={{
                  boxShadow: theme.customShadows.secondary,
                  ':hover': {
                    boxShadow: 'none'
                  },
                  fontStyle: 'italic',
                  fontFamily: 'DRAGON_HUNTER',
                  fontWeight: 900,
                  display: 'inline-block',
                  fontSize: 14,
                  background: 'linear-gradient(90deg, rgba(50, 243, 253, 1) 5%, rgba(71, 54, 228, 1) 70%)',
                  padding: '10px 20px',
                  borderRadius: 40
                }}
              >
                WEBVERSE
              </Button>
            </Stack>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                <MenuIcon />
              </IconButton>
              <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                {drawerToggle && (
                  <Box sx={{ width: 'auto' }} role="presentation" onClick={drawerToggler(false)} onKeyDown={drawerToggler(false)}>
                    <List>
                      <Link style={{ textDecoration: 'none' }} href="#" target="_blank">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconHome2 />
                          </ListItemIcon>
                          <ListItemText primary="Home" />
                        </ListItemButton>
                      </Link>
                      <Link style={{ textDecoration: 'none' }} href="/login" target="_blank">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconDashboard />
                          </ListItemIcon>
                          <ListItemText primary="Dashboard" />
                        </ListItemButton>
                      </Link>
                      <Link style={{ textDecoration: 'none' }} href="https://codedthemes.gitbook.io/berry" target="_blank">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconBook />
                          </ListItemIcon>
                          <ListItemText primary="Documentation" />
                        </ListItemButton>
                      </Link>
                      <Link style={{ textDecoration: 'none' }} href="https://links.codedthemes.com/hsqll" target="_blank">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconCreditCard />
                          </ListItemIcon>
                          <ListItemText primary="Purchase Now" />
                        </ListItemButton>
                      </Link>
                    </List>
                  </Box>
                )}
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </ElevationScroll>
  );
};

export default AppBar;
