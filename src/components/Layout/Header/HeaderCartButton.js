import { cartActions } from '../../../store/cart';
import { useDispatch, useSelector } from 'react-redux';

import Icon from '../../UI/Icon';
import CartIconImage from '../../../assets/icons/cart.svg';
import classes from './HeaderCartButon.module.css';

const HeaderCartButton = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const showCartHandler = () => {
    dispatch(cartActions.showCart(true));
  };

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <Icon image={CartIconImage} alt="Cart Icon" />
      <p className={classes.badge}>{numberOfCartItems}</p>
    </button>
  );
};
export default HeaderCartButton;
