import React, { useState } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Add, Close } from '@mui/icons-material';
import CustomButton from 'components/CustomButton';
import { usePhonebook } from 'hooks/Context';
import AddContactForm from 'components/AddContactForm';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
  },
  icon: {
    color: theme.palette.common.white,
  },
  content: {
    padding: theme.spacing(2, 5),
    [theme.breakpoints.up('sm')]: {
      maxWidth: '100%',
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(4),
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { openDrawer, setOpenDrawer } = usePhonebook();

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
      >
        <Box className={classes.content}>
          <IconButton
            className={classes.closeButton}
            onClick={() => {
              setOpenDrawer(!openDrawer);
            }}
          >
            <Close />
          </IconButton>
          <AddContactForm />
        </Box>
      </Drawer>
      <CustomButton
        color="primary"
        label={isMobile ? <Add /> : 'Add Contact'}
        onClick={() => setOpenDrawer(!openDrawer)}
        startIcon={!isMobile && <Add className={classes.icon} />}
      />
    </>
  );
}
export default DrawerComponent;
