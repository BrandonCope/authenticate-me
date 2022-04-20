import EditBookingFormModal from "../BookingEditForm";
import DeleteFormModal from "../DeleteModal";
import "./EditDelete.css"

const EditDeleteModal = ({booking}) => {

    return (
        <>
            <div className="edit-delete-modal-buttons">
                <div><EditBookingFormModal booking={booking} /></div>
                <div><DeleteFormModal booking={booking} /></div>
            </div>
        </>
    )
}


export default EditDeleteModal;
