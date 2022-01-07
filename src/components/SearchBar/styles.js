import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    width: '100%',
  },
  search: {
    width: '100%',
    // height: theme.spacing(10.4),
    // padding: theme.spacing(2, 3),
    borderRadius: 10,
    backgroundColor: theme.palette.common.white,
    boxSizing: 'border-box',
    color: '#4D4D4D',
    transition: theme.transitions.create('width'),

    '& > input': {
      padding: theme.spacing(1.5, 1.8),
    },

    '&::placeholder': {
      color: '#7C7C7C',
    },
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
  },
  closeIconButton: {
    padding: 0,

    '& svg': {
      fill: '#4D4D4D',
    },
  },
}));
export default useStyles;
