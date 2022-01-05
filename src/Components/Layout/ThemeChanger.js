import { useEffect, useState } from "react";

const ThemeChanger = () => {
    const [themeState, SetThemeState] = useState(false);

    const handleChange = () => {
        SetThemeState(!themeState);
        if (themeState){
            localStorage.setItem('Theme', 'dark');
            document.body.classList.add('dark-mode');
        } else {
            localStorage.setItem('Theme', 'light');
            document.body.classList.remove('dark-mode');
        }
    }

    useEffect( () => {
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