// import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import SpotEditFormModal from '../SpotEditFormModal';

// import { getSpots } from '../../store/spotReducer'

const SpotDetail = () => {
    const {spotId} = useParams();
    // const dispatch = useDispatch()
    const spots = useSelector((state) => state.spotState.list[spotId])
    //   const spotsData = Object.values(spots)
    // const spotsUserId = useSelector((state) => state.spotState.list[spotId])

    const user = useSelector((state) => state.session.user.id)
    // console.log(user)
    // console.log(spotsData)
    console.log(spots)


    let spotEdits;
    if (user) {
        spotEdits = (
            <div>
                <SpotEditFormModal />
                <button>Delete</button>
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
