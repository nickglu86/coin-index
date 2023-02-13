import Coin from "./Coin";
import { useState } from "react";

const MainChart = ({ chart, length, expanded = true }) => {
  const [search, setSearch] = useState("");
  const [chartData, setChartData] = useState(chart);
  const [sortOrder, setSortOrder] = useState(true);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = chartData.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  Array.prototype.sortBy = function (prop) {
    if (sortOrder) {
      return this.slice(0).sort(function (a, b) {
        return a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0;
      });
    } else {
      return this.slice(0).sort(function (a, b) {
        return a[prop] < b[prop] ? 1 : a[prop] > b[prop] ? -1 : 0;
      });
    }
  };

  const sort = (prop) => {
    let sortedChart = chartData;
    setSortOrder(!sortOrder);
    setChartData(sortedChart.sortBy(prop));
  };

  const ChartHeader = () => {
    return (
      <>
        <div className="currency-container">
        <div className="chart-row chart-header">
 
          <h2>Top 10</h2>
</div>
        </div>
        <div className="currency-container">
          <div className="chart-row chart-header">
            <h2 onClick={() => sort("market_cap_rank")}>#</h2>
            <div className="coin">
              <form>
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                  onChange={handleChange}
                />
              </form>
            </div>
            <div className="coin-data">
              <p className="coin-price" onClick={() => sort("current_price")}>
                Price
              </p>
              <p
                className="coin-percent"
                onClick={() => sort("price_change_percentage_24h")}
              >
                24h %
              </p>
              {expanded && (
                <>
                  <p
                    className="coin-marketcap"
                    onClick={() => sort("market_cap")}
                  >
                    Market Cap
                  </p>
                  <p
                    className="coin-volume"
                    onClick={() => sort("total_volume")}
                  >
                    {" "}
                    Volume(24h)
                  </p>
                  <p
                    className="circ-supply"
                    onClick={() => sort("circulating_supply")}
                  >
                    {" "}
                    Circulating Supply{" "}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="crypto-chart">
      {ChartHeader()}
      {filteredCoins.slice(0, length).map((coin, index) => {
        return (
          <Coin key={coin.id} coin={coin} rowNum={index} expanded={expanded} />
        );
      })}
    </div>
  );
};

export default MainChart;