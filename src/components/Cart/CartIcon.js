import classes from './CartIcon.module.css';
import CartIconImage from '../../assets/icons/cart.svg';

const CartIcon = (props) => {
  return (
    <img src={CartIconImage} alt="Cart icon" className={classes['cart-icon']} />
  );
};

export default CartIcon;
