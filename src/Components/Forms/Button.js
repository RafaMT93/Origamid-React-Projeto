import React from 'react';
import styles from './Button.module.css';

const Button = ({ label, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {label}
    </button>
  );
};

export default Button;
