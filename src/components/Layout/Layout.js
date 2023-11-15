import { useState } from 'react';

import Header from './Header/Header';
import Cart from '../Cart/Cart';

import classes from './Layout.module.css'

const Layout = (props) => {
  console.log(props.children)
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main className={classes[props.background]}>{props.children}</main>
    </>
  );
};

export default Layout;
