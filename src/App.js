import HeaderComponent from "./components/header/header";
import GlobaStyle from "./styles/Globals";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { MyThemeContext } from "./components/contexts/context";

function App() {
    const { theme, themeHandler } = useContext(MyThemeContext);

    return (
        <ThemeProvider theme={theme}>
            <GlobaStyle />
            <HeaderComponent themeHandler={themeHandler} />
        </ThemeProvider>
    );
}

export default App;
