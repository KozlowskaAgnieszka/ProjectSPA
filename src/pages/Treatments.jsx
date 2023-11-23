import { useFetch } from '../hooks/useFetch';
import { fetchData } from '../http.js';

import TreatmentItem from '../components/Layout/TreatmentItem/TreatmentItem.jsx';

import classes from './Treatments.module.css';

const Treatments = () => {
  const {
    isLoading,
    fetchedData: treatments,
    error,
  } = useFetch(fetchData, 'treatments', []);

  if (error) {
    return <Error title="An error occured!" message={error.message} />;
  }

  const treatmentArea = (area) => {
    const filteredTreatments = treatments.filter(
      (treatment) => treatment.area === area
    );

    const areaTreatmentList = filteredTreatments.map((treatment) => {
      return (
        <TreatmentItem
          key={treatment.id}
          id={treatment.id}
          name={treatment.name}
          description={treatment.description}
          area={treatment.area}
          duration={treatment.time}
          price={treatment.price}
        />
      );
    });
    return areaTreatmentList;
  };

  return (
    <section className={classes['main-section']}>
      <h1>Treatments</h1>
      {isLoading && (
        <p className={classes['fallback-text']}>
          Treatments list is loading...
        </p>
      )}
      {!isLoading && treatments.length === 0 && (
        <p className={classes['fallback-text']}>No treatment available...</p>
      )}
      {!isLoading && treatments.length > 0 && (
        <>
          <h2>Body Treatments</h2>
          <ul className={classes['treatments-list']}>
            {treatmentArea('body')}
          </ul>
          <h2>Facial Treatments</h2>
          <ul className={classes['treatments-list']}>
            {treatmentArea('facial')}
          </ul>
          <h2>Nail Treatments</h2>
          <ul className={classes['treatments-list']}>
            {treatmentArea('nail')}
          </ul>
        </>
      )}
    </section>
  );
};

export default Treatments;
