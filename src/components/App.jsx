import { useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Layout from './Container/Container';
import Header from './Header/Header';
import Section from './Section/Section';

import { getContacts } from '../redux/contacts/contactsSlice';

const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />
        {contacts.length > 0 && (
          <>
            <Header title="Contacts" />
            <Filter />
            <ContactList />
          </>
        )}
      </Section>
      <ToastContainer />
    </Layout>
  );
};
export default App;
