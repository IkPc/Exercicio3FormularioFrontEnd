import React, { useState } from "react";

export default (props) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [exibirSenha, setExibirSenha] = useState(false);

  function handleInput1Change(e) {
    setInput1(e.target.value);
  }

  function handleInput2Change(e) {
    setInput2(e.target.value);
  }

  function mostrarValores() {
    setExibirSenha(true);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor="">Senha: </label>
      <input type="text" value={input1} onChange={handleInput1Change} />
      <label htmlFor="">Confirme sua senha: </label>
      <input type="text" value={input2} onChange={handleInput2Change} />
      <br />
      <button onClick={mostrarValores}>Exibir senha</button>
      {exibirSenha && (
        <div>
          <p>Senha: {input1}</p>
          <p>Confirme sua senha: {input2}</p>
        </div>
      )}
    </div>
  );
};
