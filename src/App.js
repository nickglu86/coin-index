import './App.css';
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';
import axios from 'axios';

import Index from './Components/Index/Index';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [chart, setChart] = useState([]);
  const [news, setNews] = useState([]);
  const [trending, setTrending] = useState([]);
  const [fearAndGreed, setFearAndGreed] = useState([]);

  const getAPIsData = () => {
    let endpoints = [
      'https://crypto-news-apiii.herokuapp.com/news/cointelegraph',
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false',
      'https://api.coingecko.com/api/v3/search/trending',
      'https://api.alternative.me/fng/?limit=14'

    ];

    Promise.all(endpoints.map(
      (endpoint) => axios.get(endpoint)))
      .then(
        ([ {data: news}, {data: chart}, {data: trending}, {data: fearandgreed}])=> {
            console.log('done');
            setChart(chart)
            setNews(news)
            setTrending(trending)
            setFearAndGreed(fearandgreed)
          }
      )
      .finally(() => {
        console.log('set loader');
        setIsLoaded(true);
      });
  }

  useEffect(() => {
    getAPIsData();
  }, []);

  if (!isLoaded) {
    return <h2>Loading</h2>;
  }

  
  return (
    <Router basename="/cryptojunkies">
      <main>
          <Switch>
            <Route 
              path="/" 
              render={(props) => (
                <Index {...props} news={news} chart={chart} />
              )}  
              exact 
            />
          </Switch>
      </main>
  </Router>
  );
}

export default App;
