import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';
import classes from './Callendar.module.css';

const Callendar = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <DatePicker
      dateFormat="dd MMM yy"
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      minDate={new Date()}
      maxDate={addDays(new Date(), 365)}
      className={classes['callendar-input']}
      calendarClassName={classes.callendar}
      dayClassName={(date) => (new Date() < date ? classes.day : classes['days-disabled'])}
      popperPlacement="top"
      monthsShown={2}
      withPortal
      fixedHeight
      placeholderText="Choose your dates..."
      calendarStartDay={1}
    />
  );
};

export default Callendar;
