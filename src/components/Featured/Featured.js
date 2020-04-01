import React from 'react'
import './style.css'


const featured = () => {
    return( 
        <div>
        <h1 className='head'>SEIR 224 Favorite Dishes</h1>
        <div className='feat'>
        <div className='featrecipe'>
            <img className='featimage' src='https://www.edamam.com/web-img/9cf/9cf990ce1cdfeae0016f4d2f8aa05fc1.jpg' alt=''/>
            <h3>Fried Mac & Cheese Balls</h3>
            <p className='Cal'>Calories 1462</p>      
            <a className='instruct' href='http://norecipes.com/blog/2011/04/28/fried-mac-cheese-balls-recipe/'>Cooking Instructions</a>        
        </div>
        <div class="br"></div>
        <div className='featrecipe'>
            <img className='featimage' src='https://www.edamam.com/web-img/e79/e79bebd8218a220d87f2053235b4660e.jpg' alt=''/>
            <h3>Chocolate Mousse</h3>
            <p className='Cal'>Calories 2426</p>      
            <a className='instruct' href='http://www.davidlebovitz.com/2008/05/perfect-chocola/'>Cooking Instructions</a>        
        </div>
        <div class="br"></div>
        <div className='featrecipe'>
            <img className='featimage' src='https://www.edamam.com/web-img/38d/38d076d08d32d4b6a38804b436f84740.jpg' alt=''/>
            <h3>Rueben's Man-size Sarmie Recipe</h3>
            <p className='Cal'>Calories 2062</p>      
            <a className='instruct' href='http://www.grouprecipes.com/128306/ruebens-man-size-sarmie.html'>Cooking Instructions</a>        
        </div>
        <div class="br"></div>
        <div className='featrecipe'>
            <img className='featimage' src='https://www.edamam.com/web-img/0f7/0f7d603a3d2e5ab3e9447c296bdd0db1.jpg' alt=''/>
            <h3>Slow Cooker Thai Yellow Curry With Grass Fed Beef Brisket</h3>
            <p className='Cal'>Calories 5826</p>      
            <a className='instruct' href='http://nomnompaleo.com/post/7118904494/slow-cooker-thai-yellow-curry-with-grass-fed-beef'>Cooking Instructions</a>        
        </div>
        <div class="br"></div>
        <div className='featrecipe'>
            <img className='featimage' src='https://www.edamam.com/web-img/c26/c26730c23dd660147664c375eb296f58.jpg' alt=''/>
            <h3>Vegetable Pad Thai</h3>
            <p className='Cal'>Calories 1380</p>      
            <a className='instruct' href='http://www.marthastewart.com/337868/vegetable-pad-thai'>Cooking Instructions</a>        
        </div>
        <div class="br"></div>
        <div className='featrecipe'>
            <img className='featimage' src='https://www.edamam.com/web-img/405/405428f749f346e7a5092bbbed435b07.jpg' alt=''/>
            <h3>Mint Chocolate Chip Ice Cream</h3>
            <p className='Cal'>Calories 3504</p>      
            <a className='instruct' href='http://simplyrecipes.com/recipes/mint_chocolate_chip_ice_cream/'>Cooking Instructions</a>        
        </div>
        </div>
        </div>
    )
}

export default featured