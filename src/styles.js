import { makeStyles } from "@material-ui/core";

export const defaultStyles = makeStyles((theme) => ({
    fastAnimation: {
        animation: `$fadeIn 1500ms ${theme.transitions.easing.easeInOut}`,
    },
    fadeLeftAnimation: {
        animation: `$slowFadeInLeft 3000ms ${theme.transitions.easing.easeInOut}`,
    },
    fadeRightAnimation: {
        animation: `$slowFadeInRight 3000ms ${theme.transitions.easing.easeInOut}`,
    },
    background: {
        position: "relative",
        width: "90vw",
        height: "65vh",
        margin: "auto",
        marginTop: "80px",
        backgroundColor: theme.palette.background.paper,
        opacity: 0.8,
    },
    title: {
        position: "absolute",
        left: "20px",
        fontSize: "72px",
        bottom: "80px",
        transition: "2s",
        zIndex: 1,
        color: "#404040",
    },
    subtitle: {
        position: "absolute",
        left: "30px",
        bottom: "0",
        transition: "2s",
        zIndex: 1,
        color: "#f66",
    },
    "@keyframes fadeIn": {
        "0%": {
            opacity: 0,
            transform: "translateY(-20%)",
        },
        "100%": {
            opacity: 1,
            transform: "translateY(0)",
        },
    },
    "@keyframes slowFadeInLeft": {
        "0%": {
            opacity: 0,
            transform: "translateX(-30%)",
        },
        "100%": {
            opacity: 1,
            transform: "translateX(0)",
        },
    },
    "@keyframes slowFadeInRight": {
        "0%": {
            opacity: 0,
            transform: "translateX(30%)",
        },
        "100%": {
            opacity: 1,
            transform: "translateX(0)",
        },
    },
    selectField: {
        minWidth: "120px",
    },
    input: {
        justifyItems: "center",
        padding: "25px",
        width: "350px",
    },
    section: {
        width: "50vw",
    },
    divBox: {
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "85vh",

        alignItems: "center",
        justifyContent: "center",
    },
}));

export const footer = makeStyles((theme) => ({
    footer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.palette.background.paper,
        marginTop: "30px",
        padding: "50px",
    },
    iconsContainer: { display: "flex" },
    icon: {
        height: "30px",
        width: "30px",
        marginRight: "30px",
    },
}));
