// import { useEffect } from 'react'
import {  useSelector } from 'react-redux'
import './ReviewList.css'


// import { getReviews } from '../../store/reviewReducer'
let key;
const ReviewList = ({spot}) => {
    // const dispatch = useDispatch();
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
                    <button>edit</button>
                    <button>delete</button>
                    </div>}</>:<></>}
                {/* {reviewEdits} */}
            </div>

            ))}

        </div>
    )
}

export default ReviewList;
