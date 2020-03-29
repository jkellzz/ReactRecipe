import React from 'react'

const Recipe = ({title,calories,image,ingredients}) => {
    return( 
        <div>
            <h1>{title}</h1>
            <img src={image} alt=''/>
            <p>Calories {calories}</p>      
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                )
                    )}
            
        </div>
    )
}

export default Recipe