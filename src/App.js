import './Styles/main.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';
import { endpoints } from './Utils/Endpoints';

import Header from './Components/Layout/Header';
import GlobalData from './Components/Layout/GlobalData';

import Main from './Views/Main';
import Index from './Views/Index';
import News from './Views/News';

import Footer from './Components/Layout/Footer';
import Explore from './Views/Explore';

const App = () => {
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
                <Main 
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
            <Route 
              path="/index" 
              render={(props) => (
                  <Index 
                    {...props}
                    chart={chart}
                    trending={trending}
                  />
                )}  
            />
            <Route 
                path="/news" 
                render={(props) => (
                    <News 
                      {...props}
                      news={news}
                    />
              )}   
            />
            <Route 
                path="/explore" 
                render={(props) => (
                  <Explore />
              )}   
            />
          </Switch>
          <Footer/>
      </main>
  </Router>
  );
}

export default App;
