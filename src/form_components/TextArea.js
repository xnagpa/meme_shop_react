import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ name, value, onChange, label }) => (
  <div className="ui field">
    <label htmlFor= { name }>{ label }</label>
    <textarea
      name = { name }
      id = { name }
      className="ui input"
      value={ value }
      onChange={ onChange }/>
  </div>
);

TextArea.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string
};

export default TextArea;
