import React, { useState, useEffect } from 'react';
import { usePhonebook } from 'hooks/Context';
import ContactItem from '../ContactItem';

const ContactsList = () => {
  const { fetchContacts, contacts, deleteContact } = usePhonebook();
  useEffect(() => {
    fetchContacts();
  }, []);
  return (
    <>
      {contacts?.map(contact => {
        const { firstname, lastname, phonenumbers } = contact;
        return (
          <ContactItem
            key={contact.id}
            name={`${firstname} ${lastname}`}
            phones={phonenumbers}
          />
        );
      })}
    </>
  );
};

export default ContactsList;
