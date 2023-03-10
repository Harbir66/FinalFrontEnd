import React from 'react';
import './DottedButton.css';
import PropTypes from 'prop-types';
import Modal from '../Modal';

function DottedButton({ handleNew, text, large }) {
  const [input, setInput] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  // console.log(isOpen);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNew(input);
    setInput('');
    closeModal();
  };
  const className = large ? 'dotted-button larger' : 'dotted-button';
  const modalDiv = large ? (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <h1>Create a new Field</h1>
      <form>
        <label htmlFor="name">
          Name of the new Field
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
  ) : (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <h1>Create a new content type</h1>
      <form>
        <label htmlFor="name">
          Name of the content type
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
    <div>
      <button onClick={openModal} type="button" className={className}>
        {text}
      </button>
      {modalDiv}
    </div>
  );
}

export default DottedButton;

DottedButton.propTypes = {
  text: PropTypes.string.isRequired,
  large: PropTypes.bool.isRequired,
  handleNew: PropTypes.func.isRequired,
};
