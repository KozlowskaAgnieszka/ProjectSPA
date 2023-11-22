import { NavLink } from 'react-router-dom';

import HeaderLink from './HeaderLink';
import Icon from '../../UI/Icon';
import HeaderLogo from './HeaderLogo';
import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';
import HomeIconImage from '../../../assets/icons/home.svg';

const Header = () => {
  return (
    <header className={classes.header}>
      <span className={classes.nav}>
        <NavLink to="/">
          <Icon image={HomeIconImage} alt="Home icon" />
        </NavLink>
        <HeaderLink route="/rooms">Rooms</HeaderLink>
        <HeaderLink route="/treatments">Treatments</HeaderLink>
      </span>
      <span className={classes.logo}>
        <HeaderLogo route="/" />
      </span>
      <span className={classes.nav}>
        <HeaderCartButton />
      </span>
    </header>
  );
};

export default Header;
