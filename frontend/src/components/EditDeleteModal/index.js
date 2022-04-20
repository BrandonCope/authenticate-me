import React, { useState, createContext, useContext } from 'react';
import { Modal } from '../../context/Modal';
import EditDeleteModal from './EditDeleteModal';


export const EditDeleteModalContext = createContext();
export const useEditDeleteModal = () => useContext(EditDeleteModalContext);


function EditDeleteFormModal({booking}) {
    const [showModal, setShowEditDeleteModal] = useState(false);

    return (
        <EditDeleteModalContext.Provider
            value={{
                showModal,
                setShowEditDeleteModal
            }}
        >
           <button className='createReviewButton' onClick={() => setShowEditDeleteModal(true)}><i className="fa-solid fa-ellipsis"></i></button>
        {showModal && (
            <Modal onClose={() => setShowEditDeleteModal(false)}>
                <EditDeleteModal booking={booking} />
            </Modal>
      )}
        </EditDeleteModalContext.Provider>
    );
}

export default EditDeleteFormModal;
