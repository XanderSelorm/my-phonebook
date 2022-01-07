import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  contact: {
    padding: theme.spacing(2, 3),
    marginBottom: theme.spacing(2),
    '&:hover': {
      backgroundColor: theme.palette.grey['100'],
    },
  },
  link: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none',
    },
  },
}));
export default useStyles;
