import React from 'react';

import ButtonList from '../button-list';
import SearchInput from '../search-input';

import styles from './index.module.css';

const Filter = ({ activeFilter, onUpdateActiveFilter, onUpdateName }) => {
  const handleClickFilter = ({ value }) => {
    onUpdateActiveFilter(value);
  };

  return (
    <div className={styles.area}>
      <ButtonList activeFilter={activeFilter} onClickButton={handleClickFilter} />

      <SearchInput onUpdateName={onUpdateName} />
    </div>
  );
};

export default Filter;