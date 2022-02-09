import { csrfFetch } from './csrf';

const LOAD = 'spots/Load'
const ADD = 'spots/Add'
const UPDATE = 'spots/Update'

export const loadSpots = (spots) => {
    return { type: LOAD, spots }
}

export const addSpots = (newSpot) => ({
    type: ADD,
    newSpot,
})

export const updateSpots = (spot) => ({
    type: UPDATE,
    spot,
})

// export const loadImages = (images) => {
//     return { type: LOAD_IMAGE, images}
// }

export const getSpots = () => async dispatch => {
    const response = await fetch(`/api/spots`)
    if (response.ok) {
        const spots = await response.json()
        // console.log(spots)
        dispatch(loadSpots(spots))
        return spots
    }
    // return response;
}

export const createSpot = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/spots`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    console.log(response)
    if(response.ok) {
        const newSpot = await response.json()
        dispatch(addSpots(newSpot))
        return newSpot
    }
    // return response;
}

export const updateSpot = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${payload.spotId}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if(response.ok) {
        const editSpot = await response.json()
        dispatch(updateSpots(editSpot))
        return editSpot;
    }
}

// export const getImage = () => async dispatch => {
//     const response = await fetch(`/api/images`)
//     console.log(response)
//     if (response.ok) {
//         const images = await response.json()
//         // console.log(images)
//         dispatch(loadImages(images))
//         return images;
//     }

// }

export const restoreSpot = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');
    // console.log(response.spots)
    if (response.ok) {
        const spots = await response.json();
        // console.log(spots)
        dispatch(loadSpots(spots));
        return spots;

    }
}



const initialState = {
    list: {},
    // imageObj: {},
};

const spotReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case LOAD:
            newState = {...state}
            const list = {}
            action.spots.forEach(spot => list[spot.id] = spot)
            newState.list = list;
            return newState
        case ADD:
            newState = {...state}
            newState.list = {...newState.list, [action.newSpot.id]: action.newSpot}
            return newState
        case UPDATE:
            return {
                ...state,
                [action.spot.id]: action.spot
            }
        default:
            return state;
    }
}

export default spotReducer
