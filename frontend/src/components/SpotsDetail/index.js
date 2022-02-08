import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getSpots } from '../../store/spotReducer'

const SpotDetail = () => {
    const dispatch = useDispatch()
    const {spotId} = useParams();

    // console.log(spotId)
    // console.log(spots)


    const spots = useSelector((state) => state.spotState.list)
    // const spots = Object.values(spotsObj)
    // console.log(spotsObj)
    const spot = spots[spotId]

    // const spot = spots.find(spot => spot.id === +spotId)
    // console.log(spot)

    // useEffect(() => {
    //     dispatch(getSpots());
    // }, [dispatch]);

    return (



        <div>
            <h1>{spot.name}</h1>

        </div>



    )
}

export default SpotDetail;
