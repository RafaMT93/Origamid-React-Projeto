import React from 'react';
import styles from './Input.module.css';
const Input = ({ id, label, type, value, onChange, onBlur, error }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        name={id}
        id={id}
        className={styles.input}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
