import React, { useState, createContext, useContext } from 'react';
import { Modal } from '../../context/Modal';
import DeleteAllForm from './DeleteAllForm';



export const DeleteAllModalContext = createContext();
export const useDeleteAllModal = () => useContext(DeleteAllModalContext);


function DeleteAllFormModal({review, spots}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <DeleteAllModalContext.Provider
            value={{
                showModal,
                setShowModal
            }}
        >
           <button className='createReviewButton' onClick={() => setShowModal(true)}>Delete</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <DeleteAllForm review={review} spots={spots} />
            </Modal>
      )}
        </DeleteAllModalContext.Provider>
    );
}

export default DeleteAllFormModal;
