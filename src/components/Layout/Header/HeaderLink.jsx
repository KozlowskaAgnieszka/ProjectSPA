import { NavLink } from 'react-router-dom';
import classes from './HeaderLink.module.css';

const HeaderLink = ({ route, children }) => {
  return (
    <NavLink to={route}>
      <button className={classes.button}>
        <span>{children}</span>
      </button>
    </NavLink>
  );
};

export default HeaderLink;
