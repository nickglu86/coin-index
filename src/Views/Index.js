import BiggestGainers from "../Components/Chart/BiggestGainers";
import Chart from "../Components/Chart/Chart";
import Trending from "../Components/Chart/Trending";
import { DataContext } from "../Utils/DataContext";
import { useContext } from "react";

const COINS_TO_SHOW = 50;

const Index = () => {
    const { trending, chart } = useContext(DataContext)
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