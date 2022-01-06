import React, { useState, useEffect } from 'react';
import ContactItem from '../ContactItem';

const ContactsList = ({ contacts }) => {
  return (
    <div className="phoneBookList">
      {contacts?.map(contact => {
        const { firstName, lastName, phoneNumber } = contact;
        return (
          <ContactItem
            key={contact.id}
            name={`${firstName} ${lastName}`}
            phone={phoneNumber}
          />
        );
      })}
    </div>
  );
};

export default ContactsList;
