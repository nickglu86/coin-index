import './Styles/main.scss';
import { useState, useEffect, createContext} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import { endpoints } from './Utils/Endpoints';
import { DataContext } from './Utils/DataContext';
import Header from './Components/Layout/Header';
import GlobalData from './Components/Layout/GlobalData';
import BitcoinLogo from './Assets/BitcoinLogo';

import Main from './Views/Main';
import Index from './Views/Index';
import News from './Views/News';

import Footer from './Components/Layout/Footer';
import Explore from './Views/Explore';

const getTheme = localStorage.getItem('Theme');
if (getTheme === 'dark'){document.body.classList.add('dark-mode')};
 
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [apiData, setApiData] = useState([]);

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
              setApiData({chart,news,trending, fearandgreed, globalData})
             }
      )
      .finally(() => {
        setIsLoaded(true);
      });
  }

  useEffect(() => {
    getAPIsData()
  }, []);



  if (!isLoaded) {
    return <div className="loader">
       <BitcoinLogo />
    </div>;
  }

  
  return (
    <DataContext.Provider value={apiData}>
    <Router basename="/coin-index">
      <main>
          <GlobalData  />
          <Header/>
            <Routes>
              <Route path="/" element={  <Main />} />
              <Route path="/index" element={ <Index />} />
              <Route path="/news" element={     <News />} />
              <Route path="/explore"  element={ <Explore />} />
            </Routes>
          <Footer/>
      </main>
  </Router>
  </DataContext.Provider>
  );
}

export default App;
