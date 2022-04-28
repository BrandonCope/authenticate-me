import EditBookingFormModal from "../BookingEditForm";
import DeleteFormModal from "../DeleteModal";
import "./EditDelete.css"

const EditDeleteModal = ({booking, setShowModal}) => {

    const handleCancel = (e) => {
        e.preventDefault()
        setShowModal(false)
      }

    return (
        <>
            <div className="edit-delete-modal-buttons">
                <div><EditBookingFormModal booking={booking} /></div>
                <div><DeleteFormModal booking={booking} /></div>
                <button onClick={handleCancel} className="createReviewButton" >Cancel</button>
            </div>
        </>
    )
}


export default EditDeleteModal;
