import Coin from "./Coin";
import { useState } from "react";

const ChartHeader = () => {
    const [search, setSearch] = useState('');

    const handleChange = e => {
        setSearch(e.target.value)
    };

    return (
            <div className="currency-container">     
                <div className="chart-row chart-header">
                <div className="coin">
                    <form>
                        <input type="text" placeholder="Search" className="search-input"  onChange={handleChange} />
                    </form>
                </div>
                <div className="coin-data">
                    <p className="coin-price">Price</p>
                    <p className="coin-percent">24h %</p>
                    <p className="coin-marketcap">Market Cap</p>
                    <p className="coin-volume"> Volume(24h)</p>
                    <p className="circ-supply">  Circulating Supply  </p>
                </div>
            </div>
            </div>
    );
}

const Chart = ({chart}) => {
    return ( 
        <section>
            <div className="crypto-chart">   
            {ChartHeader()}       
            {
            chart.map((coin, index) => {
                return(
                    <Coin
                        key={coin.id} 
                        coin={coin}
                        rowNum={index}
                    />
                );
            })}  
            </div>
        </section>
     );
}

export default Chart;