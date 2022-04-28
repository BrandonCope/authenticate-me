import { useSelector } from 'react-redux'
import ReviewEditFormModal from '../ReviewEditFormModal';
import './ReviewList.css'
import DeleteAllFormModal from '../DeleteForm';



const ReviewList = ({spot}) => {
    const reviews = useSelector((state) => state.reviewState)
    const user = useSelector((state) => state.session.user)
    const reviewsArr = Object.values(reviews).reverse()
    const filterReviewsArr = reviewsArr.filter(review => review.spotId === spot.id)


    return (
        <div>
            {filterReviewsArr.map(review => (
            <div key={review.id} className='individualReview' >
                <h3>{review.username}</h3>
                <p className='reviewText' >{review.review}</p>
                {user ? <> {user.id === review.userId  &&
                <div>
                    <ReviewEditFormModal review={review} />
                    <DeleteAllFormModal review={review} />
                </div>}</>:<></>}
            </div>

            ))}

        </div>
    )
}

export default ReviewList;
