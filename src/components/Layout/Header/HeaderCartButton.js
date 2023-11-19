import { useSelector } from 'react-redux';

import Icon from '../../UI/Icon';
import CartIconImage from '../../../assets/icons/cart.svg';
import classes from './HeaderCartButon.module.css';

const HeaderCartButton = (props) => {
  const items = useSelector((state) => state.cart.items);

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <Icon image={CartIconImage} alt='Cart Icon'/>
      <p className={classes.badge}>{numberOfCartItems}</p>
    </button>
  );
};
export default HeaderCartButton;
