import {
    Divider,
    Paper,
    Typography,
    Fade,
    makeStyles,
} from "@material-ui/core";
import Image from "next/image";
import React from "react";

const Home = ({ theme }) => {
    const useStyles = makeStyles((theme) => ({
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
    }));

    const style = useStyles();

    return (
        <>
            <section className={style.fastAnimation}>
                <Paper className={style.background} elevation={24}>
                    <Typography
                        className={`${style.title} ${style.fadeLeftAnimation}`}
                        variant="h1"
                    >
                        disney
                    </Typography>
                    <Typography
                        className={`${style.subtitle} ${style.fadeRightAnimation}`}
                        variant="h1"
                    >
                        MED
                    </Typography>
                    <Image
                        style={style.backgroundImage}
                        src="/assets/bg.jpg"
                        layout="fill"
                    />
                </Paper>
            </section>
            {/* <section>
                <Typography variant="h2">Nossa Missao....</Typography>
                <Paper className={style.background} elevation={24}>
                    <Image
                        src="/assets/bg.jpg"
                        width={1300}
                        height={600}
                        layout="responsive"
                    />
                    <Divider />
                </Paper>
            </section> */}
        </>
    );
};

export default Home;
