import HeaderLink from './HeaderLink';
import Icon from './Icon';
import CartButton from './CartButton';

import classes from './Header.module.css';
import HomeIconImage from '../../assets/icons/home.svg';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <span className={classes.nav}>
        <Icon src={HomeIconImage} alt="Home icon" />
        <HeaderLink>Rooms</HeaderLink>
        <HeaderLink>Treatments</HeaderLink>
      </span>
      <span className={classes.nav}>
        <CartButton onClick={props.onShowCart} />
      </span>
    </header>
  );
};

export default Header;
