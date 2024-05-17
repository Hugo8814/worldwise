/* eslint-disable react-hooks/rules-of-hooks */
import CityItem from "./CityItem";
import styles from "./cityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../Contexts/CitiesContext";

function cityList() {
  const { cities, isLoading } = useCities();
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
