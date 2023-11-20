import RoomCard from '../components/Layout/Roomcard/RoomCard';
import Callendar from '../components/UI/Callendar';

import classes from './Rooms.module.css';

const Rooms = () => {

  return (
    <section className={classes['main-section']}>
      <h1>Rooms</h1>
      <div className={classes.stay}>Your stay: <Callendar calStyle="light"/></div>
      <ul className={classes['rooms-list']}>
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </ul>
    </ section>
  );
};

export default Rooms;
