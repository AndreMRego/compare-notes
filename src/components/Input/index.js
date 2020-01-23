import React, { useEffect, useRef, useState } from 'react';
import NumberFormat from 'react-number-format';

import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

export default function Input({ name, label }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [value, setValue] = useState(defaultValue);

  function parseInputValue(inputRef) {
    const inputValue = inputRef.props.value;
    console.log(inputRef);
    return inputValue || '';
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.value',
      parseValue: parseInputValue,
      clearValue: inputRef => {
        inputRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line
  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <NumberFormat
        value={value}
        max={1000}
        onChange={e => setValue(e.target.value)}
        id={fieldName}
        name={fieldName}
        ref={ref}
      />
      {error && <span>{error}</span>}
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
