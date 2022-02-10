// import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import SpotEditFormModal from '../SpotEditFormModal';
import { deleteSpot } from '../../store/spotReducer';


// import { getSpots } from '../../store/spotReducer'

const SpotDetail = () => {
    const {spotId} = useParams();
    const spots = useSelector((state) => state.spotState.list[spotId])
    const dispatch = useDispatch()
    const history = useHistory();
    //   const spotsData = Object.values(spots)
    // const spotsUserId = useSelector((state) => state.spotState.list[spotId])

    const user = useSelector((state) => state.session.user)
    // console.log(user)
    // console.log(spotsData)
    // console.log(spots)
    const handleClick = async () => {
        await dispatch(deleteSpot(spotId))
        history.push('/')
    }


    let spotEdits;
    if (user) {
        spotEdits = (
            <div>
                <SpotEditFormModal />
                <button onClick={
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

if (spots) {
    return (

        <div>
            <h1>{spots.name}</h1>
            {spotEdits}
            {/* <SpotEditFormModal />
            <button>Delete Estate</button> */}
            <div className='top-detail'>
            <ul>
                <li>{spots.address}</li>
                <li>{spots.city}, {spots.state}, {spots.country}</li>
                <li>Lat:{spots.lat} Lng:{spots.lng}</li>
            </ul>
            </div>
            <div className='booking-Container'>
                <p>${spots.price} / night</p>
                <form></form>
            </div>

        </div>



    )
} else {
    return (<p></p>)
}
}

export default SpotDetail;
