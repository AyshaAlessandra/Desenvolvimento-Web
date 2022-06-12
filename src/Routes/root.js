import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {RenderizacaoCondicional} from "../Pages/Aula 2/Exemplos/RenderizacaoCondicional";
import {AdicionarLista} from "../Pages/Aula 2/Exercicios/AdicionarLista";

export const Root = () =>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RenderizacaoCondicional/>}/>
                <Route path="/addlista" element={<AdicionarLista/>}/>
            </Routes>
        </BrowserRouter>
    )
}

