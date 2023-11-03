import HeaderLink from './HeaderLink';

import classes from './Header.module.css';
import heroImage from '../../assets/heroImage.jpg';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <HeaderLink>Rooms</HeaderLink>
      <HeaderLink>Treatments</HeaderLink>
    </header>
  );
};

export default Header;
