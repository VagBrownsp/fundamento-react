import React from "react";

export default function ComParametro(props) {
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";
  const notaInt = Math.ceil(props.nota);

  return (
    <>
      <h2>{props.titulo}</h2>
      <p>
        <strong>
          {props.aluno}
          tem nota
        </strong>
        <strong> {notaInt} </strong>e esta
        <strong> {status} </strong>
      </p>
    </>
  );
}
