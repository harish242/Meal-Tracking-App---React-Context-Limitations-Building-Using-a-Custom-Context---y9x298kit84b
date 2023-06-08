import React, {useState,createContext} from "react";

const todaysMeals = [
    { id: 1, name: 'Baked Beans' },
    { id: 2, name: 'Baked Sweet Potatoes' },
    { id: 3, name: 'Baked Potatoes' },
]
const MealsContext=createContext()

const MealsProvider = ({children}) => {
    const [meals, setMeals] = useState(todaysMeals);

    const tickMeal = (MealId) => {
        setMeals((prevMeals)=>(
         prevMeals.map(meal=>(
            meal.id===MealId?{...meal,ticked:!meal.ticked}:meal
         ))
        ))
    }
    
    const remaingMeal=meals.filter(meal=>!meal.ticked)
    const remaingMeals=remaingMeal.length
    console.log(remaingMeals)

    return (
        <div>
            <MealsContext.Provider value={{meals,tickMeal,remaingMeals}}>
            {children}
            </MealsContext.Provider>
        </div>
    )
};
export {MealsContext}
export default MealsProvider;