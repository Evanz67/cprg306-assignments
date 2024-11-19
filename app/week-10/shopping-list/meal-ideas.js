"use client"
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    } catch (e) {
        console.log(e.message);
    }  
}

export function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        try {
            setMeals(await fetchMealIdeas(ingredient));
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
        
    }, [ingredient]);
    console.log(meals);

    if (meals === null) {
        return (
            <div className="bg-purple-700 pb-4 my-2 border-2 rounded border-purple-900">
            <h1 className="text-2xl font-bold">Meal Ideas</h1>
            <p>Click an items to see meal ideas</p>
            </div>
        )
    }

    return (
        <div className="bg-purple-700 pb-4 my-2 border-2 rounded border-purple-900">
            <h1 className="text-2xl font-bold">Meal Ideas</h1>
            {meals.map((meal) => (
                <li key={meal.idMeal}>
                    {meal.strMeal}
                </li>
            ))}
        </div>
    )
}

