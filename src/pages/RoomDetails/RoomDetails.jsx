import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
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
import RoomImage from './RoomImage.jsx';

const RoomDetails = () => {
  const { roomId } = useParams();

  const {
    isLoading,
    isEmpty,
    fetchedData: room,
    image,
    setImage,
    error,
  } = useFetch(fetchData, `rooms/${roomId}`, []);

  if (error) {
    return <Error title="An error occured!" message={error.message} />;
  }

  useEffect(() => {
    if (!isLoading) {
      setImage({ url: 'http://localhost:3001/', ...room.image });
    }
  }, [isLoading]);

  const addToCartHandler = useAddToCart(room.id, room.name, room.price, 'room');

  return (
    <div className={classes.card}>
      <Loader
        isEmpty={isEmpty}
        isLoading={isLoading}
        label="Room is not available"
      >
        <RoomImage image={image} />

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
