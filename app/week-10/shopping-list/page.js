"use client";
import { ItemList } from "./item-list.js";
import { NewItem } from "./new-item.js";
import { MealIdeas } from "./meal-ideas.js";
import { useState, useEffect } from "react";
import { getItems, addItem } from "../_services/shopping-list-service.js";


export function Shopping({user}) {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('a');

  function HandleAddItem(newItem) {
    const addedItem = addItem(user.uid, newItem);
    const addedItemId = {...newItem, id: addedItem};
    setItems((oldItem) => [...oldItem, addedItemId]);
  }

  function HandleItemSelect(name) {
    const newText = name.replace(/[^\x00-\x7F]/g, '');
    const newText2 = newText.split(",")[0];
    setSelectedItemName(newText2);
    
  }

  async function loadItems() {
    try {
      const itemGet = await getItems(user.uid);
      setItems(itemGet);

    } catch (e) {
        console.log(e);
    }
  }

  useEffect(() => {
    loadItems();
  }, []);

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

