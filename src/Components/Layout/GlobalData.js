import { DataContext } from "../../Utils/DataContext";
import { useContext } from "react";
const GlobalData = () => {
    const { globalData, chart } = useContext(DataContext)
    const getBTCData = () => {
        return chart.filter(coin => coin.symbol === 'btc')[0];
    }
    const { current_price} = getBTCData();
    const { active_cryptocurrencies } = globalData.data;
    const marketCapInBTC = globalData.data.total_market_cap.btc;
    const totalVolInBTC = globalData.data.total_volume.btc;
    const btcDominance = globalData.data.market_cap_percentage.btc;
    const ethDominance = globalData.data.market_cap_percentage.eth;


    let getMetric = metricType => {
       let mrktcap =  Math.floor(metricType * current_price);
       return mrktcap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (  
        <div className='global-wrapper'>
            <div className='global-data'>
            <div className='metric'>
                    <span  className='label'>Coins: </span>
                    <span  className='result'>{active_cryptocurrencies}</span>
                </div>
                <div className='metric'>
                    <span  className='label'>Market Cap: </span>                  
                     <span  className='result'>${getMetric(marketCapInBTC)}</span>
                </div>
                <div className='metric'>
                    <span  className='label'>24h Vol: </span>
                    <span  className='result'>${getMetric(totalVolInBTC)}</span>
                </div>
                <div className='metric'>
                    <span  className='label'>Dominance: </span>
                    <span  className='result'>BTC: {btcDominance.toFixed(1)}%   ETH: {ethDominance.toFixed(1)}% </span>
                </div>
                <div className='metric'>
                    <span  className='label'>Gas: </span>
                    <span  className='result'>45 Gwei</span>
                </div>

            </div>

        </div>
    );
}

export default GlobalData;


