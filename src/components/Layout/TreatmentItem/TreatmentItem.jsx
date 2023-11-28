import { useState, useRef, useEffect } from 'react';
import { useAddToCart } from '../../../hooks/useAddToCart';

import Icon from '../../UI/Icon/Icon';
import Button from '../../UI/Button/Button';
import ExpandIconImage from '../../../assets/icons/expand.svg';
import classes from './TreatmentItem.module.css';
import ItemDetails from '../ItemDetails/ItemDetails';

const TreatmentItem = ({ id, name, description, area, duration, price }) => {
  const treatmentTitle = useRef();
  const [summaryIsShown, setSummaryIsShown] = useState(false);
  const addToCartHandler = useAddToCart(id, name, price, 'treatment');

  useEffect(() => {
    treatmentTitle.current.addEventListener('click', () => {
      setSummaryIsShown(!summaryIsShown);
    });
  }),
    [];

  return (
    <li className={classes['treatment-item']}>
      <title ref={treatmentTitle} className={classes['treatment-title']}>
        <h3 className={classes['treatment-name']}>{name}</h3>
        <Icon image={ExpandIconImage} alt="Show more icon" />
      </title>
      {summaryIsShown && (
        <summary>
          <p className={classes['treatment-summary']}>{description}</p>
          <div className={classes['summary-footer']}>
          <ItemDetails area={ area } duration={ duration } price={ price } />
            <Button
              onClick={() => {
                addToCartHandler();
              }}
              btnStyle="green"
              btnSize="small"
            >
              Add to cart
            </Button>
          </div>
        </summary>
      )}
    </li>
  );
};

export default TreatmentItem;
