import Logo from '../assets/lotus.png';

import classes from './HomePage.module.css';

const HomePage = (props) => {
  return (
    <>
      <section>
        <img src={Logo} alt="Lotus logo" />
        <h1>Lotus SPA</h1>
      </section>
      <div>Callendar</div>
      <div>Book online</div>
      <div>Log in</div>
    </>
  );
};

export default HomePage;
