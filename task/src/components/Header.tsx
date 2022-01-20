import React from 'react';
//styles
import styles from '../styles/Header.module.scss';

type Props = {};

export default function Header({}: Props) {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerSelected}>Selected:</h1>
    </div>
  );
}
