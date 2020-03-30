import React from 'react'
import './style.css'

const breakfast = () => {
    return( 
        <div>
            <h1 className='head'>Breakfast</h1>
            <div className='break'>
                <div className='breakfastrecipe'>
                    <img className='breakimage' src='https://www.edamam.com/web-img/a02/a02d25abbb2e521a1d75b30068902bf6.jpg' alt=''/>
                    <h3>Crunchy French Toast</h3>      
                    <a className='instruct' href='http://www.simplyrecipes.com/recipes/crunchy_french_toast/'>Cooking Instructions</a> 
                </div>
                <div className='breakfastrecipe'>
                    <img className='breakimage' src='https://www.edamam.com/web-img/0df/0df935b0bd5a6980db01fa82945d0f8a.jpg' alt=''/>
                    <h3>Healthy Southwestern Oatmeal</h3>      
                    <a className='instruct' href='http://www.foodista.com/recipe/JMV2JK3H/healthy-southwestern-oatmeal'>Cooking Instructions</a> 
                </div>
                <div className='breakfastrecipe'>
                    <img className='breakimage' src='https://www.edamam.com/web-img/b14/b1443e6ff9f35142222d16cf0b559970.jpeg' alt=''/>
                    <h3>Chilaquiles Rojos</h3>      
                    <a className='instruct' href='https://www.foodnetwork.com/recipes/guy-fieri/chilaquiles-rojos-traditional-mexican-breakfast-dish-2261295'>Cooking Instructions</a> 
                </div>
            </div>
        </div>
    )
}

export default breakfast

