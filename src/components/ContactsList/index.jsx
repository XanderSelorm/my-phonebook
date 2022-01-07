import React, { useState, useEffect } from 'react';
import { usePhonebook } from 'hooks/Context';
import ContactItem from '../ContactItem';

const ContactsList = () => {
  const { fetchContacts, contacts, deleteContact, searchResults } =
    usePhonebook();
  useEffect(() => {
    fetchContacts();
  }, []);

  const onEdit = contact => {
    console.log('edit: ', contact.id);
  };

  const onViewContact = contact => {
    console.log('view: ', contact.id);
  };
  return (
    <>
      {searchResults?.length > 0
        ? searchResults?.map(contact => {
            return (
              <ContactItem
                key={contact.id}
                contact={contact}
                onDelete={() => deleteContact(contact.id)}
                onEdit={item => onEdit(item)}
                onViewContact={item => onViewContact(item)}
              />
            );
          })
        : searchResults &&
          searchResults.length === 0 && <p>No contacts Found</p>}
    </>
  );
};

export default ContactsList;
