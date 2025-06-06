import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat") || "unknown";
  const lng = searchParams.get("lng") || "unknown";

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map</h1>
      <h2>
        Position: lat: {lat},lng: {lng}
      </h2>
      <button
        onClick={() => {
          setSearchParams({ lat: 2003, lng: 2101 });
        }}
      >
        Change Position
      </button>
    </div>
  );
}

export default Map;
