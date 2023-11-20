import classes from './Button.module.css';

const Button = ({ btnStyle, btnSize, onClick, children }) => {
  const buttonStyle = `${classes.button} ${classes[btnStyle]} ${classes[btnSize]}`;

  return (
    <button className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
