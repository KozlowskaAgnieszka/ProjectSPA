import classes from './CartRoomItem.module.css';
import Icon from '../UI/Icon';
import DeleteIconImage from '../../assets/icons/delete.svg';

const CartRoomItem = (props) => {
  return (
    <li className={classes['room-item']}>
      <div className={classes['room-details']}>
        <span>{props.name}</span>
        <span>
          <strong>3</strong> days
        </span>
        <span>{props.price} $</span>
      </div>
      <span>
        <Icon image={DeleteIconImage} alt='Delete icon'/>
      </span>
    </li>
  );
};

export default CartRoomItem;
