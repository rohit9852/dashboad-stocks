import { useState } from "react";
import "./StockList.css";

export default function ListStock({ item, isLoaded, error }) {
  const [q, setQ] = useState("");
  const [searchParam] = useState(["symbol"]);

  const lowercasedFilter = q.toLowerCase();
  const filteredData = item.filter((item) => {
    return Object.keys(item).some((key) =>
      item[searchParam].toLowerCase().includes(lowercasedFilter)
    );
  });

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="wrapper">
        <div className="card-grid">
          <p className="header">List of NSE</p>
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search with symbol..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </label>
        </div>
        <table className="table">
          <tr>
            <td>symbol</td>
            <td>open</td>
            <td>high</td>
            <td>low</td>
            <td>profit Change</td>
            <td>profit%</td>
          </tr>
          {filteredData.map((item) => {
            console.log(item);
            return (
              <tr>
                <td>{item.symbol}</td>
                <td>{item.open}</td>
                <td>{item.high}</td>
                <td>{item.low}</td>
                <td>{item.ptsC}</td>
                <td>{item.per}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
