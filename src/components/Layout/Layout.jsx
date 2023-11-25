import Header from './Header/Header';

import classes from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={classes['background-image']}>
        <div className={classes.overlay}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
