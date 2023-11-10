import { Fragment } from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';

const portalOverlay = document.getElementById('overlays');

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={props.onClose} />, portalOverlay)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalOverlay
      )}
    </Fragment>
  );
};

export default Modal;
