import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Header from '../../common/components/header';
import Filter from '../../common/components/filter';
import Panel from '../../common/components/panel';

const Extract = () => {
  const [results, setResults] = useState([]);

  const getResults = () => {
    fetch('http://localhost:3002/results')
      .then((response) => response.json())
      .then((transactions) => setResults(transactions))
      .catch(console.log('erro'));
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Filter />

        <Panel results={results} />
      </Container>
    </>
  );
};

export default Extract;