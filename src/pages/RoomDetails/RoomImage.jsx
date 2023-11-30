import classes from './RoomImage.module.css';

const RoomImage = ({ image }) => {
  return (
    <div>
      <img className={classes['room-photo']} src={`${image.url}${image.src}`} alt={image.alt} />
    </div>
  );
};

export default RoomImage;
