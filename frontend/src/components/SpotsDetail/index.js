// import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

// import { getSpots } from '../../store/spotReducer'

const SpotDetail = () => {
    const {spotId} = useParams();
    // const dispatch = useDispatch()
    const spots = useSelector((state) => state.spotState.list[spotId])
    // const spots
    // console.log(spotId)
    // console.log(spots)


    // const spots = Object.values(spotsObj)
    // console.log(spotsObj)
    // const spot = spots[spotId]

    // const spot = spots.find(spot => spot.id === +spotId)
    // console.log(spot)

    // useEffect(() => {
    //     dispatch(getSpots());
    // }, [dispatch]);
if (spots) {
    return (



        <div>
            <h1>{spots.name}</h1>
            <div className='top-detail'>
            <ul>
                <li>{spots.city}, {spots.state}, {spots.country}</li>
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
