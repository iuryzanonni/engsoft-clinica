import {
    createMuiTheme,
    CssBaseline,
    NoSsr,
    ThemeProvider,
} from "@material-ui/core";
import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
    },
});

const lightTheme = createMuiTheme({
    palette: {
        type: "light",
    },
});

const App = ({ Component, pageProps }) => {
    const [darkMode, setDarkMode] = useState(true);
    const theme = darkMode ? darkTheme : lightTheme;

    return (
        <NoSsr>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Header
                    darkMode={darkMode}
                    toggleDarkMode={setDarkMode}
                    theme={theme}
                />
                <Component theme={theme} {...pageProps} />
                <Footer />
            </ThemeProvider>
        </NoSsr>
    );
};

export default App;
