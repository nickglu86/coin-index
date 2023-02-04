import { useContext } from "react";
import { DataContext } from "../../Utils/DataContext";

const TrendingChart = () => {
  const { trending, mainCoins } = useContext(DataContext);
  const btcPrice = mainCoins.bitcoin.usd;

  const ChartHeader = () => {
    return (
      <div className="currency-container">
        <div className="chart-row chart-header">
            <h2>Trending Coins</h2>
          {/* <h2>#</h2>
          <div className="coin">
            <form>
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
            </form>
          </div>
          <div className="coin-data">
            <p className="coin-price">Price</p>
            <p className="coin-percent">24h %</p>
          </div> */}
        </div>
      </div>
    );
  };

  const Coin = ({coin}) => {
    const coinPrice = coin.price_btc * btcPrice;
    return(
        <div className="currency-container">
          <div className="chart-row">
            <h2>{coin.market_cap_rank}</h2>
            <div className="coin">
              <img src={coin.large} alt="crypto" />
              <h2>{coin.name}</h2>
              <span className="coin-symbol">{coin.symbol}</span>
            </div>
            <div className="coin-data">
              <p className="coin-price">${ parseInt(coinPrice) > 0 ? coinPrice.toFixed(0) :  parseInt(coinPrice)*100 > 0 ?  coinPrice.toFixed(4) : coinPrice.toFixed(6)}</p>
    
              {/* {price_change_percentage_24h < 0 ? (
                        <p className="coin-percent red">
                          {price_change_percentage_24h.toFixed(2)}% <span>(24h)</span>
                        </p>
                      ) : (
                        <p className="coin-percent green">
                          +{price_change_percentage_24h.toFixed(2)}%<span>(24h)</span>
                        </p>
                      )} */}
            </div>
          </div>
        </div>
      );
  }
  return (
 
      <div className="crypto-chart">
        {ChartHeader()}
        {trending.coins.map((_coin, index) => {
            // console.log(coin.item)
          return (
            <Coin
               coin={_coin.item}
              key={index}
            />
          );
        })}
      </div>
 
  );
};

export default TrendingChart;
