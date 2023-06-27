import { useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Layout from './Container/Container';
import Header from './Header/Header';
import Section from './Section/Section';

import { getContacts } from '../redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />

        <Header title="Contacts" />
        {contacts.length > 0 && (
          <>
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
