import { useDispatch } from "react-redux";
import { useDeleteAllModal, useDeleteModal } from ".";
import { deleteBooking } from "../../store/bookingReducer";
import { deleteReview } from "../../store/reviewReducer";
import { deleteSpot } from "../../store/spotReducer";

const DeleteForm = ({review, spots}) => {
    const dispatch = useDispatch()
    const {setShowModal} = useDeleteAllModal()
    const handleDelete = (e) => {
        e.preventDefault()

        if(review) {
            dispatch(deleteReview(review?.id))
            setShowModal(false)
        }
        if(spots) {
            dispatch(deleteSpot(spots?.id))
            setShowModal(false)
        }
    }
    const handleReturn = (e) => {
        e.preventDefault()
        setShowModal(false)
    }

    const handleCancel = (e) => {
        e.preventDefault()
        setShowModal(false)
      }
    return (
        <>
            <div className="edit-delete-modal-buttons">
            <button onClick={handleCancel} className="cancel-form-button" ><i className="fa-solid fa-x"></i></button>
                <div><h3>Are you sure, you want to delete?</h3></div>
                <div>
                    <button className="createReviewButton" onClick={handleDelete}>Yes, delete!</button>
                    <button className="createReviewButton" onClick={handleReturn}>No, cancel!</button>
                </div>
            </div>
        </>
    )
}

export default DeleteForm;
