import { useDispatch } from "react-redux";
import { useDeleteModal } from ".";
import { deleteBooking } from "../../store/bookingReducer";

const DeleteForm = ({booking}) => {
    const dispatch = useDispatch()
    const {setShowDeleteModal} = useDeleteModal()
    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteBooking(booking?.id))
        setShowDeleteModal(false)
    }
    const handleReturn = (e) => {
        e.preventDefault()
        setShowDeleteModal(false)
    }
    return (
        <>
            <div className="edit-delete-modal-buttons">
                <div><h3>Are you sure, you want to cancel?</h3></div>
                <div>
                    <button className="createReviewButton" onClick={handleDelete}>Yes, cancel dates!</button>
                    <button className="createReviewButton" onClick={handleReturn}>No, save dates!</button>
                </div>
            </div>
        </>
    )
}

export default DeleteForm;
