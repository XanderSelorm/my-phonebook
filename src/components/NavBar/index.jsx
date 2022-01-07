import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';

import DrawerComponent from 'components/DrawerComponent';
import SearchBar from 'components/SearchBar';
import useStyles from './styles';

function NavBar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    // <Box className={classes.container}>
    <AppBar
      position="sticky"
      className={classes.bar}
      // position="relative"
      color="inherit"
      elevation={0}
    >
      <Toolbar className={classes.toolbar}>
        <Grid item container className={classes.content}>
          <Grid item xs={false} sm={1} />
          <Grid
            item
            container
            xs={12}
            sm={10}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item sm="auto" order="1">
              <Typography variant="h5" component="h1" className={classes.logo}>
                <Link to="/">My Phonebook</Link>
              </Typography>
            </Grid>

            <Grid
              item
              flexGrow={isMobile && 1}
              mt={isMobile && theme.spacing(2)}
              sm={false}
              md={8}
              order={isMobile ? '3' : '2'}
            >
              <SearchBar />
            </Grid>

            <Grid item sm="auto" order={isMobile ? '2' : '3'}>
              <DrawerComponent />
            </Grid>
          </Grid>
          <Grid item xs={false} sm={1} />
        </Grid>
      </Toolbar>
    </AppBar>
    // </Box>
  );
}

export default NavBar;
