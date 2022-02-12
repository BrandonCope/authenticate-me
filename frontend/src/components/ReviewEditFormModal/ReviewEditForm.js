import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editReview } from "../../store/reviewReducer";
import { useReviewEditModal } from "./index";

function ReviewEditForm({review}) {
    const dispatch = useDispatch();
    const [reviewEdit, setReviewEdit] = useState(`${review.review}`)
    const reviewId = review.id;
    const {setShowModal} = useReviewEditModal();
    // console.log(reviewId)

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            review: reviewEdit
        }
        dispatch(editReview(reviewId, payload))
        setShowModal(false)
    }
    return (
        // <h2>Hello From Review Edit Form</h2>
        <div>
        <form onSubmit={handleSubmit} >
        <h2>Edit Your Review:</h2>
        <input
        placeholder="Type Review Here..."
        value={reviewEdit}
        onChange={(e) => setReviewEdit(e.target.value)}
        required
        ></input>
        <button  >Create Review</button>
        </form>
    </div>
    )
}

export default ReviewEditForm
