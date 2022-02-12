import { csrfFetch } from "./csrf";

const LOAD = 'reviews/Load'
const ADD = 'reviews/Add'
const UPDATE = 'reviews/Update'
const REMOVE = 'reviews/Delete'

export const loadReviews = (reviews) => {
   return {type: LOAD, reviews}
};

export const addReview = (newReview) => ({
    type: ADD,
    newReview,
})

export const updateReview = (editReview) => ({
    type: UPDATE,
    editReview
})

export const removeReviews = (reviewId) => ({
    type: REMOVE,
    reviewId
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

export const editReview = (reviewId, payload) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if(response.ok) {
        const editReview = await response.json()
        dispatch(updateReview(editReview))
        return editReview;
    }
}

export const restoreReview = () => async (dispatch) => {
    const response = await csrfFetch('/api/reviews');
    const reviews = await response.json();
    dispatch(loadReviews(reviews));
    return response
}

export const deleteReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
    if(response.ok) {
        dispatch(removeReviews(reviewId))
    }
}


const reviewReducer = (state = {}, action) => {
    let newState
    switch (action.type) {
        case LOAD:
            newState = {...state}
            action.reviews.forEach(review => newState[review.id] = review)
            return newState
        case ADD:
            newState = {...state}
            newState = {...newState, [action.newReview.id]: action.newReview}
            return newState
        case UPDATE:
            newState = {...state}
            newState = {...newState, [action.editReview.id]: action.editReview}
            return newState
        case REMOVE:
            newState = {...state}
            delete newState[action.reviewId]
            return newState
        default:
            return state;
    }
}

export default reviewReducer
