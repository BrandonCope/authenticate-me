import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SpotEditForm from './SpotEditForm';
// import LoginForm from './LoginForm';

function SpotEditFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Details</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
         <SpotEditForm />
        </Modal>
      )}
    </>
  );
}

export default SpotEditFormModal;
