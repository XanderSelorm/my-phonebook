import React from 'react';
import { Grid } from '@mui/material';
import ContactsList from 'components/ContactsList';
import { usePhonebook } from 'hooks/Context';
import useDocumentTitle from 'hooks/useDocumentTitle';

function DirectoryHome() {
  useDocumentTitle('Home | My Phonebook');
  const heroTitle =
    'The fastest way to find contacts, products & services in Ghana';
  const heroSubTitle =
    'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.';

  const { contacts, fetchContacts } = usePhonebook();

  React.useEffect(() => {
    // if (contacts?.length)
    fetchContacts();
  }, []);

  return (
    <>
      <ContactsList />
    </>
  );
}
export default DirectoryHome;
