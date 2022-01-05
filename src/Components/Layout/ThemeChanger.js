import { useEffect, useState } from "react";

const ThemeChanger = () => {
    const [themeState, setThemeState] = useState(false);

 const handleChange = () => {
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
  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') return  document.body.classList.add('dark-mode');
  })
      
    return ( 
        
        <div className="theme-changer">
                <input type="checkbox" id="toggle"/>
                <label for="toggle" onClick={handleChange}></label>
               
        </div>
     );
}
export default ThemeChanger;