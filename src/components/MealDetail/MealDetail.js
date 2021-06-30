import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const { id } = useParams();
    const [mealData, setMealData] = useState([]);
    const { strMeal, strMealThumb, strArea, strCategory, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13} = mealData;

    useEffect(() => {
        fetch(`https:www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setMealData(data.meals[0]))
    }, [id])

    return (
             <div style={{ background: 'whitesmoke' }}>
                 <div className='container'>
                     <div style={{ textAlign: 'center', padding: '50px' }}>
                         <img style={{ width: '400px', border: '10px double #c5c5c5' }} src={strMealThumb} alt="" />
                     </div>
                     <div style={{ textAlign: 'center' }}>
                         <h1>This is <span style={{ color: 'red' }}>{strMeal}</span></h1>
                         <h3>{strMeal} is {strArea} food.</h3>
                         <h6 style={{ color: 'skyblue' }}>Category: {strCategory}</h6>
                     </div>
                     <h6>Ingredients:</h6>
                     <ul>
                         <li>{strIngredient1}</li>
                         <li>{strIngredient2}</li>
                         <li>{strIngredient3}</li>
                         <li>{strIngredient4}</li>
                         <li>{strIngredient5}</li>
                         <li>{strIngredient6}</li>
                         <li>{strIngredient7}</li>
                         <li>{strIngredient8}</li>
                         <li>{strIngredient9}</li>
                         <li>{strIngredient10}</li>
                         <li>{strIngredient11}</li>
                         <li>{strIngredient12}</li>
                         <li>{strIngredient13}</li>
                     </ul>
                     <p style={{ textAlign: 'justify' }}>{strInstructions}</p>
                 </div>
             </div> 
    );
};

export default MealDetail;