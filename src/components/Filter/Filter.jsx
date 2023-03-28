import React from 'react';
import PropTypes from 'prop-types';
import { FilterContainer, Text } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FilterContainer>
    <Text>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </Text>
  </FilterContainer>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
