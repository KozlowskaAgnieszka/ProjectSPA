import HeaderLink from './HeaderLink';
import Icon from './Icon';
import CartIcon from '../Cart/CartIcon';

import classes from './Header.module.css';
import HomeIconImage from '../../assets/icons/home.svg';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <span className={classes.nav}>
        <Icon src={HomeIconImage} alt="Home icon"/>
        <HeaderLink>Rooms</HeaderLink>
        <HeaderLink>Treatments</HeaderLink>
      </span>
      <span className={classes.nav}>
        <CartIcon/>
      </span>
    </header>
  );
};

export default Header;
