import React from 'react';
import PropTypes from 'prop-types';
import { Item, ButtonDelete } from './ContactListItem.styled';
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({ contact: {id, name, number} }) => {
  
const dispatch = useDispatch();
   
  return (
    <Item>
      {name}:{number}
      <ButtonDelete type="button" id={id} onClick={() => dispatch(deleteContact(id))}> Delete
      </ButtonDelete>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
