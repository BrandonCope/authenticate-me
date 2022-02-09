import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createSpot } from '../../store/spotReducer'
import './SpotHostForm.css'

const SpotHostForm = () => {
    const dispatch = useDispatch();
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    // const [errors, setErrors] = useState([])
    const history = useHistory();

    const user = useSelector((state) => state.session.user.id)
    // console.log(user.id)
    // const spotsObj = useSelector((state) => state.spotState)
    //   const spots = Object.values(spotsObj)
  // const imageObj = useSelector((state) => state.imageState.list)
//   console.log(spotsObj.list)

  const reset = () => {
      setAddress("");
      setCity("");
      setState("");
      setCountry("");
      setLat("");
      setLng("");
      setName("");
      setPrice("");
  }


    const handleSubmit = (e) => {
        e.preventDefault();

        const newSpot = {
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
        dispatch(createSpot(newSpot));
        reset();
        history.push('/')
    }

    return (
        <div>
            <h2>Host Your Estate</h2>
            <form className='hostForm' onSubmit={handleSubmit}>
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
                <button className='hostSubmit' type='submit'>Host Now!</button>
            </form>
        </div>
    )
}
export default SpotHostForm
