import classes from './CartRoomItem.module.css';
import Icon from '../UI/Icon';
import DeleteIconImage from '../../assets/icons/delete.svg';

const CartRoomItem = (props) => {
  const stayCheck = () => {
    if (props.days === 0) {
      return <span>Choose min 1 night...</span>;
    }

    if (props.days === 1) {
      return (
        <span>
          <strong>{props.days}</strong> day
        </span>
      );
    }

    return (
      <span>
        <strong>{props.days}</strong> days
      </span>
    );
  };

  return (
    <li className={classes['room-item']}>
      <div className={classes['room-details']}>
        <span>{props.name}</span>
        {stayCheck()}
        {props.days !== 0 ? <span>{props.price} $</span> : null}
      </div>
      <span>
        <button className={classes.button} onClick={props.onRemove}>
          <Icon image={DeleteIconImage} alt="Delete icon" />
        </button>
      </span>
    </li>
  );
};

export default CartRoomItem;
