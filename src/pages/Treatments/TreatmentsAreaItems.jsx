import TreatmentItem from '../../components/Layout/TreatmentItem/TreatmentItem';

const TreatmentAreaItems = ({ treatments }) => {
   const areaTreatmentList = treatments.map((treatment) => {
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

export default TreatmentAreaItems;
