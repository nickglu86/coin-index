import './App.css';
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';
import axios from 'axios';

import Index from './Views/Index';
import Header from './Components/Layout/Header';
import GlobalData from './Components/Layout/GlobalData';
import Footer from './Components/Layout/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [chart, setChart] = useState([]);
  const [news, setNews] = useState([]);
  const [trending, setTrending] = useState([]);
  const [fearAndGreed, setFearAndGreed] = useState([]);
  const [globalData, setGlobalData] = useState([]);

  const getAPIsData = () => {
    let endpoints = [
      'https://crypto-news-apiii.herokuapp.com/news/cointelegraph',
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false',
      'https://api.coingecko.com/api/v3/search/trending',
      'https://api.alternative.me/fng/?limit=14',
      'https://api.coingecko.com/api/v3/global'
    ];


    Promise.all(endpoints.map(
      (endpoint) => axios.get(endpoint)))
      .then(
        ([ {data: news}, {data: chart}, {data: trending}, {data: fearandgreed}, {data: globalData}])=> {
            console.log('done');
            setChart(chart)
            setNews(news)
            setTrending(trending)
            setFearAndGreed(fearandgreed)
            setGlobalData(globalData.data)
          }
      )
      .finally(() => {
        console.log('set loader');
        setIsLoaded(true);
      });
  }

  const getBTCData = () => {
    return chart.filter(coin => coin.symbol === 'btc')[0];
  }
  useEffect(() => {
    getAPIsData();
  }, []);

  if (!isLoaded) {
    return <h2>Loading</h2>;
  }

  
  return (
    <Router basename="/">
      <main>
      <GlobalData globalData={globalData} btcData={getBTCData()} />
          <Header/>
         
          <Switch>
            <Route 
              path="/" 
              render={(props) => (
                <Index 
                  {...props}
                  news={news}
                  chart={chart}
                  btcFaG={fearAndGreed} 
                  trending={trending}
                />
              )}  
              exact 
            />
          </Switch>
          <Footer/>
      </main>
  </Router>
  );
}

export default App;
