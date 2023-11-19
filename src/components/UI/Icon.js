import classes from './Icon.module.css';


const Icon = (props) => {
  return (
    <img src={props.image} alt={props.alt} className={classes['icon']} />
  );
};

export default Icon;
