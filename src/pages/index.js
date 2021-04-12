import { makeStyles, Paper, Typography } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import { defaultStyles } from "../styles";

const Home = () => {
    const style = defaultStyles();

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
                    <Image src="/assets/bg.jpg" layout="fill" />
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
