import Icon from '../../UI/Icon/Icon';
import DeleteIconImage from '../../../assets/icons/delete.svg';

import classes from './CartItem.module.css';
import Button from '../../UI/Button/Button';

const CartItem = ({ type, amount, name, price, days, onRemove }) => {
  const stayCheck = () => {
    if (!days) {
      return <span>Choose min 1 night...</span>;
    }

    if (days === 1) {
      return (
        <span>
          <strong>{days}</strong> day
        </span>
      );
    }

    return (
      <span>
        <strong>{days}</strong> days
      </span>
    );
  };

  return (
    <li className={classes['item']}>
      <div className={classes['details']}>
        <span>{name}</span>
        {type === 'room' && stayCheck()}
        {type === 'treatment' && (
          <span>
            <strong>x {amount}</strong>
          </span>
        )}
        <span>{price} $</span>
      </div>
      <span>
        <Button btnShadow="no-shadow" onClick={onRemove}>
          <Icon image={DeleteIconImage} alt="Delete icon" />
        </Button>
      </span>
    </li>
  );
};

export default CartItem;
