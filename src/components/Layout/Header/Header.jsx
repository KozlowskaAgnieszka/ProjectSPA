import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Icon from '../../UI/Icon/Icon';
import Button from '../../UI/Button/Button';

import HomeIconImage from '../../../assets/icons/home.svg';
import Logo from '../../../assets/lotus.png';
import CartIconImage from '../../../assets/icons/cart.svg';

import classes from './Header.module.css';

const Header = () => {
  const rooms = useSelector((state) => state.cart.items.rooms);
  const treatments = useSelector((state) => state.cart.items.treatments);
  const items = [...rooms, ...treatments];

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <header className={classes.header}>
      <span className={classes.nav}>
        <NavLink to="/">
          <Icon image={HomeIconImage} alt="Home icon" />
        </NavLink>
        <NavLink className={classes.link} to="/rooms">
          Rooms
        </NavLink>
        <NavLink className={classes.link} to="/treatments">
          Treatments
        </NavLink>
      </span>
      <span className={classes.logo}>
        <NavLink to="/">
          <Button btnShadow="no-shadow">
            <img
              className={classes['logo-image']}
              src={Logo}
              alt="Lotus logo"
            />
            <div className={classes['logo-title']}>Lotus SPA</div>
          </Button>
        </NavLink>

      </span>
      <span className={classes.nav}>
        <NavLink to="/cart">
          <Icon image={CartIconImage} alt="Cart icon" />
          <p className={classes.badge}>{numberOfCartItems}</p>
        </NavLink>
      </span>
    </header>
  );
};

export default Header;
