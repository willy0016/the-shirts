import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, heigth, width, ptb, prl, fs, ...props }) => {
  return (
    <button
      style={{
        width: `${width}`,
        padding: `${ptb} ${prl}`,
        fontSize: `${fs}`,
      }}
      {...props}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
