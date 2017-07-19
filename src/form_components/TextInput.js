import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TextInput = ({ name, value, onChange, label, error }) => (
  <div className={ classNames('ui field', { error  })}>
    <label htmlFor= { name }>{ label }</label>
    <input
      name = { name }
      id = { name }
      className="ui input"
      type="text"
      value={ value }
      onChange={ onChange }/>
  </div>
);

TextInput.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string
};

export default TextInput;
