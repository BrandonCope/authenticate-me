// import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import SpotEditFormModal from '../SpotEditFormModal';
import { deleteSpot, getSpots } from '../../store/spotReducer';
import './SpotsDetail.css'
import ReviewList from '../ReviewList';
import { useEffect } from 'react';
// import ReviewCreateForm from '../ReviewCreateForm'



const SpotDetail = ({spots}) => {
    const dispatch = useDispatch()
    const history = useHistory();
    const {spotId} = useParams();

    const spot = spots.find(spot => spot.id === +spotId)

    const user = useSelector((state) => state.session.user)
    const spotUser = useSelector((state) => state.spotState.list[spotId])

    useEffect(() => {
        dispatch(getSpots())
    },[dispatch])

    const handleClick = async () => {
        await dispatch(deleteSpot(spotId))
        history.push('/')
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
                {/* <ReviewCreateForm /> */}
                <ReviewList spot={spot} />
            </div>

        </div>



    )
} else {
    return (<p></p>)
}
}

export default SpotDetail;
