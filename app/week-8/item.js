export function Item({ name, quantity, category, onSelect}) {

    return (

        <div onClick={() => onSelect(name)} className="bg-purple-700 pb-4 my-2 border-2 rounded border-purple-900">
            <p className="text-2xl font-bold">{name}</p>  
            <p className="italic">Buy {quantity} in {category}</p>
        </div>
    );

}