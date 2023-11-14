import RoomCard from '../components/Layout/Roomcard/RoomCard';
import Callendar from '../components/UI/Callendar';

import classes from './Rooms.module.css';

const Rooms = (props) => {
  return (
    <>
      <h1>Rooms</h1>
      <Callendar />
      <ul className={classes['rooms-list']}>
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </ul>
    </>
  );
};

export default Rooms;
