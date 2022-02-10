import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom'
import './SpotEditForm.css'
import { editSpot } from '../../store/spotReducer'

function SpotEditForm() {
    const dispatch = useDispatch();
    const history = useHistory();
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

    const user = useSelector((state) => state.session.user.id)
    console.log(user)
    console.log(spotId)

    // const user = useSelector((state) => state.session.user)
    // // console.log(user)


    const handleSubmit = async (e) => {
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
        await dispatch(editSpot(spotId, payload))
        history.push(`/`)
    }

    return (
        <div className="editFormContainer">
        <form className='editForm' onSubmit={handleSubmit} >
         <h2>Hello from edit form</h2>
         <label>
                    <input
                    placeholder='Image 1 add your url'
                    type="text"
                    value={url1}
                    onChange={(e) => setUrl1(e.target.value)}
                    required
                    />
                </label>
                <label>
                    <input
                    placeholder='Image 2 add your url'
                    type="text"
                    value={url2}
                    onChange={(e) => setUrl2(e.target.value)}
                    required
                    />
                </label>
                <label>
                    <input
                    placeholder='Image 3 add your url'
                    type="text"
                    value={url3}
                    onChange={(e) => setUrl3(e.target.value)}
                    required
                    />
                </label>
        <label>
            Address:
            <input
            type="text"
            // defaultValue={spots.address}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            />
        </label>
        <label>
            City:
            <input
            type="text"
            // placeholder={spots.city}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            />
        </label>
        <label>
            State:
            <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            />
        </label>
        <label>
            Country:
            <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            />
        </label>
        <label>
            Latitude:
            <input
            type="number"
            value={lat}
            onChange={(e) => setLat(Number(e.target.value))}
            />
        </label>
        <label>
            Longitude:
            <input
            type="number"
            value={lng}
            onChange={(e) => setLng(Number(e.target.value))}
            />
        </label>
        <label>
            Estate Name:
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
        </label>
        <label>
            Price:
            <input
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
