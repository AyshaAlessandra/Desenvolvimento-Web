import React, {useState} from "react";
import { IndiretaFilho } from "./IndiretaFilho";

export const IndiretaPai = () =>{

    const [pai, setPai] = useState(
        {
            nome:'?',
            idade:0,
            nerd: false
        })

    function informacaoDoPai(nome, idade, nerd){
            setPai({nome:nome, idade:idade, nerd:nerd})
        }

    return(
            <>
            <div>
                <h1>{pai.nome}</h1>
            </div>
            <div>
                <h2>{pai.idade}</h2>
            </div>
            <div>
                <h2>{pai.nerd ? "verdadeiro" : "Falso"}</h2>
            </div>
            <IndiretaFilho funcaoInformacao={informacaoDoPai}/>
            </>
        )
}