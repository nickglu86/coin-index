import BiggestGainers from "../Components/Chart/BiggestGainers";
import Chart from "../Components/Chart/Chart";
import Trending from "../Components/Chart/Trending";

const COINS_TO_SHOW = 50;

const Index = ({isLoaded, news, btcFaG, trending, chart}) => {

    return ( 
        <div className="index">
            <div className="index-header">
                <BiggestGainers chart={chart} />    
                <Trending trending={trending} />  
            </div>

            <Chart chart={chart} length={COINS_TO_SHOW} />        
        </div>
     );
}

export default Index;