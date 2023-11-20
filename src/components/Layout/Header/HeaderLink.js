import classes from './HeaderLink.module.css';

const HeaderLink = ({ onClick, type, children }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes[type]}>{children}</span>
    </button>
  );
};

export default HeaderLink;
