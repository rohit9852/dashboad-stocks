import { useState, useEffect } from "react";
import StockList from "./components/stockList";
import TopFiveStock from "./components/TopFiveStock";
import "./styles.css";

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://jsonblob.com/api/d8906f08-f538-11eb-b3d6-75029a67fa99")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItem(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  return (
    <div className="App">
      <div>
        <h1 className="title">DashBoard</h1>
      </div>
      <div className="tables">
        <StockList error={error} isLoaded={isLoaded} item={item} />
        <TopFiveStock error={error} isLoaded={isLoaded} item={item} />
      </div>
    </div>
  );
}
