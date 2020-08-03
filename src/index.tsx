import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import RickState from "./context/rickState";
import { Router, RouteComponentProps } from "@reach/router";
import FavPage from "./components/pages/FavPage";
import Home from "./components/pages/Home";
import "@fortawesome/fontawesome-free/css/all.css";

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;

ReactDOM.render(
  <RickState>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<Home />} path="/" />
        <RouterPage pageComponent={<FavPage />} path="/faves" />
      </App>
    </Router>
  </RickState>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
