import HeaderLink from './HeaderLink';
import HeaderIcon from './HeaderIcon';
import HeaderLogo from './HeaderLogo';
import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';
import HomeIconImage from '../../../assets/icons/home.svg';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <span className={classes.nav}>
        <HeaderIcon src={HomeIconImage} alt="Home icon" />
        <HeaderLink>Rooms</HeaderLink>
        <HeaderLink>Treatments</HeaderLink>
      </span>
      <span className={classes.logo}>
        <HeaderLogo />
      </span>
      <span className={classes.nav}>
        <HeaderCartButton onClick={props.onShowCart} />
      </span>
    </header>
  );
};

export default Header;
