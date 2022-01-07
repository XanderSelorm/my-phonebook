import React, { useState, useEffect } from 'react';
import { usePhonebook } from 'hooks/Context';
import ContactItem from '../ContactItem';

const ContactsList = () => {
  const {
    fetchContacts,
    contacts,
    deleteContact,
    searchResults,
    setIsViewing,
    setIsEditing,
    setOpenDrawer,
    setContact,
  } = usePhonebook();
  useEffect(() => {
    fetchContacts();
  }, []);

  const onEdit = contact => {
    console.log('edit: ', contact.id);
    setIsEditing(true);
    setContact(contact);
    setOpenDrawer(true);
  };

  const onViewContact = contact => {
    console.log('view: ', contact.id);
    setIsEditing(false);
    setContact(contact);
    setOpenDrawer(true);
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
                onEdit={() => onEdit(contact)}
                onViewContact={() => onViewContact(contact)}
              />
            );
          })
        : searchResults &&
          searchResults.length === 0 && <p>No contacts Found</p>}
    </>
  );
};

export default ContactsList;
