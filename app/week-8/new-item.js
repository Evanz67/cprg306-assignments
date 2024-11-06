"use client";
import { useState } from "react";

export function NewItem({onAddItem}){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");
    

    function Increment(event){
        event.preventDefault();
        if (quantity < 20){
            setQuantity(quantity + 1);
        }       
    }

    function Decrement(event){
        event.preventDefault();
        if (quantity > 0){
            setQuantity(quantity - 1);
        }
    }

    function Name(event){
        setName(event.target.value);
    }

    function Category(event){
        setCategory(event.target.value);
    }

    function SubmitEvent(event){
        //alert("Added item: " + name + ", Quantity: " + quantity + ", Category: " + category);
        event.preventDefault();
        onAddItem({id: "1h2GJKA12gkHG31h1J", name: name, quantity: quantity, category: category});
    }

    return(
        <div className="flex mb-10 mt-4">
            <div className="border-none bg-purple-700 rounded p-3">   
                <form onSubmit={SubmitEvent}>
                    <input type="text" placeholder="Item name" value={name} required onChange={Name} className="rounded mb-3 text-neutral-950"></input>
                    <p className="border-2 text-neutral-950 bg-white">Quantity: {quantity}</p>
                    <div className="flex gap-4 mt-3 ">                       
                        <button className="border-2 p-1 bg-gray-600 rounded px-3" onClick={Increment}>+</button>
                        <button className="border-2 p-1 bg-gray-600 rounded px-3" onClick={Decrement}>-</button>  
                         
                        <label className="text-neutral-950 content-center ml-6">
                            <select name="category" defaultValue="Produce" onChange={Category} className="p-1">
                              <option value="Produce">Produce</option>
                              <option value="Dairy">Dairy</option>
                              <option value="Bakery">Bakery</option>
                              <option value="Meat">Meat</option>
                              <option value="Frozen Foods">Frozen Foods</option>
                              <option value="Canned Goods">Canned Goods</option>
                              <option value="Dry Goods">Dry Goods</option>
                              <option value="Beverages">Beverages</option>
                              <option value="Snacks">Snacks</option>
                              <option value="Household">Household</option>
                              <option value="Other">Other</option>
                            </select>
                        </label>             
                    </div>
                    <div className="flex flex-col items-center">
                        <input type="submit" value="Submit" className="border-2 rounded text-neutral-950 bg-white mt-2"></input>   
                    </div>                                 
                </form>  
                  
            </div>    
        </div>       
    );
}
