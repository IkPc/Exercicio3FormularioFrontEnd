import React from "react";
import alunos from "../mocks/alunos";

export default props => {

    const list = alunos.map((aluno, i) =>{
        return (
            <li key={i}>
                {aluno.id} - {aluno.nome} - {aluno.nota}
            </li>
        )
    });
    

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
}