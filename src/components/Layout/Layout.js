import { useState } from 'react';

import Header from './Header/Header';
import Cart from '../Cart/Cart';

const Layout = ({ children }) => {
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
      <main>{children}</main>
    </>
  );
};

export default Layout;
