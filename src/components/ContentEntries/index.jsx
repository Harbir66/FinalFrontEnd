import React from 'react';
import './ContentEntries.css';
import PropTypes from 'prop-types';
import { stringToArray } from '../../utils/common';
import editIcon from '../../assets/user-edit-text-message-note@3x.png';
import deleteIcon from '../../assets/trash-delete-recycle-bin-bucket-waste@3x.png';

function ContentEntries({ entry, fields, index }) {
  const firstFourFields = fields.slice(0, 4);
  firstFourFields.unshift('id');
  const values = stringToArray(entry);

  const newValues = values.reduce(
    (acc, value) => {
      const temp = value.split(':');
      return { ...acc, [temp[0]]: temp[1] };
    },
    { id: index }
  );

  return (
    <div className="main-entries">
      <div className="column-names-entries">
        {firstFourFields.map((field) => (
          <div className="item-entries" key={field}>
            {newValues[field]}
          </div>
        ))}
      </div>
      <div className="buttons-entries">
        <button type="button">
          <img src={editIcon} alt="edit-icon" />
        </button>
        <button type="button">
          <img src={deleteIcon} alt="delete-icon" />
        </button>
      </div>
    </div>
  );
}

export default ContentEntries;

ContentEntries.propTypes = {
  entry: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};
