import React from 'react';
import './DisplayButton.css';
import PropTypes from 'prop-types';

function DisplayButton({ text, count, selected, onClick }) {
  const className = selected ? 'display-button selected' : 'display-button';
  return (
    <button onClick={onClick} type="button" className={className}>
      <span>{text}</span>
      <span>{count}</span>
    </button>
  );
}

export default DisplayButton;

DisplayButton.propTypes = {
  text: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
