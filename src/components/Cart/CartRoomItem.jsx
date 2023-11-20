import classes from './CartRoomItem.module.css';
import Icon from '../UI/Icon';
import DeleteIconImage from '../../assets/icons/delete.svg';

const CartRoomItem = ({ days, name, price, onRemove }) => {
  const stayCheck = () => {
    if (days === 0) {
      return <span>Choose min 1 night...</span>;
    }

    if (days === 1) {
      return (
        <span>
          <strong>{days}</strong> day
        </span>
      );
    }

    return (
      <span>
        <strong>{days}</strong> days
      </span>
    );
  };

  return (
    <li className={classes['room-item']}>
      <div className={classes['room-details']}>
        <span>{name}</span>
        {stayCheck()}
        {days !== 0 ? <span>{price} $</span> : null}
      </div>
      <span>
        <button className={classes.button} onClick={onRemove}>
          <Icon image={DeleteIconImage} alt="Delete icon" />
        </button>
      </span>
    </li>
  );
};

export default CartRoomItem;
