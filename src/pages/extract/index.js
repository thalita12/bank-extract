import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';

import { fetchResults } from '../../api/results';

import Header from '../../common/components/header';
import Filter from '../../common/components/filter';
import Panel from '../../common/components/panel';
import Loading from '../../common/components/loading';

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
      <Header title="Extrato" />

      <Container>
        <Filter />

        {!loading ? <Panel results={results} /> : <Loading />}
      </Container>
    </>
  );
};

export default Extract;