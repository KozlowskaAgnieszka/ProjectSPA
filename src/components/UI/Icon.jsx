import classes from './Icon.module.css';

const Icon = ({ image, alt }) => {
  return <img src={image} alt={alt} className={classes['icon']} />;
};

export default Icon;
