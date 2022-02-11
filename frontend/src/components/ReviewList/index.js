import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ReviewList.css'


import { getReviews } from '../../store/reviewReducer'
let key;
const ReviewList = ({spot}) => {
    const dispatch = useDispatch();
    const reviewArr = []
    const reviews = useSelector((state) => state.reviewState)
    for (key in reviews) {
        reviewArr.push(reviews[key])
    }
    const pageReviews = reviewArr.filter(review => {
        // console.log(review.spotId)
        // console.log(spot.id)
        if (review.spotId === spot.id) {
            return review;
        }
    })
    console.log(pageReviews)

    return (
        <div>
            <h2 className='reviewListTitle'>HELLO FROM REVIEW LIST</h2>
            {pageReviews.map(review => (
            <div className='individualReview' >
                <p>{review.review}</p>
            </div>

            ))}

        </div>
    )
}

export default ReviewList;
