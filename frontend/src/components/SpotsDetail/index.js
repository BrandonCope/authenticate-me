// import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import SpotEditFormModal from '../SpotEditFormModal';
import { deleteSpot } from '../../store/spotReducer';
import './SpotsDetail.css'


// import { getSpots } from '../../store/spotReducer'

const SpotDetail = ({spots}) => {
    const dispatch = useDispatch()
    const history = useHistory();
    const {spotId} = useParams();

    // const spots = useSelector((state) => state.spotState.list[spotId])
    const spot = spots.find(spot => spot.id === +spotId)
    // console.log(spot.userId)


    const user = useSelector((state) => state.session.user)
    const spotUser = useSelector((state) => state.spotState.list[spotId])
    console.log(user?.id)
    console.log(spotUser)
    console.log(spotUser?.userId)

    const handleClick = async () => {
        await dispatch(deleteSpot(spotId))
        history.push('/')
    }


    let spotEdits;
    if (user?.id === spotUser?.userId) {
        spotEdits = (
            <div>
                <SpotEditFormModal />
                <button className='deleteSpotButton' onClick={
                    async () => {
                    dispatch(deleteSpot(spotId))
                    history.push('/')}} >
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
                <img className='detailImage1' src={spot.url1} />
                <img className='detailImage2' src={spot.url2} />
                <img className='detailImage3' src={spot.url3} />

            </div>
            </div>
            <div className='booking-Container'>
                <p>${spot.price} / night</p>
                <form></form>
            </div>

        </div>



    )
} else {
    return (<p></p>)
}
}

export default SpotDetail;
