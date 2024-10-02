import Link from "next/link";
import { ItemList } from "./item-list.js";

export default function Page() {
    return (
      <main className="bg-purple-900">
        <h1 className="text-4xl font-bold pb-4">Shopping List</h1>
        <div>           
            <ItemList />
        </div>       
      </main>
    );
}