import React, { useState, createContext, useContext } from 'react';
import { Modal } from '../../context/Modal';
import DeleteForm from './DeleteForm';



export const DeleteModalContext = createContext();
export const useDeleteModal = () => useContext(DeleteModalContext);


function DeleteFormModal({booking}) {
    const [showModal, setShowDeleteModal] = useState(false);

    return (
        <DeleteModalContext.Provider
            value={{
                showModal,
                setShowDeleteModal
            }}
        >
           <button className='createReviewButton' onClick={() => setShowDeleteModal(true)}>Cancel Dates</button>
        {showModal && (
            <Modal onClose={() => setShowDeleteModal(false)}>
                <DeleteForm booking={booking} />
            </Modal>
      )}
        </DeleteModalContext.Provider>
    );
}

export default DeleteFormModal;
