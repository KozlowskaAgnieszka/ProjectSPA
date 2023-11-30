
import { useFetch } from '../../hooks/useFetch.js';
import { fetchData } from '../../http.js';
import { getUniqueAreas } from '../../helpers/treatments.js';

import Loader from '../../components/Layout/Loader/Loader.jsx';
import Error from '../Error/Error.jsx';

import classes from './Treatments.module.css';
import TreatmentAreaItems from './TreatmentsAreaItems.jsx';

const Treatments = () => {
  const {
    isLoading,
    isEmpty,
    fetchedData: treatments,
    error,
  } = useFetch(fetchData, 'treatments', []);

  if (error) {
    return <Error title="An error occured!" message={error.message} />;
  }

  const filteredTreatments = (area, treatments) => {
    return treatments.filter((treatment) => treatment.area === area);
  };

  const treatmentsArea = getUniqueAreas(treatments);

  return (
    <>
      <h1>Treatments</h1>
      <Loader
        isEmpty={isEmpty}
        isLoading={isLoading}
        label="No treatments available"
      >
        <>
          {treatmentsArea.map((area) => {
            return (
              <section key={area}>
                <h2 className={classes['treatments-area']}>
                  {area} Treatments
                </h2>
                <ul className={classes['treatments-list']}>
                  <TreatmentAreaItems
                    treatments={filteredTreatments(area, treatments)}
                  />
                </ul>
              </section>
            );
          })}
        </>
      </Loader>
    </>
  );
};

export default Treatments;
