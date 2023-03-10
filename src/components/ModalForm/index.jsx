import React from 'react';
import './ModalForm.css';
import PropTypes from 'prop-types';

function ModalForm({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content">{children}</div>
    </div>
  );
}

export default ModalForm;

ModalForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
