import React from 'react';
import './ContentEntries.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { stringToArray } from '../../utils/common';
import editIcon from '../../assets/user-edit-text-message-note@3x.png';
import deleteIcon from '../../assets/trash-delete-recycle-bin-bucket-waste@3x.png';
import { UPDATE_ENTRY, GET_ALL_ENTRIES } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import ModalForm from '../ModalForm';

function ContentEntries({
  entry,
  fields,
  index,
  handleDeleteEntries,
  selectedCollectionId,
  setEntries,
  selectedCollectionAllFields,
}) {
  const firstFourFields = fields.slice(0, 4);
  firstFourFields.unshift('id');
  const values = stringToArray(entry);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const newValues = values.reduce(
    (acc, value) => {
      const temp = value.split(':');
      return { ...acc, [temp[0]]: temp[1] };
    },
    { id: index }
  );

  const [formInput, setFormInput] = React.useState({});

  const handleInputChanges = (e) => {
    setFormInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const handleAdd = async () => {
    const response = await makeRequest(
      UPDATE_ENTRY(selectedCollectionId),
      {
        data: {
          index,
          fields: Object.keys(formInput),
          values: Object.values(formInput),
        },
      },
      navigate
    );
    if (response) {
      const getData = await makeRequest(
        GET_ALL_ENTRIES(selectedCollectionId),
        {},
        navigate
      );
      setEntries(getData.data.values);
      closeModal();
    }
  };

  const handleRename = () => {
    openModal();
    setFormInput(newValues);
  };
  const modalForm = (
    <ModalForm isOpen={isOpen} onClose={closeModal}>
      {selectedCollectionAllFields.map((field) => (
        <div key={field} className="form-group">
          <label htmlFor={field}>{field}</label>
          <input
            type="text"
            name={field}
            id={field}
            defaultValue={newValues[field]}
            onChange={handleInputChanges}
          />
        </div>
      ))}
      <button type="button" onClick={closeModal}>
        cancel
      </button>
      <button onClick={handleAdd} type="button">
        submit
      </button>
    </ModalForm>
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
          <img onClick={() => handleRename()} src={editIcon} alt="edit-icon" />
        </button>
        <button onClick={() => handleDeleteEntries(index)} type="button">
          <img src={deleteIcon} alt="delete-icon" />
        </button>
      </div>
      {modalForm}
    </div>
  );
}

export default ContentEntries;

ContentEntries.propTypes = {
  entry: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  handleDeleteEntries: PropTypes.func.isRequired,
  selectedCollectionId: PropTypes.number.isRequired,
  setEntries: PropTypes.func.isRequired,
  selectedCollectionAllFields: PropTypes.arrayOf(PropTypes.string).isRequired,
};
