import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createSpot } from '../../store/spotReducer'
import './SpotHostForm.css'

const SpotHostForm = () => {
    const dispatch = useDispatch();
    const [url1, setUrl1] = useState('')
    const [url2, setUrl2] = useState('')
    const [url3, setUrl3] = useState('')
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
      setUrl1("");
      setUrl2("");
      setUrl3("");
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
        dispatch(createSpot(newSpot));
        reset();
        history.push('/')
    }

    return (
        <div className='hostContainer'>
            <form className='hostForm' onSubmit={handleSubmit}>
            <h2>Host Your Estate</h2>
            <label>

                    <input
                    placeholder='Image 1 add your url'
                    type="text"
                    value={url1}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    />
                </label>
            <label>

                    <input
                    placeholder='Image 2 add your url'
                    type="text"
                    value={url2}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    />
                </label>
            <label>

                    <input
                    placeholder='Image 3 add your url'
                    type="text"
                    value={url3}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    />
                </label>
                <label>

                    <input
                    placeholder='Address'
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    />
                </label>
                <label>

                    <input
                    placeholder='City'
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    />
                </label>
                <label>

                    <input
                    placeholder='State'
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                    />
                </label>
                <label>

                    <input
                    placeholder='Country'
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    />
                </label>
                <label>

                    <input
                    placeholder='Latitude'
                    type="teext"
                    value={lat}
                    onChange={(e) => setLat(Number(e.target.value))}
                    />
                </label>
                <label>

                    <input
                    placeholder='Longitude'
                    type="text"
                    value={lng}
                    onChange={(e) => setLng(Number(e.target.value))}
                    />
                </label>
                <label>

                    <input
                    placeholder='Estate Name'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </label>
                <label>

                    <input
                    placeholder='Price'
                    type="text"
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
