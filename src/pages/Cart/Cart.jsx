import { cartActions } from '../../store/cart';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Cart.module.css';
import CartItem from '../../components/Layout/CartItem/CartItem';
import Callendar from '../../components/UI/Callendar/Callendar';

const Cart = (props) => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.cart.items.rooms);
  const treatments = useSelector((state) => state.cart.items.treatments);
  const days = useSelector((state) => state.cart.days.days);

  const removeItemFromCartHandler = (id, type) => {
    dispatch(cartActions.deleteItem([id, type]));
  };

  const cartRoomItems = (
    <ul className={classes['items-list']}>
      {rooms.map((room) => {
        return (
          <CartItem
            type={room.type}
            key={room.id}
            name={room.name}
            days={days}
            onRemove={removeItemFromCartHandler.bind(null, room.id, room.type)}
            price={(room.price * days).toFixed(2)}
          />
        );
      })}
    </ul>
  );

  const cartTreatmentsItems = (
    <ul className={classes['items-list']}>
      {treatments.map((treatment) => {
        return (
          <CartItem
            type={treatment.type}
            key={treatment.id}
            name={treatment.name}
            amount={treatment.amount}
            onRemove={removeItemFromCartHandler.bind(
              null,
              treatment.id,
              treatment.type
            )}
            price={(treatment.price * treatment.amount).toFixed(2)}
          />
        );
      })}
    </ul>
  );

  return (
    <section className={classes['section-frame']}>
      <h1>Cart</h1>
      <div className={classes.stay}>
        Your stay: <Callendar />
      </div>
      <h2>Rooms</h2>
      {rooms.length !== 0 ? (
        cartRoomItems
      ) : (
        <div className={classes.placeholder}>Select a room...</div>
      )}

      <h2>Treatments</h2>
      {treatments.length !== 0 ? (
        cartTreatmentsItems
      ) : (
        <div className={classes.placeholder}>Select a treatment...</div>
      )}
    </section>
  );
};

export default Cart;
