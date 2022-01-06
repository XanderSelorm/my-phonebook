import contacts from '../assets/mockData/contacts';

const getContacts = () => {
  return contacts;
};

const addContact = newContact => {
  return contacts.push(newContact);
};

const delContact = id => {
  const itemPosition = contacts.indexOf(x => x.id === id);
  return contacts.splice(itemPosition, 1);
};

const updateContact = newContact => {
  const item = contacts.filter(x => x.id === newContact.id);
  const itemPosition = contacts.indexOf(item.id);
  return contacts.splice(itemPosition, 1, newContact);
};

export default { getContacts, addContact, delContact, updateContact };
