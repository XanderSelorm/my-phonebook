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
    // firstName,
    // setFirstName,
    // phoneNumbers,
    // setPhoneNumbers,
    // lastName,
    // setLastName,
    contact,
    setContact,
    addContact,
    updateContact,
    isEditing,
    setIsEditing,
    isViewing,
    isLoading,
    // isAddContactFormValid,
  } = usePhonebook();

  const classes = useStyles();

  const [firstName, setFirstName] = useState(contact?.firstname || '');
  const [lastName, setLastName] = useState(contact?.lastname || '');
  const [phoneNumbers, setPhoneNumbers] = useState(contact?.phonenumbers || []);
  const [isAddContactFormValid, setIsAddContactFormValid] = useState(isEditing);
  const [isDisabled, setIsDisabled] = useState(!isEditing);

  useEffect(() => {
    setIsAddContactFormValid(
      (firstName?.length || lastName?.length) &&
        phoneNumbers?.length &&
        isEditing,
    );
  }, [firstName?.length, isEditing, lastName?.length, phoneNumbers?.length]);

  const clear = () => {
    setFirstName('');
    setLastName('');
    setPhoneNumbers([]);
    setContact({});
  };

  const handleSubmit = () => {
    console.log('submitting');

    const newContact = {
      firstname: firstName,
      lastname: lastName,
      phonenumbers: phoneNumbers,
    };

    if (!isEditing) {
      addContact(newContact);
    } else {
      updateContact(newContact);
    }
    clear();

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
        readOnly={isDisabled}
        value={firstName}
        handleOnChange={e => setFirstName(e.target.value.trim())}
      />

      <CustomFormTextBox
        label="Last Name"
        placeholder=""
        value={lastName}
        readOnly={isDisabled}
        handleOnChange={e => setLastName(e.target.value.trim())}
      />

      <CustomFormControl label="Phone Number(s)">
        <DataItemPicker
          disabled={isDisabled}
          multiple
          freeSolo
          selectOnFocus
          clearOnBlur
          loading={false}
          loadingText=""
          filterOptions={(options, params) => filterOptions(options, params)}
          value={phoneNumbers}
          onChange={x => {
            setPhoneNumbers(x);
          }}
        />
      </CustomFormControl>

      {!isEditing ? (
        <CustomButton
          label="Save Contact"
          disabled={!isAddContactFormValid}
          handleClick={handleSubmit}
          isLoading={isLoading}
        />
      ) : (
        <CustomButton
          label="Update Contact"
          disabled={!isAddContactFormValid}
          handleClick={handleSubmit}
          isLoading={isLoading}
        />
      )}
    </Box>
  );
};

export default AddContactForm;
