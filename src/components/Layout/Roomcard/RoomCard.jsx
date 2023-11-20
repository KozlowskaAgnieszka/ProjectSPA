import { cartActions } from '../../../store/cart';
import { useDispatch } from 'react-redux';

import classes from './RoomCard.module.css';
import roomPhoto from '../../../assets/room-1.jpg';
import Button from '../../UI/Button';

const RoomCard = ({ id, name, price, image }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (id, name, price) => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        amount: 1,
        price,
      })
    );
  };

  return (
    <li className={classes.card}>
      <div className={classes['room-photo']}>
        <img src={roomPhoto} alt={image.alt} />
      </div>
      <h2 className={classes['room-name']}>{name}</h2>
      <div className={classes['room-footer']}>
        <p className={classes['room-footer-price']}>
          Price: <strong>{price} $</strong>
        </p>
        <div className={classes['room-footer-buttons']}>
          <Button btnStyle="grey" btnSize="small">
            Read more
          </Button>
          <Button
            onClick={() => addToCartHandler(id, name, price)}
            btnStyle="green"
            btnSize="small"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
};

export default RoomCard;
