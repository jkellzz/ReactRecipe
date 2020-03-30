import React from 'react'
import './Recipestyle.css'

const Recipe = ({title,calories,image,ingredients}) => {
    return( 
        <div className='recipe'>
            <h1>{title}</h1>
            <img className='image' src={image} alt=''/>
            <p className='Cal'>Calories {Math.round(calories)}</p>      
                {ingredients.map(ingredient => (
                    <li className='list'>{ingredient.text}</li>
                )
                    )}
        </div>
    )
}

export default Recipe