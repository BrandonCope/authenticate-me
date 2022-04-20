import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

const ProfileListings = () => {
    const {id} = useParams()
    const spots = useSelector((state) => state.spotState.list)
    const spotsArr = Object.values(spots)
    const filterSpotsArr = spotsArr.filter((spot) => spot?.userId === +id)

    return (
        <>
            <div className='spotListContainer'>
            <h1>My Estates</h1>
            <ul>
                {filterSpotsArr.map(spot => (
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
        </>
    )
}

export default ProfileListings;
