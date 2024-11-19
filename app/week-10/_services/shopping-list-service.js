import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    const items = [];

    try {
        const shoppingList = query(collection(db, "users", userId, "items"));
        const querySnapshot = await getDocs(shoppingList);

        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        
    } catch (e) {
        console.log(e);
    }
    return items; 

}

export async function addItem(userId, item) {

    try {
        const docRef = await addDoc(collection(db, "users", userId, "items"), item);         
        return docRef.id;
    } catch (e) {
        console.log(e);         
    }
}