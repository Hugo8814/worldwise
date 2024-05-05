import CityItem from "./CityItem";
import styles from "./cityList.module.css";
import Spinner from "./Spinner";

function cityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} />
      ))}
    </ul>
  );
}

export default cityList;
