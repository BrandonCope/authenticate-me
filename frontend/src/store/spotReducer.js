import { csrfFetch } from './csrf';


const LOAD = 'spots/Load'
const ADD = 'spots/Add'
const UPDATE = 'spots/Update'
const REMOVE = 'spots/delete'

export const loadSpots = (spots) => {
    return { type: LOAD, spots }
}

export const addSpots = (newSpot) => ({
    type: ADD,
    newSpot,
})

export const updateSpots = (editSpot) => ({
    type: UPDATE,
    editSpot,
})

export const removeSpots = (spotId) => ({
    type: REMOVE,
    spotId
})


export const getSpots = () => async dispatch => {
    const response = await fetch(`/api/spots`)
    if (response.ok) {
        const spots = await response.json()
        dispatch(loadSpots(spots))
        return spots
    }
    // return response;
}

export const restoreSpot = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');
    const spots = await response.json();
    // console.log(spots)
    dispatch(loadSpots(spots));
    return response;

}


export const createSpot = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/spots`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if(response.ok) {
        const newSpot = await response.json()
        dispatch(addSpots(newSpot))
        return newSpot
    }

}

export const editSpot = (spotId, payload) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if(response.ok) {
        const editSpot = await response.json()
        dispatch(updateSpots(editSpot))
        return editSpot;
    }
}

export const deleteSpot = (spotId) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'DELETE',
      })
    if(response.ok) {
        dispatch(removeSpots(spotId))
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
            newState = {...state}
            newState.list = {...newState.list, [action.editSpot.id]: action.editSpot}
            return newState
        case REMOVE:
            newState = {...state}
            delete newState[action.spotId]
            return newState
        default:
            return state;
    }
}

export default spotReducer
