import React, { useEffect, useState } from 'react';
import AddContactForm from './components/AddContactForm';
import PhoneBookList from './components/PhoneBookList';
import Notification from './components/Notification';
import './App.css';
import phoneService from './Services/phone';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const allContacts = phoneService.getContacts();
    allContacts.sort((a, b) => sortContacts(a, b));
    setContacts(allContacts);
  }, [contacts]);

  const sortContacts = (a, b) => {
    const fa = a.first_name?.toLowerCase();
    const fb = b.first_name?.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  };

  const onSubmit = item => {
    phoneService.addContact(item);
  };

  return (
    <div className="App">
      <div className="header navbar sticky-top col">
        <h1>My PhoneBook</h1>
        <AddContactForm onSubmit={onSubmit} />
      </div>

      <PhoneBookList contacts={contacts} />
    </div>
  );
}

export default App;
