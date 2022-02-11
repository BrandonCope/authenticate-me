import React, { useState, useEffect, createContext, useContext } from 'react';
import { Modal } from '../../context/Modal';
import SpotEditForm from './SpotEditForm';
import { getSpots } from '../../store/spotReducer'
import { useSelector, useDispatch } from 'react-redux'
import './SpotEditForm.css'
// import LoginForm from './LoginForm';

export const EditModalContext = createContext();
export const useEditModal = () => useContext(EditModalContext)

function SpotEditFormModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpots())
},[dispatch])

  return (
    <EditModalContext.Provider
      value={{
        showModal,
        setShowModal
      }}
    >
      <button className='editDetailButton' onClick={() => setShowModal(true)}>Edit Details</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
         <SpotEditForm />
        </Modal>
      )}
    </EditModalContext.Provider>
  );
}

export default SpotEditFormModal;
