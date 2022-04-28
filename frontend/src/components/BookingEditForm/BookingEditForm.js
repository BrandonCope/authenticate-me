import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editBooking, getBookings } from "../../store/bookingReducer";

import moment from "moment";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from "react-dates";
import { useEditBookingModal } from ".";
import { useEditDeleteModal } from "../EditDeleteModal";

const EditBooking = ({booking}) => {
    const {setShowModal} = useEditBookingModal()
    const {setShowEditDeleteModal} = useEditDeleteModal()
    const [startDate, setStartDate] = useState(moment(booking.startDate).utcOffset(19))
    const [endDate, setEndDate] = useState(moment(booking.endDate).utcOffset(19))
    const [focusedInput, setFocusedInput] = useState(null)
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch()

    const rangeDate = ({ startDate, endDate }) => {
        setStartDate(moment(startDate));
        setEndDate(moment(endDate))

    }

    useEffect(() => {
        const validate = []
        if (startDate._d === "Invalid Date") validate.push('Please select a start date.')
        if (endDate._d === "Invalid Date") validate.push('Please select an end date.')
        dispatch(getBookings())
        setErrors(validate)

    }, [dispatch, startDate, endDate])


    const rangeFocus = (focusedInput) => {
        setFocusedInput(focusedInput)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        if (errors.length === 0) {
            const bookingId = booking?.id
            const payload = {
                startDate: moment(startDate),
                endDate: moment(endDate)
            }

            return dispatch(editBooking(booking?.id, payload))
                .then(() => {
                    dispatch(getBookings())
                    setShowModal(false)
                    setShowEditDeleteModal(false)
                }).catch(
                    async (res) =>{
                        const data = await res.json();
                        if (data && data.errors) {
                            setErrors(data.errors)
                        }})
        }
    }

    const handleCancel = (e) => {
        e.preventDefault()
        setShowModal(false)
      }
      
    return (
        <form onSubmit={handleSubmit}>
            <div className="booking-date-picker">
             {errors.length > 0 && errors.map((error, idx) => (
          <li className="booking-error" key={idx}>{error}</li>
        ))}
                <div className="booking-body-container">
                <button onClick={handleCancel} className="cancel-form-button" ><i className="fa-solid fa-x"></i></button>

                <div className="booking-label">
                    <h3>Start Date:</h3>
                    <h3>End Date:</h3>
                </div>
            <DateRangePicker
                startDate={startDate} // momentPropTypes.momentObj or null,
                startDateId="qwerasdfzxcv" // PropTypes.string.isRequired,
                endDate={endDate} // momentPropTypes.momentObj or null,
                endDateId="xzcvasdfqwer" // PropTypes.string.isRequired,
                onDatesChange={rangeDate} // PropTypes.func.isRequired,
                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={rangeFocus} // PropTypes.func.isRequired,
                />
            </div>
            <div className="booking-button">
                <button className="createReviewButton">Submit Changes</button>
            </div>
                </div>

        </form>
    )
}


export default EditBooking;
