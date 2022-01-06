import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { usePhonebook } from 'hooks/Context';
import useDocumentTitle from 'hooks/useDocumentTitle';
import { useSearchParams, useNavigate } from 'react-router-dom';
import useStyles from './styles';

function DirectoryHome() {
  const classes = useStyles();

  useDocumentTitle('Search Results | MyPhonebook');

  const { contacts, fetchContacts } = usePhonebook();

  const [searchParams] = useSearchParams();

  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(searchParams.get('q')?.toLowerCase() || '');
  }, [searchParams]);

  useEffect(() => {
    // if (contacts?.length)
    fetchContacts();
  }, []);

  return (
    <>
      <Grid item container className={classes.box}>
        <Grid item xs={false} sm={2} />
        <Grid item container xs={12} sm={8} className={classes.main}>
          <Typography variant="h2">
            You searched for:{' '}
            <Typography variant="h5">{`"${value}"`}</Typography>
          </Typography>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
}
export default DirectoryHome;
