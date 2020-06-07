import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback="lll">
        <Switch>
          <Route path="/Privacy">
            <App name="Privacy" />
          </Route>
          <Route path="/Index">
            <App name="Index" />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
