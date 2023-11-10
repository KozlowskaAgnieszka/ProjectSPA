import CartIcon from '../Cart/CartIcon';

import classes from './CartButon.module.css';

const CartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <CartIcon />
    </button>
  );
};
export default CartButton;
