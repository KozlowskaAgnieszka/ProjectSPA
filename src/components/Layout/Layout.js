import { useSelector } from 'react-redux';

import Header from './Header/Header';
import Cart from '../Cart/Cart';

import classes from './Layout.module.css';

const Layout = ({ background, children }) => {
  const cartIsShown = useSelector((state) => state.cart.cartIsShown);

  return (
    <>
      {cartIsShown && <Cart />}
      <Header />
      <main className={classes[background]}>{children}</main>
    </>
  );
};

export default Layout;
