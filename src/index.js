import React from "react";
import {createRoot} from "react-dom/client"
import { BrowserRouter } from "react-router-dom";

import "./styles/index.css"

import App from "./components/App/App"
import Header from "./components/Header/Header";


createRoot(document.getElementById("root")).render(
<BrowserRouter>
<App />
</BrowserRouter>);