import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import phoneService from 'services/phone';

// we create a React Context, for this to be accessible
// from a component later
const PhonebookContext = createContext();

const PhonebookProvider = ({ children }) => {
  const [contact, setContact] = useState({});
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  // const [isAddContactFormValid, setIsAddContactFormValid] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    if (openDrawer === false) {
      setIsViewing(false);
      setIsEditing(false);
      clear();
    }
  }, [openDrawer]);

  // useEffect(() => {
  //   setIsAddContactFormValid(
  //     (firstName?.length || lastName?.length) && phoneNumbers?.length,
  //   );
  // }, [firstName?.length, lastName?.length, phoneNumbers?.length]);

  const clear = () => {
    console.log('clear form called');
    // setFirstName('');
    // setLastName('');
    // setPhoneNumbers([]);
    setContact({});
  };

  // TODO: Rewrite this search function
  const performSearch = value => {
    console.log('Search running');
    const lowerValue = (value && value?.toLowerCase()) || '';
    if (!contacts && contacts?.length === 0) {
      fetchContacts();
    }
    if (contacts) {
      const firstNameRes = contacts?.filter(e =>
        e.firstname.toLowerCase().includes(lowerValue),
      );
      const lastNameRes = contacts?.filter(e =>
        e.lastname.toLowerCase().includes(lowerValue),
      );
      const contactPhones = [];
      contacts?.filter(e =>
        e.phonenumbers.forEach(x => {
          if (x.includes(lowerValue)) {
            contactPhones.push(e);
          }
          return false;
        }),
      );
      const phoneRes = [...new Set(contactPhones).values()];

      const combinedRes = [...firstNameRes, ...lastNameRes, ...phoneRes];
      const newRes = Array.from(new Set(combinedRes).values());
      newRes.sort((a, b) => sortContacts(a, b));
      setSearchResults(newRes);
    }
  };

  const sortContacts = (a, b) => {
    const fa = a.firstname?.toLowerCase();
    const fb = b.firstname?.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  };

  async function fetchContacts() {
    setIsLoading(true);
    const _results = await phoneService.getContacts();
    _results.sort((a, b) => sortContacts(a, b));
    setContacts(_results);

    setIsLoading(false);
  }

  async function fetchContact(contactId) {
    setIsLoading(true);
    const _result = await phoneService.getContact(contactId);
    setContact(_result);

    setIsLoading(false);
  }

  async function addContact(item) {
    setIsLoading(true);

    const internalId = uuid();

    const newContact = {
      id: internalId,
      firstname: item.firstname,
      lastname: item.lastname,
      phonenumbers: item.phonenumbers,
    };

    await phoneService.addContact(newContact);

    clear();
    performSearch();
    setIsLoading(false);
  }

  async function updateContact(updatedItem) {
    setIsLoading(true);

    await phoneService.updateContact(updatedItem);

    clear();
    performSearch();
    setIsLoading(false);
  }

  async function deleteContact(id) {
    setIsLoading(true);

    // eslint-disable-next-line no-restricted-globals
    if (confirm("Press 'OK' to delete the contact."))
      await phoneService.deleteContact(id);

    performSearch('');

    setIsLoading(false);
  }

  return (
    <PhonebookContext.Provider
      value={{
        isLoading,
        contacts,
        contact,
        searchResults,
        // firstName,
        // lastName,
        openDrawer,
        // isAddContactFormValid,
        isEditing,
        setIsEditing,
        isViewing,
        setIsViewing,
        setOpenDrawer,
        addContact,
        setSearchResults,
        clear,
        fetchContacts,
        fetchContact,
        updateContact,
        deleteContact,
        setContact,
        // setFirstName,
        // setLastName,
        // setPhoneNumbers,
        performSearch,
      }}
    >
      {children}
    </PhonebookContext.Provider>
  );
};

PhonebookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const usePhonebook = () => {
  const context = useContext(PhonebookContext);

  if (!context) {
    throw new Error('usePhonebook must be within an PhonebookProvider');
  }

  return context;
};

export { PhonebookProvider, usePhonebook };
