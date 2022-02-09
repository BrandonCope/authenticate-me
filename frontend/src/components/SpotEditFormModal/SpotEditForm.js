import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
// import { Redirect } from "react-router-dom";
import './SpotEditForm.css'
import { updateSpot } from "../../store/spotReducer";

function SpotEditForm() {
    const dispatch = useDispatch();
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const {spotId} = useParams();
    const spots = useSelector((state) => state.spotState.list[spotId])
    const user = useSelector((state) => state.session.user.id)
    console.log(user)
    console.log(spotId)

    // const user = useSelector((state) => state.session.user)
    // // console.log(user)

    const handleSubmit = (e) => {
        e.preventDefault();

        const editSpot = {
            id: spotId,
            userId: user,
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            price,
        }
        dispatch(updateSpot(editSpot))
    }

    return (
        <div>
             <h2>Hello from edit form</h2>
        <form className='hostForm' >
        <label>
            Address:
            <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            />
        </label>
        <label>
            City:
            <input
            type="text"
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
        <button className='hostSubmit' type='submit'>Submit Changes!</button>
    </form>
        </div>
    )
}

export default SpotEditForm;
