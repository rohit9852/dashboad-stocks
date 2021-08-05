import "./TopFiveStock.css";

export default function ListStock({ item, isLoaded, error }) {
  const SortItem = item.sort((a, b) => {
    return b.ptsC - a.ptsC;
  });
  const TopFiveStock = SortItem.slice(0, 5);

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="wrapper">
        <p className="header">Top Five profit based stock</p>

        <table className="table">
          <tr>
            <td>symbol</td>
            <td>open</td>
            <td>high</td>
            <td>low</td>
            <td>profit change</td>
            <td>profit%</td>
          </tr>
          {TopFiveStock.map((item) => {
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
