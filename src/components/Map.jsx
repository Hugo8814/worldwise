import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
function Map() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("Form")}>
      <h1>Map</h1>
      <h1>lat: {lat}</h1>
      <h1>lng: {lng}</h1>
    </div>
  );
}

export default Map;
