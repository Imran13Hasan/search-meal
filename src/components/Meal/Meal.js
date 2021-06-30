import React from 'react';
import { useHistory } from 'react-router-dom';
import './Meal.css'

const Meal = (props) => {
    const { idMeal, strMealThumb, strMeal, strArea } = props.meal;

    const history = useHistory();

    const handleButton = () => {
        const url = `/meal/${idMeal}`
        history.push(url)
    }

    return (
        <div className="item-container">
            <div className="image-container">
                <img src={strMealThumb} alt="" />
            </div>
            <div className="details-container">
                <h3>{strMeal}</h3>
                <p>{strArea}</p>
            </div>
            <button onClick={() => handleButton(idMeal)} className="details-btn">Details</button>
        </div>
    );
};

export default Meal;