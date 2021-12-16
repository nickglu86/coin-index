import React from 'react';

const Coin = ({coin}) => {
    const  { name, image, symbol, current_price, total_volume, price_change_percentage_24h, market_cap, circulating_supply} = coin;
    return (
        <div className="currency-container">
            <div className="chart-row">
                <div className="coin">
                    <img src={image} alt='crypto' />
                    <h2>{name}</h2> 
                    <span className="coin-symbol">{symbol}</span>
                </div>
                <div className="coin-data">
                  <p className="coin-price">${current_price}</p>
                 
                  {price_change_percentage_24h < 0 ? (
                        <p className="coin-percent red">{price_change_percentage_24h.toFixed(2)}% <span>(24h)</span></p>
                    ) : (
                        <p className="coin-percent green">+{price_change_percentage_24h.toFixed(2)}%<span>(24h)</span></p>
                
                    )
                    
                   }
                   <p className="coin-marketcap">
                     $ {market_cap.toLocaleString()}
                     </p>
                   <p className="coin-volume">$ {total_volume.toLocaleString()}</p>
                   <p className="circ-supply"> 
                     <span className="coin-symbol">{symbol}</span>  
                      {circulating_supply.toLocaleString()}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Coin;
