import NewsFeed from "../Components/Main/NewsFeed";
import Chart from "../Components/Chart/Chart";
import BTCFearGreed from "../Components/Main/BTCFearGreed";
import { DataContext } from "../Utils/DataContext";
import { useContext } from "react";
 
   
const COINS_TO_SHOW = 10;
const ARTICLES_TO_SHOW = 4;

const Main = (  ) => {
    const { news, chart } = useContext(DataContext)
    return ( 
        <div className="main">
            <NewsFeed news={news} length={ARTICLES_TO_SHOW} />
            {/* <BTCFearGreed  btcFaG={btcFaG} />
            <Trending trending={trending} /> */}
            <Chart chart={chart} length={COINS_TO_SHOW} />        
        </div>
     );
}

export default Main;