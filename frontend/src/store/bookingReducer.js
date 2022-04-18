import { csrfFetch } from "./csrf";

const LOAD = 'bookings/Load'
const ADD = 'bookings/Add'
const UPDATE = 'bookings/Update'
const REMOVE = 'bookings/Delete'

export const loadBookings = (bookings) => {
   return {type: LOAD, bookings}
};

export const addBooking = (newBooking) => ({
    type: ADD,
    newBooking,
})

export const updateBooking = (editBooking) => ({
    type: UPDATE,
    editBooking
})

export const removeBookings = (bookingId) => ({
    type: REMOVE,
    bookingId
})

export const getBookings = () => async dispatch => {
    const response = await fetch(`/api/bookings`)
    if(response.ok) {
        const bookings = await response.json()
        dispatch(loadBookings(bookings))
        return bookings
    }
}

export const createBooking = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/bookings`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if(response.ok) {
        const newBooking = await response.json()
        dispatch(addBooking(newBooking))
        return newBooking
    }
}

export const editBooking = (bookingId, payload) => async dispatch => {
    const response = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if(response.ok) {
        const editBooking = await response.json()
        dispatch(updateBooking(editBooking))
        return editBooking;
    }
}

export const restoreBooking = () => async (dispatch) => {
    const response = await csrfFetch('/api/bookings');
    const bookings = await response.json();
    dispatch(loadBookings(bookings));
    return response
}

export const deleteBooking = (bookingId) => async dispatch => {
    const response = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
    if(response.ok) {
        dispatch(removeBookings(bookingId))
    }
}


const bookingReducer = (state = {}, action) => {
    let newState
    switch (action.type) {
        case LOAD:
            newState = {...state}
            action.bookings.forEach(booking => newState[booking.id] = booking)
            return newState
        case ADD:
            newState = {...state}
            newState = {...newState, [action.newBooking.id]: action.newBooking}
            return newState
        case UPDATE:
            newState = {...state}
            newState = {...newState, [action.editBooking.id]: action.editBooking}
            return newState
        case REMOVE:
            newState = {...state}
            delete newState[action.bookingId]
            return newState
        default:
            return state;
    }
}

export default bookingReducer
