import { Header } from "./style";
import Switch from "react-switch";
import { shade } from "polished";
import { useContext } from "react";
import { MyThemeContext } from "../contexts/context";

function HeaderComponent() {
    const { theme, themeHandler } = useContext(MyThemeContext);
    const { colors, title } = theme;

    return (
        <Header>
            <h1>logo</h1>
            <Switch
                checked={title === "dark"}
                onChange={themeHandler}
                height={20}
                width={40}
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor={shade(0.2, colors.primary)}
                offColor={shade(0.2, colors.primary)}
                activeBoxShadow={false}
            />
        </Header>
    );
}

export default HeaderComponent;
