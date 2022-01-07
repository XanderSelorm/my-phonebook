import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgress, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useStyles } from './styles';

const DataItemPicker = ({
  label,
  value,
  loading,
  onChange,
  handleGetData,
  multiple,
  initialOptions,
  isDropdown,
  ...rest
}) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(initialOptions ?? []);
  // const [value, setValue] = useState();

  return (
    <Autocomplete
      {...rest}
      fullWidth
      // className={globalClasses.input}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(e, val) => {
        onChange(val);
      }}
      getOptionLabel={option => `${option ?? option}`}
      isOptionEqualToValue={(option, optionValue) => option === optionValue}
      value={value}
      options={options}
      loading={loading || (open && options?.length === 0)}
      multiple={multiple}
      renderInput={params => (
        <TextField
          {...params}
          type="text"
          // onChange={handleChangeTextField}
          className={classes.input}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {isDropdown ? params.InputProps.endAdornment : null}
              </>
            ),
          }}
        />
      )}
    />
  );
};

DataItemPicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  isDropdown: PropTypes.bool,
};

DataItemPicker.defaultProps = {
  label: '',
  value: '',
  onChange: () => {},
  isDropdown: true,
};

export default DataItemPicker;
