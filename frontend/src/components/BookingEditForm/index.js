import React, { useState, createContext, useContext } from 'react';
import { Modal } from '../../context/Modal';
import EditBooking from './BookingEditForm';



export const EditBookingModalContext = createContext();
export const useEditBookingModal = () => useContext(EditBookingModalContext);


function EditBookingFormModal({booking}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <EditBookingModalContext.Provider
            value={{
                showModal,
                setShowModal
            }}
        >
           <button className='createReviewButton' onClick={() => setShowModal(true)}>Edit Dates</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <EditBooking booking={booking} />
            </Modal>
      )}
        </EditBookingModalContext.Provider>
    );
}

export default EditBookingFormModal;
