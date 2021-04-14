import { Button, Grid, TextField } from "@material-ui/core";
import { withIronSession } from "next-iron-session";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "../components/header";
import MySnackBar from "../components/snackBar";
import { snackBarSeverity } from "../helper";
import { defaultStyles } from "../styles";

export const getServerSideProps = withIronSession(
    async ({ req, res }) => {
        const user = req.session.get("user");

        if (!user) {
            return { props: {} };
        }
        req.session.destroy();
        return {
            props: {},
        };
    },
    {
        cookieName: "MYSITECOOKIE",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production" ? true : false,
        },
        password: process.env.APPLICATION_SECRET,
    }
);

const SignInPage = ({ theme, user, darkMode, setDarkMode }) => {
    const style = defaultStyles();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [snackBarMessage, setSnackBarMessage] = useState("");
    const [isOpenSnackBar, setIsOpenSnackBar] = useState(false);
    const [severitySnackBar, setSeveritySnackBar] = useState(
        snackBarSeverity.SUCCESS
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:3000/api/sessions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            setSnackBarMessage("Logado com sucesso");
            setSeveritySnackBar(snackBarSeverity.SUCCESS);
            setIsOpenSnackBar(true);
            return router.push("/");
        } else {
            setSnackBarMessage("Erro no login");
            setSeveritySnackBar(snackBarSeverity.ERROR);
            setIsOpenSnackBar(true);
        }
    };

    return (
        <>
            <Header
                theme={theme}
                user={user}
                darkMode={darkMode}
                toggleDarkMode={setDarkMode}
            />

            <form className={style.divBox} onSubmit={handleSubmit}>
                <Grid container direction="row" justify="space-between">
                    <Grid className={style.section} item>
                        <Grid
                            container
                            direction="column"
                            justify="flex-end"
                            alignItems="center"
                        >
                            <Grid item>
                                <TextField
                                    onChange={(e) => setEmail(e.target.value)}
                                    label="Email"
                                    variant="outlined"
                                    className={style.input}
                                    type="text"
                                />
                            </Grid>

                            <Grid item>
                                <TextField
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    label="Senha"
                                    variant="outlined"
                                    className={style.input}
                                    type="password"
                                />
                            </Grid>

                            <Grid item>
                                <Button variant="contained" type="submit">
                                    Sign in
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Image
                            src="/assets/logo.svg"
                            height={275}
                            width={500}
                        />
                    </Grid>
                </Grid>
            </form>
            <MySnackBar
                open={isOpenSnackBar}
                message={snackBarMessage}
                severity={severitySnackBar}
                setClose={setIsOpenSnackBar}
            />
        </>
    );
};

export default SignInPage;
