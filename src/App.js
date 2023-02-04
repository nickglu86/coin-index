import './Styles/main.scss';
import { useState, useEffect, createContext} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import { endpoints } from './Utils/Endpoints';
import { DataContext } from './Utils/DataContext';
import Layout from './Components/Layout/Layout';
import BitcoinLogo from './Assets/BitcoinLogo';
import Home from './Views/Home';
import Index from './Views/Index';
import News from './Views/News';
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
          {data: news}, {data: mainCoins}, {data: chart}, {data: trending}, {data: fearandgreed}, {data: globalData}, {data : copinBerau}, {data : dataDash}, {data : camerFous}
        ]) => { setApiData({chart, mainCoins, news,trending, fearandgreed, globalData, youTube : { copinBerau , dataDash, camerFous }})}
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
      {console.log({apiData})}
    <Router basename="/coin-index">
            <Routes>
               <Route path="/" element={<Layout />}>
                <Route index element={  <Home />} />
                <Route path="/index" element={ <Index />} />
                <Route path="/news" element={     <News />} />
                <Route path="/explore"  element={ <Explore />} />
              </Route>
            </Routes>
  </Router>
  </DataContext.Provider>
  );
}

export default App;
