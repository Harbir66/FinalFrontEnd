import React from 'react';
import './EntriesCount.css';
import PropTypes from 'prop-types';
import searchIcon from '../../assets/icon-search-dark@3x.png';

function EntriesCount({ count, type, showSearch }) {
  const size = showSearch ? 'small' : 'large';
  return (
    <div className={`entries-count ${size}`}>
      <span>{`${count} ${type}`}</span>
      {showSearch && (
        <img src={searchIcon} alt="searchIcon" className="search-icon" />
      )}
    </div>
  );
}

export default EntriesCount;

EntriesCount.propTypes = {
  count: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  showSearch: PropTypes.bool.isRequired,
};
