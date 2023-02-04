const Trending = ({trending : trendingCoins}) =>{
  
    const printTrending = (coin) => {
       return(
            <div className="trending-coin">
               <img src={coin.item.small} />
                <div className="coin-label">{coin.item.name}</div>
                <div  className="coin-ticker">{coin.item.market_cap_rank}</div>
                <div  className="coin-ticker">{coin.item.symbol}</div>
        
            </div>
       );
        // return console.log(coin.item.id);
    }

    return (  
        
        <div className="trending">
            <div  className="trending-title">
            <img src='https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=5e90013' />
                <h2>Trending</h2>
            </div>
            <div  className="trending-coins">
                 {trendingCoins.coins.map(coin => printTrending(coin))}
            </div>
         
        </div>
    );
}

export default Trending;