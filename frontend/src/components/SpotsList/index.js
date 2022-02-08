import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getSpots } from '../../store/spotReducer'

const SpotList = ({spots}) => {
    const dispatch = useDispatch()

    // const spotsObj = useSelector((state) => state.spotState.list)
    // const spots = Object.values(spotsObj)
    // console.log(spotsObj)
    console.log(spots)
    spots.map(spot => (
        console.log(spot)
    ))

    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch]);

    return (
        <div>
            <h1>Spot List</h1>
            <ul>
                {spots.map(spot => (
                    <div key={spot.id} className='listContainer'>
                        <p>Luxury living in {spot.city}</p>
                        <Link to={`/spots/${spot.id}`}>
                            <p>{spot.name}</p>
                        </Link>
                            <p>${spot.price} / night</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default SpotList;
