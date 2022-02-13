// import { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import ReviewEditFormModal from '../ReviewEditFormModal';
import { deleteReview } from '../../store/reviewReducer';
import './ReviewList.css'


const ReviewList = ({spot}) => {
    let key;
    const dispatch = useDispatch();
    const reviewArr = []
    const reviews = useSelector((state) => state.reviewState)
    const user = useSelector((state) => state.session.user)

    for (key in reviews) {
        reviewArr.push(reviews[key])
    }

    const pageReviews = reviewArr.filter(review => {

        if (review.spotId === spot.id) {

            return review;
        } else {
            return false;
        }
    })

    return (
        <div>
            {/* <h2 className='reviewListTitle'>HELLO FROM REVIEW LIST</h2> */}
            {pageReviews.map(review => (
            <div key={review.id} className='individualReview' >
                <h3>{review.username}</h3>
                <p className='reviewText' >{review.review}</p>
                {user ? <> {user.id === review.userId  &&
                <div>
                    <ReviewEditFormModal review={review} />
                    <button className='deleteReviewButton' onClick={async () => {
                        await dispatch(deleteReview(review.id))
                    }}>Delete</button>
                    </div>}</>:<></>}
            </div>

            ))}

        </div>
    )
}

export default ReviewList;
