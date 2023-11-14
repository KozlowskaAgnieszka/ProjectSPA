import classes from './Button.module.css';

const Button = (props) => {
  const buttonStyle = `${classes.button} ${classes[props.btnStyle]} ${classes[props.btnSize]}`;

  return (
    <button className={buttonStyle} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
