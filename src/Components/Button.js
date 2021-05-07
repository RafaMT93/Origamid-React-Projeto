import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      style={{
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
        fontSize: `${props.width / 10}px`,
      }}
      className={styles.button}
    >
      {props.label}
    </button>
  );
};

Button.propTypes = {
  margin: PropTypes.number,
  width: PropTypes.number,
  label: PropTypes.string.isRequired,
};

export default Button;
