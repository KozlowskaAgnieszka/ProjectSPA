import { NavLink } from 'react-router-dom';

import HeaderLink from './HeaderLink';
import Icon from '../../UI/Icon';
import HeaderLogo from './HeaderLogo';
import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';
import HomeIconImage from '../../../assets/icons/home.svg';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <span className={classes.nav}>
        <NavLink to="/">
          <Icon image={HomeIconImage} alt="Home icon" />
        </NavLink>
        <NavLink to="/rooms">
          <HeaderLink>Rooms</HeaderLink>
        </NavLink>
        <HeaderLink>Treatments</HeaderLink>
      </span>
      <span className={classes.logo}>
        <NavLink to="/">
          <HeaderLogo />
        </NavLink>
      </span>
      <span className={classes.nav}>
        <HeaderCartButton onClick={props.onShowCart} />
      </span>
    </header>
  );
};

export default Header;
