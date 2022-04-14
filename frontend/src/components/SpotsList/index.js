import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './SpotList.css'

import { getSpots } from '../../store/spotReducer'

const SpotList = ({spots}) => {
    const dispatch = useDispatch()

    // useEffect(() => {
    //     // dispatch(getSpots());
    // }, [dispatch]);

    return (
        <div className='spotListContainer'>
            <h1>Current Estates</h1>
            <ul>
                {spots.map(spot => (
                    <div key={spot.id} className='listContainer'>
                        <NavLink to={`/spots/${spot.id}`}>
                        <div className='listDetail'>
                            <img className='listImage'
                            src={spot.url1}
                            alt="logo"
                            />
                            <div className='subListDetail'>
                        <p>Luxury living in {spot.city}</p>
                            <p>{spot.name}</p>
                            <p>${spot.price} / night</p>
                            </div>
                        </div>
                        </NavLink>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default SpotList;
