import React from 'react';
import { Grid } from '@mui/material';
import ContactsList from 'components/ContactsList';
import useDocumentTitle from 'hooks/useDocumentTitle';
import useStyles from './styles';

function DirectoryHome() {
  useDocumentTitle('Home | My Phonebook');

  const classes = useStyles();

  return (
    <Grid item container className={classes.main}>
      <Grid item xs={false} sm={1} />
      <Grid item container xs={12} sm={10} className={classes.content}>
        <ContactsList />
      </Grid>
      <Grid item xs={false} sm={1} />
    </Grid>
  );
}
export default DirectoryHome;
