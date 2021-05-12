import React, { useEffect, useState } from 'react';
import Search from '@material-ui/icons/Search';
import ButtonList from '../button-list';
import BUTTON_FILTERS from '../../constants/button-filters';
import styles from './index.module.css';

const Filter = () => {
  const [values] = useState(BUTTON_FILTERS);
  const handleClickFilter = ({ value }) => {
    console.log(value);
  };

  useEffect(() => {}, []);

  return (
    <div className={styles.area}>
      <ButtonList values={values} onClickButton={handleClickFilter} />

      <div className={styles.search}>
        <button className={styles.searchBtn} type="submit">
          <Search />
        </button>

        <input className={styles.searchInput} type="text" placeholder="Pesquisa" />
      </div>
    </div>
  );
};

export default Filter;