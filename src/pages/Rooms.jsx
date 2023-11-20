import { useState, useEffect } from 'react';

import RoomCard from '../components/Layout/Roomcard/RoomCard';
import Callendar from '../components/UI/Callendar';

import classes from './Rooms.module.css';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/rooms')
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        setRooms(resData.rooms);
      });
  }, []);

  return (
    <section className={classes['main-section']}>
      <h1>Rooms</h1>
      <div className={classes.stay}>
        Your stay: <Callendar callStyle="light" btnStyle="btn-light" />
      </div>
      <ul className={classes['rooms-list']}>
        {rooms.map((room) => {
          return (
            <RoomCard
              id={room.id}
              name={room.name}
              price={room.price}
              image={room.image}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Rooms;
