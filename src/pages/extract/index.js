import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Header from '../../common/components/header';
import Filter from '../../common/components/filter';
import Panel from '../../common/components/panel';

const Extract = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const getResults = () => {
    setLoading(true);
    setTimeout(() => {
      fetch('http://localhost:3002/results')
        .then((response) => response.json())
        .then((transactions) => setResults(transactions))
        .catch(() => console.log('erro'))
        .finally(() => setLoading(false));
    }, 2000);
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Filter />

        {!loading ? <Panel results={results} /> : <div>Carregando....</div>}
      </Container>
    </>
  );
};

export default Extract;