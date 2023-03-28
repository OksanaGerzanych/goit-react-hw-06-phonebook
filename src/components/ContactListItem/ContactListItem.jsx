import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './ContactListItem.styled';
import { ButtonDelete } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      {name}: {number}
      <ButtonDelete type="button" id={id} onClick={() => onDeleteContact(id)}>
        Delete
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
