import { useSelector } from 'react-redux';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartRoomItem from './CartRoomItem';

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  console.log(items)

  const cartItems = (
    <ul className={classes['room-list']}>
      {items.map((item) => {
        return (
          <CartRoomItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={(item.price * 1).toFixed(2)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <h1>Cart</h1>
      <h2>Rooms</h2>
      {cartItems}
      <h2>Treatments</h2>
      <div>Nothing selected yet...</div>
    </Modal>
  );
};

export default Cart;
