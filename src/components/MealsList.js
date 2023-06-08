import React,{useContext}from "react";
import { MealsContext } from "./MealsProvider";

const MealsList = () => {
const{meals,tickMeal}=useContext(MealsContext)
const handleCheckboxChange=(mealId)=>{
 tickMeal(mealId)
}
    return (
        <div>
            <h2>Meals:</h2>
            <ul>
                {meals.map(meal=>(
                    <li key={meal.id}>
                    <input 
                        type="checkbox"
                        checked={meal.ticked??false}
                        onChange={()=>handleCheckboxChange(meal.id)}
                    />
                    mealName
                </li>
                ))}
                
            </ul>
        </div>
    )
}

export default MealsList;