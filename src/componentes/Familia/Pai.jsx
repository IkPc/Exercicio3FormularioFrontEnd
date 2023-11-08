import React from "react";
import Filho from "./Filho";

export default props => {
    return (
        <div>
            <Filho nome='Teste 1' sobrenome={props.sobrenome}/>
            <Filho nome='Teste 2' sobrenome='direto'/>
            <Filho nome='Teste 3' {...props}/>
        </div>
    )
}