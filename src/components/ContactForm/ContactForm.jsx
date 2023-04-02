import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux/es/exports';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import {
  FormField,
  Form,
  FormButton,
} from 'components/ContactForm/ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const valueName = event.target.name.value;
    const existstName = contacts.find(contact => contact.name === valueName);
   
    if (existstName) {
      return Notify.info(`This name is already in contacts!`);
    }

    dispatch(addContact(event.target.name.value, event.target.number.value));
    
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          handleSubmit({
            ...values,
            id: nanoid(),
          });
          actions.resetForm();
        }}
      >
        <Form onSubmit={handleSubmit}>
          <FormField>
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormField>
          <FormField>
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormField>
          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </Formik>
    </div>
  );
};
