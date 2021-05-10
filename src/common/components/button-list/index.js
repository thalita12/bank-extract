import React from 'react';
import './index.css';

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
          className={`btn ${props.active ? 'active' : ''}`}
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