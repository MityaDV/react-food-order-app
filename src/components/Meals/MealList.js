import styles from './MealList.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';

const MealList = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMeals = async () => {
      setIsLoading(true);
      const res = await fetch(
        'https://react-cours-http-3ee12-default-rtdb.firebaseio.com/meals.json'
      );
      const responseData = await res.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    getMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={styles.loading}>
        <p>Извлечение данных с сервера...</p>
      </section>
    );
  }

  const mealList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default MealList;
