import { csrfFetch } from './csrf';

const LOAD = 'spots/Load'
// const LOAD_IMAGE = 'images/Load'
const ADD = 'spots/Add'

export const loadSpots = (spots) => {
    return { type: LOAD, spots }
}

export const addSpots = (newSpot) => ({
    type: ADD,
    newSpot
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
    }
    return response;
}

export const createSpot = (payload) => async dispatch => {
    const response = await fetch(`/api/spots`, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(payload)
    })
    console.log(response)
    if(response.ok) {
        const newSpot = await response.json()
        dispatch(addSpots(newSpot))
    }
    return response;
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
            newState.list = {...newState.list, [action.newSpot.id] : action.newSpot}
            return newState
        // case LOAD_IMAGE:
        //     newState = {...state}
        //     const imageObj = {}
        //     action.images.forEach(image => imageObj[image.id] = image)
        //     newState.imageObj = imageObj;
        //     return newState
        default:
            return state;
    }
}

export default spotReducer
