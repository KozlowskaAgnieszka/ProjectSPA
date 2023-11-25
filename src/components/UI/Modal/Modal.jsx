import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { cartActions } from '../../../store/cart';
import { useDispatch } from 'react-redux';

import classes from './Modal.module.css';

const portalOverlay = document.getElementById('overlays');

const Backdrop = () => {
  const dispatch = useDispatch();
  const hideCartHandler = () => {
    dispatch(cartActions.showCart(false));
  };

  return <div className={classes.backdrop} onClick={hideCartHandler}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div>{children}</div>
    </div>
  );
};

const Modal = ({ children }) => {
  return (
    <Fragment>
      {createPortal(<Backdrop />, portalOverlay)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalOverlay)}
    </Fragment>
  );
};

export default Modal;
