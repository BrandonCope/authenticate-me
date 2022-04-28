import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editReview } from "../../store/reviewReducer";
import { useReviewEditModal } from "./index";
import './ReviewEditForm.css'

function ReviewEditForm({review}) {
    const dispatch = useDispatch();
    const [reviewEdit, setReviewEdit] = useState(`${review.review}`)
    const reviewId = review.id;
    const {setShowModal} = useReviewEditModal();

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            review: reviewEdit
        }
        dispatch(editReview(reviewId, payload))
        setShowModal(false)
    }

    const handleCancel = (e) => {
        e.preventDefault()
        setShowModal(false)
      }
    return (
        // <h2>Hello From Review Edit Form</h2>
        <div className="reviewEditForm">
        <form onSubmit={handleSubmit} >
        <h2>Edit Your Review:</h2>
        <textarea
        className="reviewEditInput"
        placeholder="Type Review Here..."
        type="text"
        rows="7"
        cols="45"
        maxLength="300"
        value={reviewEdit}
        onChange={(e) => setReviewEdit(e.target.value)}
        required
        ></textarea>
        <button className="reviewEditButton"  >Edit Review</button>
        </form>
        <button onClick={handleCancel} className="cancel-form-button" ><i className="fa-solid fa-x"></i></button>
    </div>
    )
}

export default ReviewEditForm
