import React, { useEffect, useState } from 'react';
import { Container, FormControl, Input, InputAdornment } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import ButtonList from '../button-list';
import BUTTON_FILTERS from '../../constants/button-filters';

const Filter = () => {
  const [values] = useState(BUTTON_FILTERS);
  const handleClickFilter = ({ value }) => {
    console.log(value);
  };

  useEffect(() => {}, []);

  return (
    <Container>
      <ButtonList values={values} onClickButton={handleClickFilter} />

      <FormControl>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          placeholder="Pesquisa"
        />
      </FormControl>
    </Container>
  );
};

export default Filter;