const GlobalData = ({globalData}) => {
    const btcMarketCap = globalData.total_market_cap.btc;
    const btcMarketCapPercent = globalData.market_cap_percentage.btc;

    console.log(btcMarketCap / btcMarketCapPercent * 100)
    return (  
        <div className='global-wrapper'>
            <div className='global-data'>
            <div className='metric'>
                    <span  className='label'>Coins: </span>
                    <span  className='result'>{globalData.active_cryptocurrencies}</span>
                </div>
                <div className='metric'>
                    <span  className='label'>Market Cap: </span>                  
                     <span  className='result'>$2,266,930,129,443</span>
                </div>
                <div className='metric'>
                    <span  className='label'>24h Vol: </span>
                    <span  className='result'>$116,606,872,645</span>
                </div>
                <div className='metric'>
                    <span  className='label'>Dominance: </span>
                    <span  className='result'>BTC: 40.7%  ETH: 21.2% </span>
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