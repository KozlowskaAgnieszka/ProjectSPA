import Logo from '../assets/lotus.png';

import Button from '../components/UI/Button';

import classes from './HomePage.module.css';

const HomePage = (props) => {
  return (
    <>
      <section className={classes.logo}>
        <img src={Logo} alt="Lotus logo" className={classes.lotus} />
        <h1 className={classes['logo-title']}>
          Lotus
          <br />
          SPA
        </h1>
      </section>
      <section className={classes.booking}>
        <div>Callendar</div>
        <Button style="green">Book online</Button>
        <Button style="grey">Log in</Button>
      </section>
    </>
  );
};

export default HomePage;
