import React from 'react';

import styles from './styles.module.css'

const Input = ({ props }) => (
    <input className={styles.myInput} {...props}></input>
);

export default Input;
