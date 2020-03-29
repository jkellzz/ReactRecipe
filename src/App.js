import React, {useEffect, useState} from 'react';
import Recipe from './components/Recipe'
import './App.css';
import Header from './components/Header'


const App = () => {
  const APP_ID = 'f2c5ef65'
  const APP_KEY = 'e4fdce8ff93a647ccbf1cd56de0ed3d1'

  const [recipes, setRecipes] = useState([])

  // useEffect( () => {
  //   getRecipes()
  // }, [])

  // const getRecipes = async () => {
  //   const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
  //   const data = await response.json()
  //   setRecipes(data.hits)
  //   console.log(data.hits)
  // }


  return(
    <div>
    <Header/>
    {recipes.map(recipe => (
          <Recipe title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}/>
    ))}
     </div>
  )
}

export default App;