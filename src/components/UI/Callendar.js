import { useState } from 'react';
import { cartActions } from '../../store/index';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';
import classes from './Callendar.module.css';

const Callendar = (props) => {
  const dispatch = useDispatch();
  const days = useSelector((state) => state.cart.days);

  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    const startDate = start ? new Date(start).toString() : null;
    const endDate = end ? new Date(end).toString() : null;
    const numberOfDays = (end - start) / (1000 * 60 * 60 * 24);

    dispatch(
      cartActions.getDate({
        start: startDate,
        end: endDate,
        days: numberOfDays,
      })
    );
  };

  const callendarStyle = `${classes['callendar-input']} ${
    classes[props.calStyle]
  }`;

  return (
    <DatePicker
      allowSameDay={false}
      dateFormat="dd MMM yy"
      selected={days.start ? new Date(days.start) : null}
      onChange={onChange}
      startDate={days.start ? new Date(days.start) : null}
      endDate={days.end ? new Date(days.end) : null}
      selectsRange
      minDate={new Date()}
      maxDate={addDays(new Date(), 365)}
      className={callendarStyle}
      calendarClassName={classes.callendar}
      dayClassName={(date) =>
        new Date() < date ? classes.day : classes['days-disabled']
      }
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
