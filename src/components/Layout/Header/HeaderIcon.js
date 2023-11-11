import classes from './HeaderIcon.module.css';

const HeaderIcon = (props) => {
  return <img src={props.src} alt={props.alt} className={classes.icon} />;
};

export default HeaderIcon;
