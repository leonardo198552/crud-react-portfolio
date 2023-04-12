import React from "react";
import Item from "./Item";


function ItemList({ items, editItem, deleteItem }) {
  return (
    <div>
      {items.map((item, index) => (
        <Item
          key={index}
          index={index}
          item={item}
          editItem={editItem}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
}

export default ItemList;
