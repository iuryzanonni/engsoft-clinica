import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from "@material-ui/core";
import Link from "next/link";
import MenuIcon from "@material-ui/icons/Menu";

const Header = ({ theme }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">News</Typography>
                <Link href="/login">
                    <Button style={{ marginLeft: "auto" }}>fLogin</Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
