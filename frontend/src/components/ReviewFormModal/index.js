import React, { useState, createContext, useContext } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';

export const ReviewModalContext = createContext();
export const useReviewModal = () => useContext(ReviewModalContext);

function ReviewFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <ReviewModalContext.Provider
            value={{
                showModal,
                setShowModal
            }}
        >
           <button className='createReviewButton' onClick={() => setShowModal(true)}>Leave A Review</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
            <ReviewForm />
            </Modal>
      )}
        </ReviewModalContext.Provider>
    );
}

export default ReviewFormModal;
