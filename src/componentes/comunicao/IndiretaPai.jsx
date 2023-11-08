import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {
    const [nome, setNome] = useState("?");
    const [idade, setIdade] = useState(0);
    const [aluno, setAluno] = useState(false);

    function forneceDados(nomeF, idadeF, alunoF) {
        
        setNome(nomeF);
        setIdade(idadeF);
        setAluno(alunoF);
    }

    return (
        
        <div>
            <div>
                <span> {nome} </span>
                <span> {idade} </span>
                <span> {aluno ? 'Verdadeiro' : 'Falso'} </span>
            </div>
            <IndiretaFilho quandoClicar={forneceDados}/>
        </div>
    )
}