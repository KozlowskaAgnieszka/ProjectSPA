import _ from 'lodash';

export const getUniqueAreas = (treatments) => {
  const treatmentsAreas = treatments.map((treatment) => treatment.area);
  return _.uniq(treatmentsAreas);
};
