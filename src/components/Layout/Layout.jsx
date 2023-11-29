import { useLocation } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import classes from './Layout.module.css';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  const whitePaths = ['/rooms', '/treatments'];

  const whitePathCheck = whitePaths.includes(pathname);

  let overlay = 'transparent-overlay';
  if (whitePathCheck) {
    overlay = 'white-overlay';
  }
  
  return (
    <>
      <Header />
      <main className={classes['image-background']}>
        <section className={classes[overlay]}>{children}</section>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
