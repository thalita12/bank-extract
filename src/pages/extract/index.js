import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';

import { fetchActiveFilter, fetchResults } from '../../api/results';

import Header from '../../common/components/header';
import Filter from '../../common/components/filter';
import Panel from '../../common/components/panel';
import Loading from '../../common/components/loading';

const Extract = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUpdateActiveFilter = async (value) => {
    try {
      setLoading(true);
      const data = await fetchActiveFilter({ value });
      setResults(data);
    } catch {
      console.error('Erro ao filtrar o extrato!');
    } finally {
      setLoading(false);
    }
  };

  const getResults = async () => {
    try {
      setLoading(true);
      const data = await fetchResults();
      setResults(data);
    } catch {
      console.error('Erro ao buscar os dados do extrato!');
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
        <Filter onUpdateActiveFilter={handleUpdateActiveFilter} />

        {!loading ? <Panel results={results} /> : <Loading />}
      </Container>
    </>
  );
};

export default Extract;