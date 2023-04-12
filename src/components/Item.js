import React, { useState } from "react";

function Item({ index, item, editItem, deleteItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(item);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editItem(index, newValue);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteItem(index);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setNewValue(event.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input type="text" value
                ={newValue} onChange={handleChange} required={true}/>
                <button onClick={handleSave}>Salvar</button>
                <button onClick={handleCancel}>Cancelar</button>
              </>
            ) : (
              <>
                <span>{item}</span>
                <button onClick={handleEdit}>Editar</button>
                <button onClick={handleDelete}>Excluir</button>
              </>
            )}
          </div>
          
);
}

export default Item;