import './App.css';
import React from "react";
import Card from './componentes/layout/Card';
import Primeiro from './componentes/basicos/Primeiro'
import PrimeiroProps from "./componentes/basicos/PrimeiroProps";
import Fragmento from './componentes/basicos/Fragmento';
import Pai from './componentes/Familia/Pai';
import Padrasto from './componentes/Familia/Padrasto';
import Filho from './componentes/Familia/Filho';
import PaiExercicio from './componentes/exercicio#01/PaiExercicio';
import DiretaPai from './componentes/comunicao/DiretaPai';
import IndiretaPai from './componentes/comunicao/IndiretaPai';
import ListAlunos from './componentes/repeticao/ListAlunos';
import TabelaAluno from './componentes/repeticao/TabelaAluno';
import Input from './componentes/formulario/Input';
import Password from './componentes/formulario/Password';

export default () => {

    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#12 - Password" color='#A9A9A9'>
                   <Password/>
                </Card>
                <Card titulo="#11 - Formulario" color='#8A2BE2'>
                   <Input titulo="Leitura"/>
                </Card>
                <Card titulo="#10 - Exercicio #02" color='#A52A2A'>
                   <TabelaAluno/>
                </Card>
                <Card titulo="#09 - Repetição" color='#008B8B'>
                   <ListAlunos/>
                </Card>
                <Card titulo="#08 - Comunicação Indireta" color='#FF7F50'>
                   <IndiretaPai/>
                </Card>
                <Card titulo="#07 - Comunicação Direta" color='#7FFF00'>
                   <DiretaPai/>
                </Card>
                <Card titulo="#06 - Exercicio #01" color='#7FFFD4'>
                   <PaiExercicio/>
                </Card>
                <Card titulo="#05 - Padastro e Filho" color='#006400'>
                    <Padrasto sobrenome="Uniesp">
                        <Filho nome="Teste Padrastro 1"/>
                        <Filho nome="Teste Padrastro 2"/>
                        <Filho nome="Teste Padrastro 3"/>
                    </Padrasto>
                </Card>
                <Card titulo="#04 - Pai e Filho" color='#DC143C'>
                    <Pai sobrenome="Uniesp"/>
                </Card>
                <Card titulo="#03 - React Fragment" color='#8A2BE2'>
                    <Fragmento/>
                </Card>
                <Card titulo="#02 - Componente com props" color='#000000'>
                    <PrimeiroProps olaMundo="Ola mundo"/>
                </Card>
                <Card titulo="#01 - Primeiro Componente" color='#A52A2A'>
                    <Primeiro/>
                </Card>
            </div>
            
        </div>
    )

}