import classes from './RoomCard.module.css';
import Button from '../../UI/Button';
import AddToCartButton from '../../Cart/AddToCartButton';

const RoomCard = ({ id, name, price, image }) => {
  return (
    <li className={classes.card}>
      <div className={classes['room-photo']}>
        <img src={`http://localhost:3001/${image.src}`} alt={image.alt} />
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
          <AddToCartButton id={id} name={name} price={price} type="room" />
        </div>
      </div>
    </li>
  );
};

export default RoomCard;
