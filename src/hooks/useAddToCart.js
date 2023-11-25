import { cartActions } from '../store/cart';
import { useDispatch } from 'react-redux';

export function useAddToCart(id, name, price, type) {
  const dispatch = useDispatch();
  return () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        amount: 1,
        price,
        type,
      })
    );
  };
}
