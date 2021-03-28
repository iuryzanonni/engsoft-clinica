import { Typography } from "@material-ui/core";
import React, { useState } from "react";

const Login = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>D1SN2Y_M3D Login</h1>
            <button onClick={() => setCount(count + 1)}>CLIQUE</button>
            {count}
            <Typography variant="h3">oi, bom dia!!</Typography>
        </div>
    );
};

export default Login;
