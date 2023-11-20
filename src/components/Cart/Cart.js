import { cartActions } from '../../store/index';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartRoomItem from './CartRoomItem';
import Callendar from '../UI/Callendar';

const Cart = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const days = useSelector((state) => state.cart.days.days);

  const removeItemFromCartHandler = (id) => {
    dispatch(cartActions.deleteItem(id));
  };

  const cartItems = (
    <ul className={classes['room-list']}>
      {items.map((item) => {
        return (
          <CartRoomItem
            key={item.id}
            name={item.name}
            days={days}
            onRemove={removeItemFromCartHandler.bind(null, item.id)}
            price={(item.price * days).toFixed(2)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal >
      <h1>Cart</h1>
      <div className={classes.stay}>
        Your stay: <Callendar calStyle="light" />
      </div>
      <h2>Rooms</h2>
      {items.length !== 0 ? (
        cartItems
      ) : (
        <div to="/rooms" className={classes.placeholder}>
          Select a room...
        </div>
      )}

      <h2>Treatments</h2>
      <div>Nothing selected yet...</div>
    </Modal>
  );
};

export default Cart;
