import { csrfFetch } from "./csrf";

const LOAD = 'reviews/Load'
const ADD_REVIEW = 'reviews/Add'
// const UPDATE = 'reviews/Update'
// const REMOVE = 'reviews/Delete'

export const loadReviews = (reviews) => {
   return {type: LOAD, reviews}
};

export const addReview = (newReview) => ({
    type: ADD_REVIEW,
    newReview,
})

export const getReviews = () => async dispatch => {
    const response = await fetch(`/api/reviews`)
    if(response.ok) {
        const reviews = await response.json()
        dispatch(loadReviews(reviews))
        return reviews
    }
}

export const createReview = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/reviews`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if(response.ok) {
        const newReview = await response.json()
        dispatch(addReview(newReview))
        return newReview
    }
}

export const restoreReview = () => async (dispatch) => {
    const response = await csrfFetch('/api/reviews');
    const reviews = await response.json();
    dispatch(loadReviews(reviews));
    return response
}


const reviewReducer = (state = {}, action) => {
    let newState
    switch (action.type) {
        case LOAD:
            newState = {...state}
            action.reviews.forEach(review => newState[review.id] = review)
            return newState
        case ADD_REVIEW:
            newState = {...state}
            newState = {...newState, [action.newReview.id]: action.newReview}
            return newState
        default:
            return state;
    }
}

export default reviewReducer
