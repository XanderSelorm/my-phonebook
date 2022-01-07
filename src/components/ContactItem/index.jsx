import { Box, Grid, Typography, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Delete, Edit } from '@mui/icons-material';
import useStyles from './styles';

const ContactItem = ({ contact, onDelete, onEdit, onViewContact }) => {
  const classes = useStyles();

  const { firstname, lastname, phonenumbers, id } = contact;

  return (
    <Grid
      container
      className={classes.contact}
      justifyContent="space-between"
      flexWrap="nowrap"
    >
      <Grid item container sm={10} md={10} flexGrow={1} alignItems="center">
        <Grid item sm={6}>
          {/* <Link to={`/contact/${id}`} className={classes.link}> */}
          <a className={classes.link} onClick={() => onViewContact(contact)}>
            <Typography variant="h6">{`${firstname} ${lastname}`}</Typography>
          </a>
          {/* </Link> */}
        </Grid>
        <Grid item sm={6}>
          {/* {phones?.map(phone => ( */}
          <Typography variant="p">{phonenumbers[0]}</Typography>
          {/* ))} */}
        </Grid>
      </Grid>
      <Grid
        item
        container
        sm={2}
        md={2}
        justifyContent="flex-end"
        flexWrap="nowrap"
      >
        <Grid item sm={6}>
          <IconButton onClick={() => onEdit(contact)}>
            <Edit />
          </IconButton>
        </Grid>
        <Grid item sm={6}>
          <IconButton onClick={onDelete}>
            <Delete />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactItem;
