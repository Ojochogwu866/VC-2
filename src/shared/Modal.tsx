import React from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSuccess: boolean;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, isSuccess }) => {
  const modalClass = isSuccess ? 'success' : 'error';

  return (
    <div className={`modal ${isOpen ? 'show' : 'hide'} ${modalClass}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>{isSuccess ? 'Registration successful!' : 'Failed to submit the form.'}</p>
      </div>
    </div>
  );
};

export default SuccessModal;
