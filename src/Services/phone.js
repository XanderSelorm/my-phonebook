import contacts from '../assets/mockData/contacts';

const getContacts = () => {
  return contacts;
};

const getContact = id => {
  return contacts.filter(x => x.id === id);
};

const addContact = newContact => {
  return contacts.push(newContact);
};

const deleteContact = id => {
  const itemPosition = contacts.indexOf(contacts.find(x => x.id === id));
  return contacts.splice(itemPosition, 1);
};

const updateContact = newContact => {
  const item = contacts.filter(x => x.id === newContact.id);
  const itemPosition = contacts.indexOf(item.id);
  return contacts.splice(itemPosition, 1, newContact);
};

export default {
  getContacts,
  getContact,
  addContact,
  deleteContact,
  updateContact,
};
