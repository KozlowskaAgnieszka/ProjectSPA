import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch.js';
import { useAddToCart } from '../../hooks/useAddToCart';
import { fetchRoom } from '../../http.js';

import Button from '../../components/UI/Button/Button';
import Icon from '../../components/UI/Icon/Icon.jsx';
import Callendar from '../../components/UI/Callendar/Callendar';
import BackIconImage from '../../assets/icons/back.svg';
import classes from './RoomDetails.module.css';

const RoomDetails = () => {
  const { roomId } = useParams();
  

  const {
    isLoading,
    fetchedData: room,
    error,
  } = useFetch(fetchRoom, roomId, {});

  if (error) {
    return <Error title="An error occured!" message={error.message} />;
  }

  const addToCartHandler = useAddToCart(room.id, room.name, room.price, 'room');

  return (
    <section className={classes['main-section']}>
      <div className={classes.card}>
        {isLoading && (
          <p className={classes['fallback-text']}>Room is loading...</p>
        )}
        {!isLoading && Object.keys(room).length === 0 && (
          <p className={classes['fallback-text']}>No room available...</p>
        )}
        {!isLoading && Object.keys(room).length > 0 && (
          <>
            <div>
              <img
                className={classes['room-photo']}
                src={`http://localhost:3001/${room.image.src}`}
                alt={room.image.alt}
              />
            </div>
            <div className={classes['room-description']}>
              <h1>{room.name}</h1>
              <ul className={classes['room-details']}>
                <li>
                  Price: <strong>{room.price}</strong>
                </li>
                <li>
                  Guests: <strong>{room.guests}</strong>
                </li>
                <li>
                  Beds: <strong>{room.beds}</strong>
                </li>
              </ul>
              <p className={classes['room-text']}>{room.description}</p>
              <div className={classes['room-footer']}>
                <Link to="/rooms">
                  <Icon image={BackIconImage} alt="Back Icon" />
                </Link>

                <div className={classes.stay}>
                  <p>Your stay: </p>
                  <Callendar
                    callSize="small"
                    callStyle="light"
                    btnStyle="btn-light"
                  />
                </div>
                <Button
                  onClick={() => {
                    addToCartHandler();
                  }}
                  btnStyle="green"
                  btnSize="x-small"
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default RoomDetails;
