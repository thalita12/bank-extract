import React, { useState } from 'react';
import Search from '@material-ui/icons/Search';

import styles from './index.module.css';

const SearchInput = ({ onUpdateName }) => {
  const [value, setValue] = useState('');

  const handleChangeValue = ({ target }) => {
    setValue(target.value);
    onUpdateName(target.value);
  };

  return (
    <div className={styles.search} data-testid="search-input">
      <button className={styles.searchBtn} type="submit">
        <Search />
      </button>

      <input
        data-testid="field-name"
        className={styles.searchInput}
        type="text"
        placeholder="Pesquisa"
        value={value}
        onChange={(event) => handleChangeValue(event)}
      />
    </div>
  );
};

export default SearchInput;