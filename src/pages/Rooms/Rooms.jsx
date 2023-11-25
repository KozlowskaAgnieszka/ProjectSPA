import { useFetch } from '../../hooks/useFetch.js';
import { fetchData } from '../../http.js';

import RoomCard from '../../components/Layout/Roomcard/RoomCard.jsx';
import Callendar from '../../components/UI/Callendar/Callendar.jsx';
import Error from '../Error/Error.jsx';

import classes from './Rooms.module.css';

const Rooms = () => {
  const {
    isLoading,
    fetchedData: rooms,
    error,
  } = useFetch(fetchData, 'rooms', []);

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
