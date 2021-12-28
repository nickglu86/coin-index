import { useState } from "react";

Array.prototype.sortBy = function(prop) {
    return this.slice(0).sort(function(a,b) {
        return (a[prop] < b[prop]) ? 1 : (a[prop] > b[prop]) ? -1 : 0;
      });
}

const BiggestGainers =({chart, lenght = 7}) => {

    const [biggestGainers, setBiggestGainers] = useState(chart.sortBy('price_change_percentage_24h'));

    return (
        <div className="biggest-gainers">
            <div  className="gainer-title">
            <img src='https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=5e90013' />
                <h2>Biggest Gainers</h2>
            </div>
            <div className="gainers-coins">   
                {
                    biggestGainers.slice(0,lenght).map((coin, index) => {
                        return(
                            <div className="gainer-coin">
                                <h2>{index + 1}</h2>
                                    <img src={coin.image} alt='crypto' />
                                    <div className="gainer-label">{coin.name}</div> 
                                    <span className="gainer-ticker">{coin.symbol}</span>
                                <div className="coin-data">
                                <p className="coin-price">${coin.current_price}</p>
                                <p className="coin-percent red">{coin.price_change_percentage_24h.toFixed(2)}% <span>(24h)</span></p>
                
                                </div>
                            </div>

                        );
                })} 
            </div>
        </div>

    );
}

export default BiggestGainers;