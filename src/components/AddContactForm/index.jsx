import { Box, Typography } from '@mui/material';
import CustomButton from 'components/CustomButton';
import CustomFormTextBox from 'components/CustomFormTextBox';
import React, { useState, useEffect } from 'react';
import { createFilterOptions } from '@mui/material/Autocomplete';
import { usePhonebook } from 'hooks/Context';
import CustomFormControl from 'components/CustomFormControl';
import DataItemPicker from 'components/DataItemPicker';
import { useStyles } from './styles';

const AddContactForm = () => {
  const filter = createFilterOptions();

  const {
    firstName,
    setFirstName,
    phoneNumbers,
    setPhoneNumbers,
    lastName,
    setLastName,
    addContact,
    isLoading,
    isAddContactFormValid,
  } = usePhonebook();

  const classes = useStyles();

  const handleSubmit = () => {
    console.log('submitting');

    addContact();

    console.log('new submitted: ');
  };

  const filterOptions = (options, params) => {
    const filtered = filter(options, params);

    const { inputValue } = params;
    // Suggest the creation of a new value
    const isExisting = options.some(option => inputValue === option.value);
    if (inputValue !== '' && !isExisting) {
      filtered.push(inputValue);
    }

    return filtered;
  };

  return (
    <Box className={classes.addForm}>
      <Typography variant="h5" className={classes.heading}>
        Add New Contact
      </Typography>
      <CustomFormTextBox
        label="First Name"
        placeholder=""
        value={firstName}
        handleOnChange={e => setFirstName(e.target.value.trim())}
      />

      <CustomFormTextBox
        label="Last Name"
        placeholder=""
        value={lastName}
        handleOnChange={e => setLastName(e.target.value.trim())}
      />

      <CustomFormControl label="Phone Number(s)">
        <DataItemPicker
          multiple
          freeSolo
          selectOnFocus
          clearOnBlur
          loading={false}
          loadingText=""
          filterOptions={(options, params) => filterOptions(options, params)}
          // value={phoneNumbers}
          onChange={x => {
            console.log(x);
            setPhoneNumbers(x);
          }}
        />
      </CustomFormControl>

      <div className="col-md-2">
        <CustomButton
          label="Save Contact"
          disabled={!isAddContactFormValid}
          handleClick={handleSubmit}
          isLoading={isLoading}
        />
      </div>
    </Box>
  );
};

export default AddContactForm;
