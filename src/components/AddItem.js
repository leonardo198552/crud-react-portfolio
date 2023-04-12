import React, { useState } from "react";


function AddItem({ addItem }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(value);
    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AddItem;