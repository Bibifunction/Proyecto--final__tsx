import { useState } from "react"
import DatePicker from "react-datepicker"
import { registerLocale } from "react-datepicker"
import es from 'date-fns/locale/es'
import "react-datepicker/dist/react-datepicker.css"
import CalendarIcon from "../../assets/calendar.svg"
import "./DateFilterSection.css"

// Register Spanish locale
registerLocale('es', es)

const DateFilterSection = () => {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    setStartDate(date)
  }

  // Toggle calendar visibility
  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen)
  }

  // Handle set day button
  const handleSetDay = () => {
    if (startDate) {
      // Format the date as DD/M/YYYY to match your screenshot
      const day = startDate.getDate()
      const month = startDate.getMonth() + 1
      const year = startDate.getFullYear()
      setSelectedDate(`${day}/${month}/${year}`)
      setIsCalendarOpen(false)
    }
  }

  // Handle cancel button
  const handleCancel = () => {
    setIsCalendarOpen(false)
  }

  return (
    <div className="filter">
      <div className="filter__header" onClick={toggleCalendar}>
        <h3 className="filter__title">Date</h3>
        <img src={CalendarIcon || "/placeholder.svg"} alt="Calendario" className="filter__calendar" />
      </div>

      {selectedDate && (
        <div className="filter__content filter__content--open">
          <div className="filter__selected-date">Selected date: {selectedDate}</div>
        </div>
      )}

      {isCalendarOpen && (
        <div className="calendar-modal">
          <div className="calendar-container">
            <DatePicker
              selected={startDate}
              onChange={handleDateSelect}
              inline
              locale="es"
              showMonthDropdown={false}
              showYearDropdown={false}
              dateFormat="MMMM yyyy"
              renderCustomHeader={({
                date,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div className="custom-header">
                  <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className="prev-month-button">
                    {"<"}
                  </button>
                  <div className="month-year">
                    {date.toLocaleString("es", { month: "long" })} {date.getFullYear()}
                  </div>
                  <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} className="next-month-button">
                    {">"}
                  </button>
                </div>
              )}
            />
            <div className="calendar-buttons">
              <button className="calendar-cancel-button" onClick={handleCancel}>
                Cancel
              </button>
              <button className="calendar-set-button" onClick={handleSetDay}>
                Set day
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="filter__separator"></div>
    </div>
  )
}

export default DateFilterSection