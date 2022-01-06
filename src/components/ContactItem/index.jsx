import React from 'react';

const ContactItem = ({ name, phone }) => {
  return (
    <div className="contact">
      <h2 className="contactName">{name}</h2>
      <p>{phone}</p>
    </div>
  );
};

export default ContactItem;
