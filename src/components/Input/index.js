import React, { useEffect, useRef, useState } from 'react';
import InputMask from 'react-input-mask';

import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

export default function Input({ name, label }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [value, setValue] = useState(defaultValue);

  function parseInputValue(inputRef) {
    const inputValue = inputRef.value;
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
      <InputMask
        value={value || ''}
        onChange={e => setValue(e.target.value)}
        id={fieldName}
        name={fieldName}
        ref={ref}
        mask="9999"
        maskPlaceholder={null}
      />
      {error && <span>{error}</span>}
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
