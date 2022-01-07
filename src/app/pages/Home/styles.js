import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  main: {
    [theme.breakpoints.down('sm')]: {
      paddingInline: theme.spacing(3),
    },
  },
  content: {
    paddingBlock: theme.spacing(3),
  },
}));
export default useStyles;
