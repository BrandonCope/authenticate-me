import React, { useState } from "react";
import moment from "moment";
import { DayPickerRangeController, SingleDatePicker, DateRangePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css'
import { useDispatch } from "react-redux";
import { createBooking } from "../../store/bookingReducer";

const Booking = ({spot, user}) => {
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [focusedInput, setFocusedInput] = useState()
    const dispatch = useDispatch()

    const rangeDate = ({ startDate, endDate }) => {
        setStartDate(moment(startDate));
        setEndDate(moment(endDate))
    }

    const rangeFocus = (focusedInput) => {
        setFocusedInput(focusedInput)
    }

    const reset = () => {
        setStartDate("");
        setEndDate("");
    }

    const handleSubmit = (e) => {

        const buildBooking = {
            spotId: spot?.id,
            userId: user?.id,
            startDate,
            endDate
        }
        dispatch(createBooking(buildBooking))
        reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <DateRangePicker
                startDate={startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={rangeDate} // PropTypes.func.isRequired,
                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={rangeFocus} // PropTypes.func.isRequired,
                />
            </div>
            <div>
                <button>Book</button>
            </div>
        </form>
    )
}


export default Booking;
