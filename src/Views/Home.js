import NewsFeed from "../Components/Main/NewsFeed";
import MainChart from "../Components/Chart/MainChart";
import Trending from "../Components/Chart/Trending";
import BTCFearGreed from "../Components/Main/BTCFearGreed";
import { DataContext } from "../Utils/DataContext";
import { useContext } from "react";
import TrendingChart from "../Components/Chart/TrendingChart";

const COINS_TO_SHOW = 10;
const ARTICLES_TO_SHOW = 9;

const Home = () => {
  const { news, mainCoins, chart, trending, fearandgreed } =
    useContext(DataContext);
  return (
    <div className="main home">
      <NewsFeed news={news} length={ARTICLES_TO_SHOW} />
      <section style={{display: 'flex'}}>
        <TrendingChart />
        <MainChart chart={chart} length={COINS_TO_SHOW} expanded={false} />
      </section>

      <Trending trending={trending} />
      <BTCFearGreed btcFaG={fearandgreed} />
    </div>
  );
};

export default Home;
