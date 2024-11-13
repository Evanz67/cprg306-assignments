"use client";
import { ItemList } from "./item-list.js";
import { NewItem } from "./new-item.js";
import { MealIdeas } from "./meal-ideas.js";
import { useState } from "react";
import item from "./items.json";


export function Shopping() {
  const [items, setItems] = useState(item);
  const [selectedItemName, setSelectedItemName] = useState('a');

  function HandleAddItem(newItem) {
    setItems((oldItem) => [...oldItem, newItem]);
  }

  function HandleItemSelect(name) {
    const newText = name.replace(/[^\x00-\x7F]/g, '');
    const newText2 = newText.split(",")[0];
    setSelectedItemName(newText2);
    
  }

  return (
    <main className="bg-purple-900">
      <h1 className="text-4xl font-bold pb-4">Shopping List</h1>
      <div>  
        <NewItem onAddItem={HandleAddItem} />  
        <MealIdeas ingredient={selectedItemName} />   
        <ItemList items={items} onItemSelect={HandleItemSelect} /> 
        
                    
      </div>       
    </main>
  );
}

