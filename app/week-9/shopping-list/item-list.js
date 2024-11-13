"use client";
import { Item } from "./item.js";
import { useState } from "react";


export function ItemList({items, onItemSelect}) {
    const [sortBy, setSortBy] = useState("name");

    function Category(){
      setSortBy("category")
    }

    function Name(){
      setSortBy("name")

    }

    function ListDisplay(){

      if (sortBy == "name")
      {
        return (
          <div>
            <div className="flex gap-4 mb-5">
              <button className="border-2 p-1 bg-emerald-500 rounded px-3" onClick={Name}>Name</button>
              <button className="border-2 p-1 bg-emerald-800 rounded px-3" onClick={Category}>Category</button>
            </div> 
            <div>
            </div>
              {
                items.sort((a, b) => (a.name < b.name ? -1 : 1)).map((items) => (
                  <li key={items.id}>
                    <Item name={items.name} quantity={items.quantity} category={items.category} onSelect={onItemSelect}/> 
                  </li>               
                ))
              }
          </div>       
        )
      }

      if (sortBy == "category") 
      {
        return (
          <div>
            <div className="flex gap-4 mb-5">
              <button className="border-2 p-1 bg-emerald-800 rounded px-3" onClick={Name}>Name</button>
              <button className="border-2 p-1 bg-emerald-500 rounded px-3" onClick={Category}>Category</button>
            </div>
            {
              items.sort((a, b) => (a.category < b.category ? -1 : 1)).map((items) => (
                <li key={items.id}>
                  <Item name={items.name} quantity={items.quantity} category={items.category} onSelect={onItemSelect} /> 
                </li>               
              ))
            }
          </div>       
        )
      }

    }
    
    return (
      <div>
        <ListDisplay />     
      </div>  
    );
}