import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import './SpotEditForm.css'
import { editSpot } from '../../store/spotReducer'
import { useEditModal } from './index'

function SpotEditForm() {
    const dispatch = useDispatch();
    const {spotId} = useParams();
    const spots = useSelector((state) => state.spotState.list[spotId])
    const [url1, setUrl1] = useState(`${spots.url1}`)
    const [url2, setUrl2] = useState(`${spots.url2}`)
    const [url3, setUrl3] = useState(`${spots.url3}`)
    const [address, setAddress] = useState(`${spots.address}`)
    const [city, setCity] = useState(`${spots.city}`)
    const [state, setState] = useState(`${spots.state}`)
    const [country, setCountry] = useState(`${spots.country}`)
    const [lat, setLat] = useState(`${spots.lat}`)
    const [lng, setLng] = useState(`${spots.lng}`)
    const [name, setName] = useState(`${spots.name}`)
    const [price, setPrice] = useState(`${spots.price}`)
    const {setShowModal} = useEditModal();



    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            url1,
            url2,
            url3,
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            price,
        }
      dispatch(editSpot(spotId, payload))
      setShowModal(false)
    //   history.push(`/spots/${spotId}`)
    }

    // useEffect(() => {
    //     dispatch(editSpot())
    // },[dispatch])


    return (
        <div className="editFormContainer">
        <form className='editForm' onSubmit={handleSubmit} >
         <h2>Edit Your Estate:</h2>
         <label>
                    <input
                    className="editSpotInput"
                    placeholder='Image 1 add your url'
                    type="url"
                    value={url1}
                    onChange={(e) => setUrl1(e.target.value)}
                    required
                    />
                </label>
                <label>
                    <input
                      className="editSpotInput"
                    placeholder='Image 2 add your url'
                    type="url"
                    value={url2}
                    onChange={(e) => setUrl2(e.target.value)}
                    required
                    />
                </label>
                <label>
                    <input
                      className="editSpotInput"
                    placeholder='Image 3 add your url'
                    type="url"
                    value={url3}
                    onChange={(e) => setUrl3(e.target.value)}
                    required
                    />
                </label>
        <label>

            <input
              className="editSpotInput"
            placeholder="Address"
            type="text"
            // defaultValue={spots.address}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            />
        </label>
        <label>

            <input
              className="editSpotInput"
            placeholder="City"
            type="text"
            // placeholder={spots.city}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            />
        </label>
        <label>

            <input
              className="editSpotInput"
            placeholder="State"
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            />
        </label>
        <label>

            <input
              className="editSpotInput"
            placeholder="Country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            />
        </label>
        <label>

            <input
              className="editSpotInput"
            placeholder="Latitude"
            type="number"
            value={lat}
            onChange={(e) => setLat(Number(e.target.value))}
            />
        </label>
        <label>

            <input
              className="editSpotInput"
            placeholder="Longitude"
            type="number"
            value={lng}
            onChange={(e) => setLng(Number(e.target.value))}
            />
        </label>
        <label>

            <input
              className="editSpotInput"
            placeholder="Estate Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
        </label>
        <label>

            <input
              className="editSpotInput"
            placeholder="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            />
        </label>
        <button className='editSubmit' type='submit'>Submit Changes!</button>
    </form>
        </div>
    )
}

export default SpotEditForm;
