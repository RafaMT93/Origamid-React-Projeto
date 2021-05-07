import React from 'react';
import styles from './Input.module.css';

const Input = ({ id, label, value, type, onChange, error, onBlur }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className={styles.input}
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
