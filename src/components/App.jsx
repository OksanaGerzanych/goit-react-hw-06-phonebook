import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

const getContacts = () => {
  const saveContacts = localStorage.getItem('contact');
  const parseContacts = JSON.parse(saveContacts);
  return parseContacts ? parseContacts : [];
  
};
export function App() {
  const [contacts, setContacts] = useState(getContacts);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    contacts.filter(contact => contact.name === newContact.name).length
      ? alert(`${newContact.name}: is already in contacts`)
      : setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContacts = getFilterContacts();

  return (
    <Layout>
      <GlobalStyle />
      <h1>Phonebook</h1>

      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} value={filter} />
      <ContactList contacts={filterContacts} onDeleteContact={deleteContact} />
    </Layout>
  );
}
