import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import SpotEditFormModal from '../SpotEditFormModal';
import { deleteSpot, getSpots } from '../../store/spotReducer';
import './SpotsDetail.css'
import ReviewList from '../ReviewList';
import { useEffect } from 'react';
import ReviewFormModal from '../ReviewFormModal'
import { deleteReview, getReviews } from '../../store/reviewReducer';
import Booking from '../BookingForm';
import DeleteAllFormModal from '../DeleteForm';
import DeleteSpotFormModal from '../SpotDeleteModal';
import { deleteBooking } from '../../store/bookingReducer';



const SpotDetail = ({spots}) => {
    let key;
    const dispatch = useDispatch()
    const history = useHistory();
    const {spotId} = useParams();
    const reviewArr = []

    const spot = spots.find(spot => spot.id === +spotId)

    const user = useSelector((state) => state.session.user)
    const spotUser = useSelector((state) => state.spotState.list[spotId])
    const reviews = useSelector((state) => state.reviewState)

    const bookings = useSelector((state) => state.bookingState)
    const bookingsArr = Object.values(bookings)
    const filterBookingArr = bookingsArr.filter(booking => booking?.spotId === +spotId)


    for (key in reviews) {
        reviewArr.push(reviews[key])
    }
    console.log(spot)
    const pageReviews = reviewArr.filter(review => {

        if (review?.spotId === spot?.id) {

            return review;
        } else {
            return false;
        }
    })
    console.log(filterBookingArr)

    // const handleClick = async () => {
    //     pageReviews.forEach(review => {
    //     dispatch(deleteReview(review.id))
    //     })
    //     filterBookingArr.forEach(booking => {
    //         dispatch(deleteBooking(booking.id))
    //     })

    //     await dispatch(deleteSpot(spotId))
    //     history.push('/')
    // }

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <div >
        <ReviewFormModal />
      </div>
    );
  } else {
    sessionLinks = (
      <>
      </>
    );
  }


    let spotEdits;
    if (user?.id === spotUser?.userId) {
        spotEdits = (
            <div>
                <SpotEditFormModal />
                <DeleteSpotFormModal spot={spot} pageReviews={pageReviews} filterBookingArr={filterBookingArr} />
                {/* <button className='deleteSpotButton' onClick={handleClick} >Delete</button> */}
            </div>
        )
    } else {
        spotEdits = (
            <>
            </>
        )
    }

if (spotUser) {
    return (

        <div className='spotDetailContainer'>
            <h2>{spot.name}</h2>
            {spotEdits}

            <div className='top-detail'>
            <ul className='sub-top-detail'>
                <div className='left-top'>
                <li>{spot.address}</li>
                <li>{spot.city}, {spot.state}, {spot.country}</li>
                </div>
                <div className='right-top'>
                <li>Latitude:{spot.lat}</li>
                <li>Longitude:{spot.lng}</li>
                </div>
            </ul>
            <div className='detailImageContainer' >
                <img alt='Replace with a valid .jpg' className='detailImage1' src={spot.url1} />
                <img alt='Replace with a valid .jpg' className='detailImage2' src={spot.url2} />
                <img alt='Replace with a valid .jpg' className='detailImage3' src={spot.url3} />

            </div>
            </div>
           <div className='spot-detail-body'>
                <div className='review-Container'>
                    <h2>Previous Guest Reviews:</h2>
                    {sessionLinks}
                    <ReviewList spot={spot} />
                </div>
                <div className='booking-container'>
                    <h3>Book your stay:</h3>
                    <p>${spot.price} / night</p>
                    <div>
                    <Booking spot={spot} user={user} />
                    </div>
                </div>
           </div>

        </div>
    )
} else {
    return (<p></p>)
}
}

export default SpotDetail;
