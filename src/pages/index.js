import React from "react";
import Link from "next/link";

import Login from "./login";
import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

const routes = {
    home: "/",
    login: "/login",
};

const history = createMemoryHistory();

const Home = ({ children }) => {
    return <h1>dffdfdf</h1>;
};

export default Home;
