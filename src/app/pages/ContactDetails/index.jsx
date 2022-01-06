import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { usePhonebook } from 'hooks/Context';
import useDocumentTitle from 'hooks/useDocumentTitle';
import useStyles from './styles';

const ContactDetails = () => {
  const classes = useStyles();

  const { contacts, contact, setContact, fetchContact } = usePhonebook();
  useDocumentTitle(`${contact?.name ?? 'Details'} | ThePhonebook`);
  const { id } = useParams();

  useEffect(() => {
    if (contacts.length > 0) {
      const biz = contacts?.find(item => item.id === id);
      setContact(biz);
    } else {
      fetchContact(id);
    }
    // Do not add contact, contacts, fetchContact as dependencies
    // aside the already available ones
    // lest you fall into endless rerenders
  }, [id, setContact]);

  return (
    <>
      <Grid item container className={classes.box}>
        <Grid item xs={false} sm={2} />
        <Grid
          item
          container
          xs={12}
          sm={8}
          className={classes.main}
          // spacing={3}
        >
          <Grid container className={classes.content} spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography>{contact?.category}</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              {contact?.phones?.map(item => (
                <Typography key={item}>{item}</Typography>
              ))}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography>{contact?.email}</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography>{contact?.description}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
};
export default ContactDetails;
