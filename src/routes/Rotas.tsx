import React from "react";
import {Route, Routes} from "react-router-dom";
import { Description } from "../components/Description/Description";
import { Home } from "../components/Home/Home";
import { ROUTHES_PATH } from "../utils/Routes_paths";

export const Rotas = () => {
    return (
        <Routes>
            <Route path={ROUTHES_PATH.HOME} element={<Home />} />
            <Route path={ROUTHES_PATH.DESCRIPTION} element={<Description />} />
        </Routes>
    )
}