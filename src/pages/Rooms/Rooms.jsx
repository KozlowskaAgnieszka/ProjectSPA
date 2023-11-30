import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch.js';
import { fetchData } from '../../http.js';

import Loader from '../../components/Layout/Loader/Loader.jsx';
import RoomCard from '../../components/Layout/Roomcard/RoomCard.jsx';
import Callendar from '../../components/UI/Callendar/Callendar.jsx';
import Error from '../Error/Error.jsx';

import classes from './Rooms.module.css';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  const { isLoading, isEmpty, fetchedData, error } = useFetch(
    fetchData,
    'rooms',
    []
  );

  if (error) {
    return <Error title="An error occured!" message={error.message} />;
  }

  useEffect(() => {
    if (!isLoading) {
      setRooms(fetchedData);
    }
  }, [isLoading, fetchedData]);

  const roomIndex = (id) => rooms.findIndex((room) => room.id === id);

  return (
    <>
      <h1>Rooms</h1>
      <div className={classes.stay}>
        Your stay: <Callendar callStyle="light" btnStyle="btn-light" />
      </div>
      <Loader
        isEmpty={isEmpty}
        isLoading={isLoading}
        label="No rooms available"
      >
        <ul className={classes['rooms-list']}>
          {rooms.map((room) => {
            return (
              <RoomCard
                key={room.id}
                id={room.id}
                name={room.name}
                price={room.price}
                image={room.image}
                index={roomIndex(room.id)}
              />
            );
          })}
        </ul>
      </Loader>
    </>
  );
};

export default Rooms;
