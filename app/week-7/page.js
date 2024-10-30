"use client";
import { ItemList } from "./item-list.js";
import { NewItem } from "./new-item.js";
import { useState } from "react";
import item from "./items.json";


export default function Page() {
  const [items, setItems] = useState(item);

  function HandleAddItem(newItem) {
    setItems((oldItem) => [...oldItem, newItem]);
  }

  return (
    <main className="bg-purple-900">
      <h1 className="text-4xl font-bold pb-4">Shopping List</h1>
      <div>  
        <NewItem onAddItem={HandleAddItem} />  
        <ItemList items={items} />                  
      </div>       
    </main>
  );
}

