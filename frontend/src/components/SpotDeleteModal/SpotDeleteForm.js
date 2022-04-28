import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDeleteSpotModal } from ".";
import { deleteBooking } from "../../store/bookingReducer";
import { deleteReview } from "../../store/reviewReducer";
import { deleteSpot } from "../../store/spotReducer";

const DeleteSpotForm = ({spot, pageReviews}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {setShowModal} = useDeleteSpotModal()

    const bookings = useSelector((state) => state.bookingState)
    const bookingsArr = Object.values(bookings)
    const filterBookingArr = bookingsArr.filter(booking => booking?.spotId === spot?.id)

    console.log(spot)
    const handleDelete = async (e) => {
        e.preventDefault()
 
        filterBookingArr.forEach(booking => {
            dispatch(deleteBooking(booking.id))
        })

        pageReviews.forEach(review => {
            dispatch(deleteReview(review.id))
            })

        await dispatch(deleteSpot(spot?.id))
        history.push('/')
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
                    <button className="createReviewButton" onClick={handleCancel}>No, cancel!</button>
                </div>
            </div>
        </>
    )
}

export default DeleteSpotForm;
