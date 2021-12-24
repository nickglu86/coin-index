import './Styles/main.scss';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';
import axios from 'axios';

import Index from './Views/Index';
import Header from './Components/Layout/Header';
import GlobalData from './Components/Layout/GlobalData';
import Footer from './Components/Layout/Footer';

import { endpoints } from './Utils/Endpoints';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [chart, setChart] = useState([]);
  const [news, setNews] = useState([]);
  const [trending, setTrending] = useState([]);
  const [fearAndGreed, setFearAndGreed] = useState([]);
  const [globalData, setGlobalData] = useState([]);

  const getAPIsData = () => {
   Promise.all(endpoints.map(
      (endpoint) => axios.get(endpoint)))
      .then(
        ([ 
          {data: news},
          {data: chart},
          {data: trending},
          {data: fearandgreed},
          {data: globalData}
        ]) => {
              setChart(chart)
              setNews(news)
              setTrending(trending)
              setFearAndGreed(fearandgreed)
              setGlobalData(globalData.data)
            }
      )
      .finally(() => {
        setIsLoaded(true);
      });
  }

  useEffect(() => {
    getAPIsData();
  }, []);

  const getBTCData = () => {
    return chart.filter(coin => coin.symbol === 'btc')[0];
  }

  if (!isLoaded) {
    return <div className="loader"></div>;
  }

  
  return (
    <Router basename="/crypto-junkies-alpha">
      <main>
          <GlobalData globalData={globalData} btcData={getBTCData()} />
          <Header/>
          <Switch>
            <Route 
              path="/" 
              render={(props) => (
                <Index 
                  {...props}
                  isLoaded={isLoaded}
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
