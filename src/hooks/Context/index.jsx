import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import phoneService from 'services/phone';

const createContact = (task, type) => ({
  id: task.Id,
  guid: task.GUID,
});

// we create a React Context, for this to be accessible
// from a component later
const PhonebookContext = createContext();

const PhonebookProvider = ({ children }) => {
  const [contact, setContact] = useState({});
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isAddContactFormValid, setIsAddContactFormValid] = useState(false);

  useEffect(() => {
    setIsAddContactFormValid(
      (firstName?.length || lastName?.length) && phoneNumbers?.length,
    );
  }, []);

  const clear = () => {
    setFirstName('');
    setLastName('');
    setPhoneNumbers([]);
  };

  // TODO: Rewrite this search function
  const performSearch = value => {
    const lowerValue = value?.toLowerCase();
    if (contacts) {
      const nameRes = contacts.filter(e =>
        e.name.toLowerCase().includes(lowerValue),
      );
      const descRes = contacts.filter(e =>
        e.description.toLowerCase().includes(lowerValue),
      );
      const locRes = contacts.filter(e =>
        e.location.toLowerCase().includes(lowerValue),
      );
      const combinedRes = [...nameRes, ...descRes, ...locRes];
      const newRes = Array.from(new Set(combinedRes));
      setSearchResults(newRes);
    }
  };

  async function fetchContacts() {
    setIsLoading(true);
    const _results = await phoneService.getContacts();
    setContacts(_results);

    setIsLoading(false);
  }

  async function fetchContact(contactId) {
    setIsLoading(true);
    const _result = await phoneService.getContact(contactId);
    setContact(_result);

    setIsLoading(false);
  }

  async function addContact() {
    setIsLoading(true);

    const internalId = uuid();

    await phoneService.addContact({
      id: internalId,
    });

    clear();
    setIsLoading(false);
    // return data;
  }

  return (
    <PhonebookContext.Provider
      value={{
        isLoading,
        contacts,
        contact,
        searchResults,
        firstName,
        lastName,
        addContact,
        setSearchResults,
        clear,
        fetchContacts,
        fetchContact,
        setContact,
        setFirstName,
        setLastName,
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
