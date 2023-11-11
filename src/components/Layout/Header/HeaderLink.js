import classes from './HeaderLink.module.css';

const HeaderLink = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes[props.type]}>{props.children}</span> 
    </button>
  );
};

export default HeaderLink;
