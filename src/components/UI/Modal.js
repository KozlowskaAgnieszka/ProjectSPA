import { Fragment } from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';

const portalOverlay = document.getElementById('overlays');

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const Module = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={props.onClose} />, portalOverlay)}
    </Fragment>
  );
};

export default Module;
