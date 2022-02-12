import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import SpotEditFormModal from '../SpotEditFormModal';
import { deleteSpot, getSpots } from '../../store/spotReducer';
import './SpotsDetail.css'
import ReviewList from '../ReviewList';
import { useEffect } from 'react';
import ReviewFormModal from '../ReviewFormModal'
import { deleteReview, getReviews } from '../../store/reviewReducer';



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

    for (key in reviews) {
        reviewArr.push(reviews[key])
    }

    const pageReviews = reviewArr.filter(review => {
        // console.log(review.spotId)
        // console.log(spot.id)
        if (review?.spotId === spot?.id) {

            return review;
        } else {
            return false;
        }
    })

    console.log(pageReviews)

    useEffect(() => {
        dispatch(getSpots())
        dispatch(getReviews)
    },[dispatch])

    const handleClick = async () => {
        pageReviews.forEach(review => {
        dispatch(deleteReview(review.id))
        })

        await dispatch(deleteSpot(spotId))
        history.push('/')
    }

    // const sessionUser = useSelector(state => state.session.user);

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

                <button className='deleteSpotButton' onClick={handleClick} >
                Delete</button>
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

        <div>
            <h1>{spot.name}</h1>
            {spotEdits}
            {/* <SpotEditFormModal />
            <button>Delete Estate</button> */}
            <div className='top-detail'>
            <ul className='sub-top-detail'>
                <li>{spot.address}</li>
                <li>{spot.city}, {spot.state}, {spot.country}</li>
                <li>Lat:{spot.lat} Lng:{spot.lng}</li>
            </ul>
            <div>
                <img alt='Replace with a valid url.' className='detailImage1' src={spot.url1} />
                <img alt='Replace with a valid url.' className='detailImage2' src={spot.url2} />
                <img alt='Replace with a valid url.' className='detailImage3' src={spot.url3} />

            </div>
            </div>
            <div className='booking-Container'>
                <p>${spot.price} / night</p>
                <form></form>
            </div>
            <div className='review-Container'>
                <h2>Previous Guest Reviews:</h2>
                {sessionLinks}
                <ReviewList spot={spot} />
            </div>

        </div>



    )
} else {
    return (<p></p>)
}
}

export default SpotDetail;
