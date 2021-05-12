import React from 'react';
import { Container } from '@material-ui/core';
import styles from './index.module.css';

const Header = ({ title }) => (
  <header className={styles.header}>
    <Container>
      <h2 className={styles.title}>{title}</h2>
    </Container>
  </header>
);

export default Header;