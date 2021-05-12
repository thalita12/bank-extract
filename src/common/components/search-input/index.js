import React from 'react';
import Search from '@material-ui/icons/Search';

import styles from './index.module.css';

const SearchInput = () => (
  <div className={styles.search}>
    <button className={styles.searchBtn} type="submit">
      <Search />
    </button>

    <input className={styles.searchInput} type="text" placeholder="Pesquisa" />
  </div>
);

export default SearchInput;