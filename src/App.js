import React, { useState } from "react";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";


function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const editItem = (index, newValue) => {
    const newItems = [...items];
    newItems[index] = newValue;
    setItems(newItems);
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="App">
      <h1>CRUD Portfolio Em React.js</h1>
      <AddItem addItem={addItem} />
      <ItemList
        items={items}
        editItem={editItem}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
