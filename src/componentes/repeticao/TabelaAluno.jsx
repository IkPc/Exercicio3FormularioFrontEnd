import React from "react";
import produtos from "../mocks/produtos";

export default props => {

const getLinhas = produtos.map((produto, i) =>{
    return (
        <tr key={i}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>{produto.preco}</td>
        </tr>
    )
});

return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
                
            </thead>
            <tbody>
                {getLinhas}
            </tbody>
        </table>
    </div>
)
}