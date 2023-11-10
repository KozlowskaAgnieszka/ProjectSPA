import Modal from '../UI/Modal';

import classes from './Cart.module.css';

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <h1>Cart</h1>
      <h2>Rooms</h2>
      <div>Nothing selected yet...</div>
      <h2>Treatments</h2>
      <div>Nothing selected yet...</div>
    </Modal>
  );
};

export default Cart;
