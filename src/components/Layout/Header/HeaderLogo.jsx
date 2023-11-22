import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/lotus.png';
import classes from './HeaderLogo.module.css';

const HeaderLogo = ({ route }) => {
  return (
    <NavLink to={route}>
      <button className={classes.button}>
        <img className={classes.logo} src={Logo} alt="Lotus logo" />
        <div className={classes.title}>Lotus SPA</div>
      </button>
    </NavLink>
  );
};

export default HeaderLogo;
