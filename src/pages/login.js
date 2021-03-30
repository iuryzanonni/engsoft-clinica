import { Typography } from "@material-ui/core";
import React, { useState } from "react";

export const getServerSideProps = () => {
    console.log("aaaaa");
    return { props: { "Teste": "Server side computing" } }
}
//https://www.thomasmaximini.com/blog/next-js-auth
const Login = (props) => {
    const [count, setCount] = useState(0);
    const deuBom = props.Teste;

    const loginHandle = async () => {
        /**
         * TODO: save data on cookies
         */
    }

    return (
        <div>
            <h1>D1SN2Y_M3D Login</h1>
            <button onClick={() => setCount(count + 1)}>CLIQUE</button>
            {count}
            <Typography variant="h3">oi, bom dia!!</Typography>
            <Typography>{"------->"}{deuBom}{"<-------"}</Typography>
        </div>
    );
};

export default Login;
