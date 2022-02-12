
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'

import { createReview } from "../../store/reviewReducer";
import { useReviewModal } from "./index";

function ReviewForm() {
    const dispatch = useDispatch();
    const {spotId} = useParams();
    const [review, setReview] = useState('')
    const {setShowModal} = useReviewModal();


    const user = useSelector((state) => state.session.user?.id)
    const username = useSelector((state) => state.session.user?.username)
    console.log(username)


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

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h2>Post A Review:</h2>
            {/* <label>spotId</label>
            <input
            value={spotId}
            onChange={(e) => setSpotId(e.target.value)}
            ></input> */}
            <input
            placeholder="Type Review Here..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            ></input>
            <button  >Create Review</button>
            </form>
        </div>
    )
}

export default ReviewForm;
