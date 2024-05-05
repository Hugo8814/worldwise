import styles from "./cityList.module.css";
import Spinner from "./Spinner";

function cityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  return <ul className={styles.cityList}></ul>;
}

export default cityList;
