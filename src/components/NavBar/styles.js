import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  content: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 3),
    },
  },
  bar: {
    position: 'sticky',
    top: 0,
    // zIndex: 2000,
    // flexGrow: 1,
    color: theme.palette.primary.main,
    // height: theme.spacing(11),
    boxShadow: '0 3px 6px #00000029',
  },
  toolbar: {
    position: 'relative',
    padding: 0,
    height: '100%',
  },
  logo: {
    // height: 70,
    // marginLeft: theme.spacing(2),
    cursor: 'pointer',
    '& > *': {
      textDecoration: 'none',
    },
  },
  navlinks: {
    // marginLeft: theme.spacing(5),
    display: 'flex',
    alignItems: 'center',
  },
}));
export default useStyles;
