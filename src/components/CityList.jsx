import CityItem from "./CityItem";
import styles from "./cityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function cityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="add your first city" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default cityList;
