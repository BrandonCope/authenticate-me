// import { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import ReviewEditFormModal from '../ReviewEditFormModal';
import { deleteReview } from '../../store/reviewReducer';
import './ReviewList.css'


// import { getReviews } from '../../store/reviewReducer'
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
        // console.log(review.spotId)
        // console.log(spot.id)
        if (review.spotId === spot.id) {

            return review;
        } else {
            return false;
        }
    })

// let reviewEdits;
// pageReviews.forEach(review => {
//     console.log(review.userId)
//     if (user) {
//         reviewEdits = (
//             <div>
//                 {/* <SpotEditFormModal /> */}
//                 <button>Edit</button>
//                 <button className='deleteSpotButton'  >
//                 Delete</button>
//             </div>
//         )
//     } else {
//         reviewEdits = (
//             <>
//             </>
//         )
//     }

// })





    return (
        <div>
            <h2 className='reviewListTitle'>HELLO FROM REVIEW LIST</h2>
            {pageReviews.map(review => (
            <div key={review.id} className='individualReview' >
                <h3>{review.username}</h3>
                <p>{review.review}</p>
                {user ? <> {user.id === review.userId  &&
                <div>
                    <ReviewEditFormModal review={review} />
                    {/* <button>edit</button> */}
                    <button onClick={async () => {
                        await dispatch(deleteReview(review.id))
                    }}>delete</button>
                    </div>}</>:<></>}
                {/* {reviewEdits} */}
            </div>

            ))}

        </div>
    )
}

export default ReviewList;
