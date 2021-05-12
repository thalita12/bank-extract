import React from 'react';
import { Container } from '@material-ui/core';
import styles from './index.module.css';

const Header = () => (
  <header className={styles.header}>
    <Container>
      <h2 className={styles.title}>Extrato</h2>
    </Container>
  </header>
);

export default Header;