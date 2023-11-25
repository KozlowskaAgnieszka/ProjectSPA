import classes from './Button.module.css';

const Button = ({ btnStyle, btnSize, btnShadow, onClick, children }) => {
  const buttonsStyles = [btnStyle, btnSize, btnShadow]
  const buttonsClasses = buttonsStyles.map((style) => classes[style] )
  const buttonStyle = buttonsClasses.join(' ')


  return (
    <button className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
