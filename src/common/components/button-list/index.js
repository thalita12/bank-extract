import React from 'react';
import BUTTON_FILTERS from '../../constants/button-filters';
import styles from './index.module.css';

const ButtonList = ({ activeFilter, onClickButton }) => {
  const handleClickButton = ({ value }) => {
    onClickButton({ value });
  };

  return (
    <div className={styles.buttonList}>
      {BUTTON_FILTERS.map((props) => (
        <button
          type="button"
          key={props.key}
          className={`${styles.btn} ${props.value === activeFilter ? styles.active : ''}`}
          onClick={() => handleClickButton(props)}
        >
          {props.label}
        </button>
      ))}
    </div>
  );
};

ButtonList.propTypes = {};

export default ButtonList;