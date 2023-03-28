import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import {
  FormField,
  Form,
  FormButton,
} from 'components/ContactForm/ContactForm.styled';

export const ContactForm = ({ onSubmit }) => (
  <div>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        onSubmit({
          ...values,
          id: nanoid(),
        });
        actions.resetForm();
      }}
    >
      <Form>
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
