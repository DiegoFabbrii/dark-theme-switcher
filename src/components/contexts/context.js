import React, { createContext, useState, useEffect } from "react";
import { light } from "../../styles/themes/light";
import { dark } from "../../styles/themes/dark";

export const MyThemeContext = createContext();

function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(light);

    useEffect(() => {
        const currentTheme = JSON.parse(localStorage.getItem("theme"));
        setTheme(currentTheme);
    }, []);

    useEffect(() => {
        const saveTheme = () =>
            localStorage.setItem("theme", JSON.stringify(theme));
        saveTheme();
    }, [theme]);

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
