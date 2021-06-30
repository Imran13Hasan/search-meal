import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Home.css'

const Home = () => {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [search])

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div className='container-home'>
            <h1 className='header-title'>Food Court Village <span>🍽</span> </h1>
            <input className='search-field' onChange={handleChange} type="text" placeholder="I'm feeling hungry.. ☹" />
            <div className='container-meal'>
                {
                    meals?.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Home;