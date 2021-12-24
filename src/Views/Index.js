import NewsFeed from "../Components/Index/NewsFeed";
import Chart from "../Components/Index/Chart";
import BTCFearGreed from "../Components/Index/BTCFearGreed";
import Trending from "../Components/Index/Trending";

const Index = ({isLoaded, news, btcFaG, trending, chart}) => {
 
    return ( 
       <>
            <NewsFeed news={news} />
            {/* <BTCFearGreed  btcFaG={btcFaG} />
            <Trending trending={trending} /> */}
            <Chart chart={chart} />        
        </>
     );
}

export default Index;