import React, { useEffect, useState } from 'react';
import Search from '@material-ui/icons/Search';
import ButtonList from '../button-list';
import BUTTON_FILTERS from '../../constants/button-filters';
import './index.css';

const Filter = () => {
  const [values] = useState(BUTTON_FILTERS);
  const handleClickFilter = ({ value }) => {
    console.log(value);
  };

  useEffect(() => {}, []);

  return (
    <div className="area">
      <ButtonList values={values} onClickButton={handleClickFilter} />

      <div className="submit-line">
        <button className="submit-lente" type="submit">
          <Search />
        </button>

        <input type="text" placeholder="Pesquisa" />
      </div>
    </div>
  );
};

export default Filter;