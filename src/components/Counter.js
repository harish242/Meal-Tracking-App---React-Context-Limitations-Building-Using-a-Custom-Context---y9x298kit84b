import React,{useContext} from "react";
import { MealsContext } from "./MealsProvider";

const Counter = () => {
    const{meals,remaingMeals}=useContext(MealsContext)
   

    return (
        <div>
            <h3>Meals Remaining: {remaingMeals}</h3>
        </div>
    )
}

export default Counter;