import React from "react";
import {Route, Routes} from "react-router-dom";
import { ROUTHES_PATH } from "../utils/Routes_paths";

export const Rotas = () => {
    return (
        <Routes>
            <Route path={ROUTHES_PATH.HOME} element={<><h1>oi</h1></>} />
        </Routes>
    )
}