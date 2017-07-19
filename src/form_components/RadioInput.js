import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const RadioInput = ({ name, label ,onChange, value, checked}) => (
  <Checkbox
         radio
         name = { name }
         label = { label }
         onChange = { onChange }
         value = { value }
         checked = { checked }
  />
);

RadioInput.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool
};

export default RadioInput;
