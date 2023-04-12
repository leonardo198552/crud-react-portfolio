import { useState, useEffect } from "react";
import api from "./api";

const CarForm = ({ formData, onCreate, onUpdate }) => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [preco, setPreco] = useState("");

  useEffect(() => {
    if (formData) {
      setMarca(formData.marca);
      setModelo(formData.modelo);
      setAno(formData.ano);
      setPreco(formData.preco);
    }
  }, [formData]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData) {
      await api.put(`/carros/${formData.id}`, {
        marca,
        modelo,
        ano,
        preco,
      });
      onUpdate();
    } else {
      await api.post("/carros", {
        marca,
        modelo,
        ano,
        preco,
      });
      onCreate();
    }

    setMarca("");
    setModelo("");
    setAno("");
    setPreco("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Marca"
        value={marca}
        onChange={(event) => setMarca(event.target.value)}
      />
      <input
        type="text"
        placeholder="Modelo"
        value={modelo}
        onChange={(event) => setModelo(event.target.value)}
      />
      <input
        type="text"
        placeholder="Ano"
        value={ano}
        onChange={(event) => setAno(event.target.value)}
      />
      <input
        type="text"
        placeholder="Preço"
        value={preco}
        onChange={(event) => setPreco(event.target.value)}
      />
      <button type="submit">{formData ? "Atualizar" : "Adicionar"}</button>
    </form>
  );
};

export default CarForm;
