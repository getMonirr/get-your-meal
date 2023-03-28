import React, { useEffect, useState } from 'react';
import SingleMeal from '../SingleMeal/SingleMeal';

const Meals = () => {
    const [meals, setMeals] = useState([]);

    // load all meal by first latter
    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=apple')
        .then(res => res.json())
        .then(data => setMeals(data.drinks))
    },[]);

    // display meal in ui
    const allMealList = meals.map(meal => <SingleMeal key={meal.idDrink} meal={meal}></SingleMeal>)

    return (
        <div className='grid grid-cols-5 gap-12 container mx-auto my-20'>
            <div className='col-span-4'>
                <div className='grid grid-cols-3 gap-4'>
                {allMealList}
                </div>
            </div>
            <div>
                <h4>meals cart goes here</h4>
            </div>
        </div>
    );
};

export default Meals;