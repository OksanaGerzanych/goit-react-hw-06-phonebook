import React from 'react';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux/es/exports';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  
  const contacts = useSelector(getContacts);
  const filterContacts = useSelector(getFilter);

  const getVisibleContacts = () => {
    if (!filterContacts) return contacts;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContacts.toLowerCase()));
  };
  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
