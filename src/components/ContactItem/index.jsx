import { Box, Grid, Typography, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Delete, Edit } from '@mui/icons-material';
import useStyles from './styles';

const ContactItem = ({ name, phones, onDelete, onEdit }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.contact}
      justifyContent="space-between"
      flexWrap="nowrap"
    >
      <Grid item container sm={10} md={10} flexGrow={1} alignItems="center">
        <Grid item sm={6}>
          <Link to="" className={classes.link}>
            <Typography variant="h6">{name}</Typography>
          </Link>
        </Grid>
        <Grid item sm={6}>
          {/* {phones?.map(phone => ( */}
          <Typography variant="p">{phones[0]}</Typography>
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
          <IconButton onClick={() => onEdit()}>
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
