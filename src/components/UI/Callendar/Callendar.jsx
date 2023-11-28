import { cartActions } from '../../../store/cart';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { addDays, subDays, differenceInDays } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';
import classes from './Callendar.module.css';

const Callendar = ({ callStyle, btnStyle, callSize }) => {
  const dispatch = useDispatch();
  const days = useSelector((state) => state.cart.days);

  const onChange = (dates) => {
    const [start, end] = dates;
    const startDate = start ? new Date(start).toString() : null;
    const endDate = end ? new Date(end).toString() : null;
    const numberOfDays = differenceInDays(end, start);
    const minDate = start
      ? addDays(new Date(start), 1).toString()
      : new Date().toString();

    dispatch(
      cartActions.getDate({
        start: startDate,
        end: endDate,
        days: numberOfDays,
        minDate,
      })
    );
  };

  const callendarStyle = `${classes['callendar-input']} ${classes[callStyle]} ${classes[callSize]}`;
  const clearButtonStyle = `${classes['clear-button']} ${classes[btnStyle]}`;

  return (
    <DatePicker
      allowSameDay={false}
      dateFormat="dd MMM yy"
      selected={days.start ? new Date(days.start) : null}
      onChange={onChange}
      startDate={days.start ? new Date(days.start) : null}
      endDate={days.end ? new Date(days.end) : null}
      selectsRange
      minDate={new Date(days.minDate)}
      maxDate={addDays(new Date(), 365)}
      className={callendarStyle}
      calendarClassName={classes.callendar}
      dayClassName={(date) =>
        subDays(new Date(days.minDate), 1) < date
          ? classes.day
          : classes['days-disabled']
      }
      popperPlacement="top"
      monthsShown={2}
      withPortal
      fixedHeight
      placeholderText="Choose your dates..."
      calendarStartDay={1}
      isClearable
      clearButtonClassName={clearButtonStyle}
    />
  );
};

export default Callendar;
