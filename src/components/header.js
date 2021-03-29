import { AppBar, Button, Switch, Toolbar } from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Image from "next/image";
import Link from "next/link";

const Header = ({ theme, darkMode, toggleDarkMode }) => {
    const style = {
        appBar: {
            backgroundColor: theme.palette.background.paper,
            marginBottom: "30px",
        },
        title: { color: theme.palette.text.primary },
        loginButton: { marginLeft: "auto" },
        link: { cursor: "pointer", zIndex: "2" },
    };

    return (
        <AppBar style={style.appBar} position="fixed">
            <Toolbar>
                <Link href="/">
                    <span style={style.link}>
                        <Image src="/assets/logo.svg" height={55} width={100} />
                    </span>
                </Link>
                <Link href="/login">
                    <Button style={style.loginButton}>Login</Button>
                </Link>
                <WbSunnyIcon style={style.title} />
                <Switch
                    checked={darkMode}
                    onChange={() => toggleDarkMode(!darkMode)}
                />
                <Brightness3Icon style={style.title} />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
