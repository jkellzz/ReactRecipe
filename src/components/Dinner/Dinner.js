import React from 'react'
import './style.css'

const dinner = () => {
    return( 
        <div>
                <h1 className='head'>Dinner Favorites</h1>
                <div className='din'>
                <div className='dinnerrecipe'>
                    <img className='dinnerimage' src='https://www.edamam.com/web-img/fb0/fb08a81382ac836ec709fee50d0f5123.jpeg' alt=''/>
                    <h3>Dinner Rolls with Chive Butter</h3>      
                    <a className='instruct' href='https://www.foodnetwork.com/recipes/robin-miller/dinner-rolls-with-chive-butter-recipe-1946349'>Cooking Instructions</a> 
            </div>
            <div className='dinnerrecipe'>
                    <img className='dinnerimage' src='https://www.edamam.com/web-img/99f/99f8920aeba9ce842b10936f5db4b0ce.jpg' alt=''/>
                    <h3>Porcini-Crusted Filet Mignon</h3>      
                    <a className='instruct' href='http://www.bonappetit.com/recipe/porcini-crusted-filet-mignon-with-fresh-herb-butter'>Cooking Instructions</a> 
            </div>
            <div className='dinnerrecipe'>
                    <img className='dinnerimage' src='https://www.edamam.com/web-img/5fe/5fe80cde6149fbf1a33835bc7e5a9d84.JPG' alt=''/>
                    <h3>Lobster Stew</h3>      
                    <a className='instruct' href='http://zesterdaily.com/cooking/thanksgiving-lobster-stew/'>Cooking Instructions</a> 
            </div>
            </div>
            </div>
    )
}

export default dinner