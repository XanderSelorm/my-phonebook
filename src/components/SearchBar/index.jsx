import React, { useEffect, useState } from 'react';
import {
  OutlinedInput,
  InputAdornment,
  FormControl,
  IconButton,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { useSearchParams, useNavigate } from 'react-router-dom';
import LinkButton from 'components/LinkButton';
import { usePhonebook } from 'hooks/Context';
import { Close } from '@mui/icons-material';
import useStyles from './styles';

function SearchBar() {
  const { contacts, fetchContacts, searchResults, performSearch } =
    usePhonebook();

  const classes = useStyles();

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const [value, setValue] = useState(
    searchParams.get('q')?.toLowerCase() || '',
  );

  useEffect(() => {
    // const currentParams = Object.fromEntries([...searchParams]);

    performSearch(value);
    // console.log(JSON.stringify(currentParams)); // get new values onchange
  }, [value]);

  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      navigate(`/search?q=${value}`);
      performSearch(value);
    }
  };

  return (
    <FormControl variant="filled" hiddenLabel className={classes.formControl}>
      <OutlinedInput
        className={classes.search}
        fullWidth
        type="text"
        placeholder="Search contacts"
        value={value}
        onChange={x => setValue(x.target.value)}
        onKeyDown={e => handleKeyUp(e)}
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
        endAdornment={
          value && (
            <InputAdornment position="end">
              <IconButton onClick={() => setValue('')}>
                <Close className={classes.icon} />
              </IconButton>
            </InputAdornment>
          )
        }
      />
    </FormControl>
  );
}
export default SearchBar;
