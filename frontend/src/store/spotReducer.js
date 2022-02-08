const LOAD = 'spots/Load'

export const loadSpots = (spots) => {
    return { type: LOAD, spots }
}

export const getSpots = () => async dispatch => {
    const response = await fetch(`/api/spots`)
    console.log(response)
    if (response.ok) {
        const spots = await response.json()
        // console.log(spots)
        dispatch(loadSpots(spots))
    }
}

const initialState = {
    list: {}
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
        default:
            return state;
    }
}

export default spotReducer
