import classes from './HeaderNav.module.css';

const HeaderNav = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes[props.type]}>{props.children}</span> 
    </button>
  );
};

export default HeaderNav;
