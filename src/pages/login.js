import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { defaultStyles } from "../styles";
import { Button, Grid, TextField, Typography } from "@material-ui/core";

const SignInPage = () => {
    const style = defaultStyles();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:3000/api/sessions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            return router.push("/main");
        }
    };

    return (

        <form className={style.divBox} onSubmit={handleSubmit}>
            <Grid container direction="row" justify="space-between">
                <Grid className={style.section} item>
                    <Grid container direction="column" justify="flex-end" alignItems="center">
                        <Grid item>
                            <TextField
                                onChange={(e) => setEmail(e.target.value)}
                                label="Email"
                                variant="outlined"
                                className={style.input}
                                type="text" />
                        </Grid>

                        <Grid item>
                            <TextField
                                onChange={(e) => setPassword(e.target.value)}
                                label="Senha"
                                variant="outlined"
                                className={style.input}
                                type="password" />
                        </Grid>

                        <Grid item>
                            <Button variant="contained" type="submit">Sign in</Button>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item>
                    <Image src="/assets/logo.svg" height={275} width={500} />
                </Grid>
            </Grid>
        </form>
    );
};

export default SignInPage;