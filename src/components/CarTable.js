import React from "react";

const CarTable = ({ carros, onDelete, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Ano</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {carros.map((carro) => (
          <tr key={carro.id}>
            <td>{carro.marca}</td>
            <td>{carro.modelo}</td>
            <td>{carro.ano}</td>
            <td>{carro.preco}</td>
            <td>
              <button onClick={() => onEdit(carro)}>Editar</button>
              <button onClick={() => onDelete(carro.id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CarTable;

  