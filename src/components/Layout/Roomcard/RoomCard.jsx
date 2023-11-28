import { Link } from 'react-router-dom';

import { useAddToCart } from '../../../hooks/useAddToCart';

import Button from '../../UI/Button/Button';
import classes from './RoomCard.module.css';

const RoomCard = ({ id, name, price, image, index }) => {
  const addToCartHandler = useAddToCart(id, name, price, 'room');

  return (
    <li key={id} className={classes.card}>
      <div className={classes['room-photo']}>
        <img src={`http://localhost:3001/${image.src}`} alt={image.alt} />
      </div>
      <h2 className={classes['room-name']}>{name}</h2>
      <div className={classes['room-footer']}>
        <p className={classes['room-footer-price']}>
          Price: <strong>{price} $</strong>
        </p>
        <div className={classes['room-footer-buttons']}>
          <Link to={`/rooms/${index}`}>
            <Button btnStyle="grey" btnSize="small">
              Read more
            </Button>
          </Link>

          <Button
            onClick={() => {
              addToCartHandler();
            }}
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
