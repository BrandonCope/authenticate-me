import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'

import { createReview } from "../../store/reviewReducer";
import { useReviewModal } from "./index";

import './ReviewForm.css'

function ReviewForm() {
    const dispatch = useDispatch();
    const {spotId} = useParams();
    const [review, setReview] = useState('')
    const {setShowModal} = useReviewModal();


    const user = useSelector((state) => state.session.user?.id)
    const username = useSelector((state) => state.session.user?.username)


    const handleSubmit = (e) => {
        e.preventDefault();

        const buildReview = {
            userId: user,
            spotId: spotId,
            username,
            review
        }
      dispatch(createReview(buildReview))
        setShowModal(false)
    }

    const handleCancel = (e) => {
        e.preventDefault()
        setShowModal(false)
      }

    return (
        <div className="reviewFormContainer">
            <form onSubmit={handleSubmit}>
            <h2>Post A Review:</h2>
            <textarea
            className="reviewInput"
            type="text"
            rows="7"
            cols="45"
            maxLength="300"
            placeholder="Type Review Here..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            ></textarea>
            <button className="createReviewButton"  >Create Review</button>
            </form>
            <button onClick={handleCancel} className="cancel-form-button" ><i className="fa-solid fa-x"></i></button>
        </div>
    )
}

export default ReviewForm;
