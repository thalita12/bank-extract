import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';

import { fetchResults } from '../../api/results';

import Header from '../../common/components/header';
import Filter from '../../common/components/filter';
import Panel from '../../common/components/panel';

const Extract = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const getResults = async () => {
    try {
      setLoading(true);
      const data = await fetchResults();
      setResults(data);
    } catch {
      console.log('Erro!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getResults();
    })();
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