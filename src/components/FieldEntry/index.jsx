import React from 'react';
import './FieldEntry.css';
import PropTypes from 'prop-types';
import editIcon from '../../assets/user-edit-text-message-note@3x.png';
import deleteIcon from '../../assets/trash-delete-recycle-bin-bucket-waste@3x.png';
import Modal from '../Modal';

function FieldEntry({ fieldName, handleFieldDelete, handleFieldRename }) {
  const [input, setInput] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFieldRename(fieldName, input);
    setInput('');
    closeModal();
  };
  const modal = (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <h1>Rename the Field</h1>
      <form>
        <label htmlFor="name">
          New name of the Field
          <input
            type="text"
            id="name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
        <button onClick={handleSubmit} type="submit">
          Create
        </button>
      </form>
    </Modal>
  );
  return (
    <div className="field-entry">
      <div className="first-portion">
        <span className="tab">Ab</span>
        <span className="field-name">{fieldName}</span>
        <span className="field-type">Text</span>
      </div>
      <div className="field-buttons">
        <button onClick={openModal} type="button">
          <img src={editIcon} alt="edit-icon" />
        </button>
        <button onClick={() => handleFieldDelete(fieldName)} type="button">
          <img src={deleteIcon} alt="delete-icon" />
        </button>
      </div>
      {modal}
    </div>
  );
}

export default FieldEntry;

FieldEntry.propTypes = {
  fieldName: PropTypes.string.isRequired,
  handleFieldDelete: PropTypes.func.isRequired,
  handleFieldRename: PropTypes.func.isRequired,
};
