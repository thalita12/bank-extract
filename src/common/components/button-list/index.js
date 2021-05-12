import React from 'react';
import styles from './index.module.css';

const ButtonList = ({ values = [], onClickButton }) => {
  const handleClickButton = ({ value }) => {
    onClickButton({ value });
  };

  return (
    <>
      {values.map((props) => (
        <button
          type="button"
          key={props.key}
          className={`${styles.btn} ${props.active ? styles.active : ''}`}
          onClick={() => handleClickButton(props)}
        >
          {props.label}
        </button>
      ))}
    </>
  );
};

ButtonList.propTypes = {};

export default ButtonList;