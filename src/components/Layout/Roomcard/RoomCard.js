import classes from './RoomCard.module.css';
import roomPhoto from '../../../assets/photos/room-1.jpg';
import Button from '../../UI/Button';

const RoomCard = (props) => {
  return (
    <li className={classes.card}>
      <div className={classes['room-photo']}>
        <img src={roomPhoto} alt="Room name" />
      </div>
      <h2 className={classes['room-name']}>Room name</h2>
      <div className={classes['room-footer']}>
        <p className={classes['room-footer-price']}>
          Price: <strong>150 $</strong>
        </p>
        <div className={classes['room-footer-buttons']}>
          <Button btnStyle="grey" btnSize="small">
            Read more
          </Button>
          <Button btnStyle="green" btnSize="small">
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
};

export default RoomCard;
