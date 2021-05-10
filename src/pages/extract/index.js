import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../../common/components/header';
import Filter from '../../common/components/filter';
import Panel from '../../common/components/panel';

const Extract = () => (
  <>
    <Header />

    <Container>
      <Filter />

      <Panel />
    </Container>
  </>
);

export default Extract;