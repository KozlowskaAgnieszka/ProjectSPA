import HeaderNav from './HeaderNav';

import classes from './Header.module.css';
import home from '../../assets/home.svg';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <HeaderNav type="icon">
        <img src={home} alt="Home icon" />
      </HeaderNav>
      <HeaderNav>Rooms</HeaderNav>
      <HeaderNav>Treatments</HeaderNav>
    </header>
  );
};

export default Header;
