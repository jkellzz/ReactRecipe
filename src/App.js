import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
  const APP_ID = 'f2c5ef65'
  const APP_KEY = 'e4fdce8ff93a647ccbf1cd56de0ed3d1'


  // useEffect( () => {
  //   getRecipes()
  // }, [])

  // const getRecipes = async () => {
  //   const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
  //   const data = await response.json()
  //   console.log(data)
  // }


  return(
    <div className='App'>
     <h1>I want to make...</h1>
     <form className='search-form'>
       <input className='search-bar' type='text'/>
       <button className='search-button' type='submit'>Search</button>
     </form>
    </div>
  )
}

export default App;