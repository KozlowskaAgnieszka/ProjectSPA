import classes from './Button.module.css';

const Button = (props) => {
  const buttonStyle = `${classes.button} ${classes[props.btnStyle]}`;

  return <button className={buttonStyle}>{props.children}</button>;
};

export default Button;
