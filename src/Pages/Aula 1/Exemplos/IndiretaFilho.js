import React from "react";

export const IndiretaFilho = (props) =>{
    return(
        <>
        <h3>Filho</h3>
        <button onClick={() => props.funcaoInformacao('Carlos', 54, false)}>Pegar as informações do pai</button>
        </>
    )
}