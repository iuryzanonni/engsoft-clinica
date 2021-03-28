import Header from "../components/header";
import {
    Switch,
    createMuiTheme,
    ThemeProvider,
    NoSsr,
    CssBaseline,
} from "@material-ui/core";
import useDarkMode from "use-dark-mode";

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from "@material-ui/core";
import Link from "next/link";
import MenuIcon from "@material-ui/icons/Menu";

export const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
    },
});
export const lightTheme = createMuiTheme({
    palette: {
        type: "light",
    },
});

const App = ({ Component, pageProps }) => {
    const darkMode = useDarkMode(false);
    const themeConfig = darkMode ? darkTheme : lightTheme;
    return (
        <NoSsr>
            <ThemeProvider theme={themeConfig}>
                <CssBaseline />

                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">News</Typography>
                        <Link href="/login">
                            <Button style={{ marginLeft: "auto" }}>
                                fLogin
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>

                <div>
                    <button type="button" onClick={darkMode.disable}>
                        ☀
                    </button>
                    <Switch
                        checked={darkMode.value}
                        onChange={darkMode.toggle}
                    />
                    <button type="button" onClick={darkMode.enable}>
                        ☾
                    </button>
                </div>
                <div>
                    oi, eu deveria restar em todas as paginas assim como o
                    header
                </div>
                <Component {...pageProps} />
            </ThemeProvider>
        </NoSsr>
    );
};

export default App;
