import React from 'react'
import './style.css'

const lunch = () => {
        return( 
            <div>
                <h1 className='head'>Lunch Favorites</h1>
                <div className='lun'>
                <div className='lunchrecipe'>
                    <img className='lunchimage' src='https://www.edamam.com/web-img/77d/77d71d0e0deec9db51434fe1effba84d.jpg' alt=''/>
                    <h3>The Pastrami Burger Bomb Recipe</h3>      
                    <a className='instruct' href='http://www.seriouseats.com/recipes/2010/08/the-pastrami-burger-bomb-recipe.html'>Cooking Instructions</a> 
            </div>
            <div className='lunchrecipe'>
                    <img className='lunchimage' src='https://www.edamam.com/web-img/f21/f21e3c4abcaae493c5b766b2781692ca.jpg' alt=''/>
                    <h3>Northern Fried Chicken</h3>      
                    <a className='instruct' href='http://www.seriouseats.com/recipes/2010/04/northern-fried-chicken-recipe.html'>Cooking Instructions</a> 
            </div>
            <div className='lunchrecipe'>
                    <img className='lunchimage' src='https://www.edamam.com/web-img/77a/77a79534149036235152fa0c40ecf02b' alt=''/>
                    <h3>Crispy Potato Mojos</h3>      
                    <a className='instruct' href='http://pinchofyum.com/crispy-potato-mojos'>Cooking Instructions</a> 
            </div>
            </div>
            </div>
    )
}

export default lunch