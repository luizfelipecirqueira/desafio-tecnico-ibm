import React from "react";
import {Route, Routes} from "react-router-dom";
import { HomeContainer } from "../components/Home/HomeContainer";
import { ROUTHES_PATH } from "../utils/Routes_paths";

export const Rotas = () => {
    return (
        <Routes>
            <Route path={ROUTHES_PATH.HOME} element={<HomeContainer />} />
        </Routes>
    )
}