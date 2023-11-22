import TreatmentItem from '../components/Layout/Roomcard/TreatmentItem/TreatmentItem';

import classes from './Treatments.module.css';

const Treatments = () => {
  return (
    <section className={classes['main-section']}>
      <h1>Treatments</h1>
      <ul className={classes['treatments-list']}>
        <TreatmentItem
          id={Math.random()}
          name="Zabieg 1"
          area="back"
          duration="30"
          price="80.00"
        />
        <TreatmentItem
          id={Math.random()}
          name="zabieg 2"
          area="back"
          duration="30"
          price="80.00"
        />
      </ul>
    </section>
  );
};

export default Treatments;
