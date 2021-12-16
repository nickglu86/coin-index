import Coin from "./Coin";

const Chart = ({chart}) => {
    return ( 
        <div className="crypto-chart">   
        {
          chart.map(coin => {
             return(
                 <Coin
                    key={coin.id} 
                    coin={coin}
                 />
             );
        })}  
        </div>
     );
}

export default Chart;