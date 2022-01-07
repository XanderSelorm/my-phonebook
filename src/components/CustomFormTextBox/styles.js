import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme => ({
  label: {
    color: '#111111',
  },
  required: {
    '&::after': {
      content: "'*'",
      color: theme.palette.primary.main,
      fontSize: '1.5rem',
      lineHeight: '1rem',
    },
  },
  formControl: {
    width: '100%',
    // marginTop: theme.spacing(2),
    // marginBottom: theme.spacing(2.5),
  },
  input: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: theme.palette.common.white,
    boxSizing: 'border-box',
    color: '#4D4D4D',
    transition: theme.transitions.create('width'),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2.5),
    '& > input': {
      // padding: theme.spacing(2, 2),
      '&:focus': {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.main,
        borderRadius: 10,
      },
    },

    '&::placeholder': {
      color: '#7C7C7C',
    },

    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
  },
}));
