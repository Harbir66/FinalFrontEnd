import React from 'react';
import './EntriesHeader.css';
import PropTypes from 'prop-types';

function EntriesHeader({ fields }) {
  const firstFourFields = fields.slice(0, 4);
  firstFourFields.unshift('id');
  return (
    <div className="main-container">
      <div className="column-names">
        {firstFourFields.map((field) => (
          <div className="item" key={field}>
            {field}
          </div>
        ))}
      </div>
      <div className="buttons">Actions</div>
    </div>
  );
}

export default EntriesHeader;

EntriesHeader.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
};
