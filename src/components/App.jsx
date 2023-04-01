import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';



export function App() {
   
  return (
    <Layout>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm  />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Layout>
  );
}
