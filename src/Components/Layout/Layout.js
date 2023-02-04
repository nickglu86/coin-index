import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import GlobalData from './GlobalData';

const Layout = () => {
    return ( 
        <main>
            <GlobalData  />
            <Header/>
            <Outlet />
            <Footer/>
         </main>
     );
}

export default Layout;