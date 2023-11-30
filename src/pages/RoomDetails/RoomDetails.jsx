import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch.js';
import { useAddToCart } from '../../hooks/useAddToCart';
import { fetchData } from '../../http.js';

import Loader from '../../components/Layout/Loader/Loader.jsx';
import ItemDetails from '../../components/Layout/ItemDetails/ItemDetails.jsx';
import Button from '../../components/UI/Button/Button.jsx';
import Icon from '../../components/UI/Icon/Icon.jsx';
import Callendar from '../../components/UI/Callendar/Callendar.jsx';
import BackIconImage from '../../assets/icons/back.svg';
import classes from './RoomDetails.module.css';

const RoomDetails = () => {
  const { roomId } = useParams();
  const [image, setImage] = useState({});
  const [room, setRoom] = useState([]);

  const { isLoading, isEmpty, fetchedData, error } = useFetch(
    fetchData,
    `rooms/${roomId}`,
    []
  );

  if (error) {
    return <Error title="An error occured!" message={error.message} />;
  }

  useEffect(() => {
    if (!isLoading) {
      setRoom(fetchedData);
      setImage({
        src: `http://localhost:3001/${fetchedData.image.src}`,
        alt: fetchedData.image.alt,
      });
    }
  }, [isLoading, fetchedData]);

  const addToCartHandler = useAddToCart(room.id, room.name, room.price, 'room');

  return (
    <div className={classes.card}>
      <Loader
        isEmpty={isEmpty}
        isLoading={isLoading}
        label="Room is not available"
      >
        <div>
          <img
            className={classes['room-photo']}
            src={image.src}
            alt={image.alt}
          />
        </div>
        <div className={classes['room-description']}>
          <h1>{room.name}</h1>
          <ItemDetails
            price={room.price}
            guests={room.guests}
            beds={room.beds}
          />
          <article className={classes['room-text']}>{room.description}</article>
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
      </Loader>
    </div>
  );
};

export default RoomDetails;
