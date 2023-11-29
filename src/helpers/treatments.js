export const filteredTreatments = (area, treatments) => {
  return treatments.filter((treatment) => treatment.area === area);
};

export const getUniqueAreas = (treatments) => {
  const treatmentsArea = treatments.map((treatment) => treatment.area);
  const removedDuplicates = treatmentsArea.reduce((acc, curr) => {
    !acc.includes(curr) && acc.push(curr);
    return acc;
  }, []);

  return removedDuplicates;
};
