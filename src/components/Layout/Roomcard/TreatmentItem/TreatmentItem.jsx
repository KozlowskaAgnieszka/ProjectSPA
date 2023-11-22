import { useState, useRef, useEffect } from 'react';

import Icon from '../../../UI/Icon';
import ExpandIconImage from '../../../../assets/icons/expand.svg';
import Button from '../../../UI/Button';
import classes from './TreatmentItem.module.css';
import AddToCartButton from '../../../Cart/AddToCartButton';

const TreatmentItem = ({ id, name, area, duration, price }) => {
  const treatmentTitle = useRef();
  const [summaryIsShown, setSummaryIsShown] = useState(false);

  useEffect(() => {
    treatmentTitle.current.addEventListener('click', () => {
      setSummaryIsShown(!summaryIsShown);
    });
  }),
    [];

  return (
    <li className={classes['treatment-item']}>
      <title ref={treatmentTitle} className={classes['treatment-title']}>
        <h2>{name}</h2>
        <Icon image={ExpandIconImage} alt="Show more icon" />
      </title>
      {summaryIsShown && (
        <summary>
          <p className={classes['treatment-summary']}>opis</p>
          <div className={classes['summary-footer']}>
            <ul className={classes['footer-items']}>
              <li>
                Area: <strong> {area}</strong>
              </li>
              <li>
                Duration: <strong> {duration} min</strong>
              </li>
              <li>
                Price: <strong> {price} $</strong>
              </li>
              <li>
                <AddToCartButton
                  id={id}
                  name={name}
                  price={price}
                  type="treatment"
                />
              </li>
            </ul>
          </div>
        </summary>
      )}
    </li>
  );
};

export default TreatmentItem;
