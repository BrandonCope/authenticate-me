import React, { useState, createContext, useContext } from 'react';
import { Modal } from '../../context/Modal';
import DeleteSpotForm from './SpotDeleteForm';



export const DeleteSpotModalContext = createContext();
export const useDeleteSpotModal = () => useContext(DeleteSpotModalContext);


function DeleteSpotFormModal({spot, pageReviews}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <DeleteSpotModalContext.Provider
            value={{
                showModal,
                setShowModal
            }}
        >
           <button className='editDetailButton' onClick={() => setShowModal(true)}>Delete</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <DeleteSpotForm spot={spot} pageReviews={pageReviews} />
            </Modal>
      )}
        </DeleteSpotModalContext.Provider>
    );
}

export default DeleteSpotFormModal;
