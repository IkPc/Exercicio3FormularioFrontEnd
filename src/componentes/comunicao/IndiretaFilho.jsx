import React from "react";

export default props => {
const callBack = props.quandoClicar;
const gerarIdade = _ => parseInt(Math.random() * (20)) + 50;
const gerarBoolean = _ => Math.random() >= 0.5; 


    return (
        <div>
            <button onClick={_=> {callBack('Aluno 1', gerarIdade, gerarBoolean)}}>
                Fornece Dados
            </button>
        </div>
    )
}