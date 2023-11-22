import { cartActions } from '../../store/cart';
import { useDispatch } from 'react-redux';
import Button from '../UI/Button';

const AddToCartButton = ({ id, name, price, type }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (id, name, price) => {
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

  return (
    <Button
      onClick={() => addToCartHandler(id, name, price)}
      btnStyle="green"
      btnSize="small"
    >
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
