import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';

import { fetchActiveResults } from '../../api/results';

import Header from '../../common/components/header';
import Filter from '../../common/components/filter';
import Panel from '../../common/components/panel';
import Loading from '../../common/components/loading';

const Extract = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUpdateActiveFilter = async (value) => {
    setActiveFilter(value);
  };

  const getResults = async () => {
    try {
      setLoading(true);
      const data = await fetchActiveResults({ type: activeFilter });
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
  }, [activeFilter]);

  return (
    <>
      <Header title="Extrato" />

      <Container>
        <Filter activeFilter={activeFilter} onUpdateActiveFilter={handleUpdateActiveFilter} />

        {!loading ? <Panel results={results} /> : <Loading />}
      </Container>
    </>
  );
};

export default Extract;