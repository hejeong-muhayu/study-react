import {useCallback, useState} from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props){
    const [theme, setTeme] = useState("light");
    const toggleTheme = useCallback(()=>{
        if(theme === "light"){
            setTeme("dark")
        }else if (theme==="dark"){
            setTeme("light")
        }
    },[theme]);

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <MainContent/>
        </ThemeContext.Provider>
    )
}

export default DarkOrLight;
