import Logo from '../../../assets/lotus.png';
import classes from './HeaderLogo.module.css';

const HeaderLogo = () => {
  return (
    <button className={classes.button}>
      <img className={classes.logo} src={Logo} alt="Lotus logo" />
      <div className={classes.title}>Lotus SPA</div>
    </button>
  );
};

export default HeaderLogo;
