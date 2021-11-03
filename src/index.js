import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.css";
import "github-fork-ribbon-css/gh-fork-ribbon.css";
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(<Provider store={store}>
            <App />
        </Provider>
    , document.getElementById("root"));
