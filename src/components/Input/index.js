import React, { useEffect, useRef, useState } from 'react';
import InputMask from 'react-input-mask';

import { useField } from '@rocketseat/unform';
// import { Container } from './styles';

export default function Input({ name, label }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      clearValue: selectRef => {
        selectRef.select.clearValue();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line
  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <InputMask
        value={value}
        onChange={e => setValue(e.target.value)}
        id={fieldName}
        name={fieldName}
        ref={ref}
        mask="9999"
      />
    </>
  );
}
