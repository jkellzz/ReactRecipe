import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header'


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
    <div>
    <Header/>
     </div>
  )
}

export default App;