import { useEffect, useState } from "react";

const ThemeChanger = () => {
    const [themeState, setThemeState] = useState(false);

 const setThemeColor = () => {
    setThemeState(!themeState);
    if (themeState) {
        console.log('true');
        localStorage.setItem('Theme', 'light');
        document.body.classList.remove('dark-mode');

    } else {
        localStorage.setItem('Theme', 'dark');
        document.body.classList.add('dark-mode');
    }
  }
  const checkThemeColor = () =>  localStorage.getItem('Theme') === 'dark' ? true : false;

 
    return ( 
        
        <div className="theme-changer">
                <input type="checkbox" id="toggle" checked={checkThemeColor()}/>
                <label for="toggle" onClick={setThemeColor}></label>
               
        </div>
     );
}
export default ThemeChanger;