import React from 'react';

import PanelHeader from './panel-header';
import PanelBody from './panel-body';
import PanelFooter from './panel-footer';

import styles from './index.module.css';

const Panel = ({ results }) => (
  <div className={styles.area}>
    {results.length ? (
      results.map((result) => (
        <div key={result.date}>
          <PanelHeader date={result.date} />

          <span className={styles.line} />

          <PanelBody items={result.items} />

          <span className={styles.line} />

          <PanelFooter amountTotal={result.amountTotal} />
        </div>
      ))
    ) : (
      <div className={styles.noResult}>Ops! Nenhum resultado encontrado :(</div>
    )}
  </div>
);

export default Panel;