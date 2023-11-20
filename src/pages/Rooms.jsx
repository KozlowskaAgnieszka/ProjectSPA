import { useState, useEffect } from 'react';

import RoomCard from '../components/Layout/Roomcard/RoomCard';
import Callendar from '../components/UI/Callendar';
import Error from './Error';
import { fetchAvailableRooms } from '../http';

import classes from './Rooms.module.css';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchRooms() {
      setIsLoading(true);

      try {
        const rooms = await fetchAvailableRooms();

        setRooms(rooms);
      } catch (error) {
        setError({
          message:
            error.message || 'Could not load rooms, please try again later',
        });
      }

      setIsLoading(false);
    }

    fetchRooms();
  }, []);

  if (error) {
    return <Error title="An error occured!" message={error.message} />;
  }

  return (
    <section className={classes['main-section']}>
      <h1>Rooms</h1>
      <div className={classes.stay}>
        Your stay: <Callendar callStyle="light" btnStyle="btn-light" />
      </div>
      {isLoading && (
        <p className={classes['fallback-text']}>Rooms list is loading...</p>
      )}
      {!isLoading && rooms.length === 0 && (
        <p className={classes['fallback-text']}>No rooms available...</p>
      )}
      {!isLoading && rooms.length > 0 && (
        <ul className={classes['rooms-list']}>
          {rooms.map((room) => {
            return (
              <RoomCard
                key={room.id}
                id={room.id}
                name={room.name}
                price={room.price}
                image={room.image}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Rooms;
