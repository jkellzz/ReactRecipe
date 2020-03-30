import React from 'react'
import './Recipestyle.css'

const Recipe = ({title,calories,image,ingredients,url}) => {
    return( 
        <div className='recipe'>
            <h1>{title}</h1>
            <img className='recimage' src={image} alt=''/>
            <p className='Cal'>Calories {Math.round(calories)}</p>  
            <p>For cooking instructions</p> 
            <a className='instruct' href={url}>Click Here</a> 
            <p></p>
                {ingredients.map(ingredient => (
                    <li className='list'>{ingredient.text}</li>
                )
                    )}
        </div>
    )
}

export default Recipe