import React, { createContext, useState } from "react";
import { light } from "../../styles/themes/light";
import { dark } from "../../styles/themes/dark";

export const MyThemeContext = createContext();

function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(light);

    const themeHandler = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    return (
        <MyThemeContext.Provider value={{ theme, themeHandler }}>
            {children}
        </MyThemeContext.Provider>
    );
}

export default ThemeContextProvider;
