import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SpotEditForm from './SpotEditForm';
import './SpotEditForm.css'
// import LoginForm from './LoginForm';

function SpotEditFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='editDetailButton' onClick={() => setShowModal(true)}>Edit Details</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
         <SpotEditForm />
        </Modal>
      )}
    </>
  );
}

export default SpotEditFormModal;
