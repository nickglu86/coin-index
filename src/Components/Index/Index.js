import NewsFeed from "./NewsFeed";
import Chart from "./Chart";

const Index = ({news, chart}) => {
    return ( 
        <div className="App">
            <h1>Crypto Junkies Alpha</h1>
            <NewsFeed news={news} />
            <Chart chart={chart} />
        </div>
     );
}

export default Index;