import classes from './ItemDetails.module.css';

const ItemDetails = (props) => {
  const detailsName = Object.keys(props);

  return (
    <ul className={classes['item-details']}>
      {detailsName.map((detail) => {
        return (
          <li key={detail}>
            <span className={classes.capitalize}>{detail}</span>:{' '}
            <strong>
              {props[detail]}{' '}
              {(detail === 'price' && '$') || (detail === 'duration' && 'min')}
            </strong>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemDetails;
