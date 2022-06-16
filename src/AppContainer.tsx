import { BrowserRouter as Router } from "react-router-dom";
import {Rotas} from "./routes/Rotas";
import React from "react";

export const AppContainer = () => {
    return (
        <Router>
            <Rotas />
        </Router>
    )
}