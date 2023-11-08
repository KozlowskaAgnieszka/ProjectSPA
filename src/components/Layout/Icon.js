import classes from './Icon.module.css';

const Icon = (props) => {
  return <img src={props.src} alt={props.alt} className={classes.icon} />;
};

export default Icon;
