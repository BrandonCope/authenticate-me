import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import SpotEditForm from './SpotEditForm';
import { getSpots } from '../../store/spotReducer'
import { useSelector, useDispatch } from 'react-redux'
import './SpotEditForm.css'
// import LoginForm from './LoginForm';

function SpotEditFormModal() {
  const [showModal, setShowModal] = useState(false);
  // const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getSpots())
// },[dispatch])

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
