import { Fragment } from 'react';
import PromoText from './PromoText';
import MealList from './MealList';

const Meals = (props) => {
  return (
    <Fragment>
      <PromoText />
      <MealList />
    </Fragment>
  );
};
export default Meals;
