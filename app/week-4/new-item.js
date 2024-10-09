"use client";
import { useState } from "react";

export function NewItem(){
    const [quantity, setQuantity] = useState(1);

    function Increment(){
        if (quantity < 20){
            setQuantity(quantity + 1);
        }       
    }

    function Decrement(){
        if (quantity > 0){
            setQuantity(quantity - 1);
        }
    }

    return(
        <div className="flex flex-col items-center mt-10">
            <div className="border-none bg-emerald-800 rounded p-3">
                <div className="flex justify-center">
                    <p>{quantity}</p>
                </div>
                <div className="flex gap-2 mt-3">
                    <button className="border-2 p-1 bg-emerald-700 rounded" onClick={Increment}>Increment</button>
                    <button className="border-2 p-1 bg-emerald-700 rounded" onClick={Decrement}>Decrement</button>               
                </div>
            </div> 
        </div>       
    );
}
