import CartIcon from '../../Cart/CartIcon';

import classes from './HeaderCartButon.module.css';

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <CartIcon />
    </button>
  );
};
export default HeaderCartButton;
