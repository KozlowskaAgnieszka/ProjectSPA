import classes from './HeaderLinks.module.css';

const HeaderLink = (props) => {
  return <button className={classes.button}>{props.children}</button>;
};

export default HeaderLink;
