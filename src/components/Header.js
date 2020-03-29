import React, {useState} from 'react';



const Header = () => {
  const [search, setSearch] = useState('')

  const updateSearch = e => {
  setSearch(e.target.value)}
  console.log(search)

  return(
    <div className='App'>
     <h1>I want to make...</h1>
     <form className='search-form'>
     <input className='search-bar' type='text' 
     value={search} onChange={updateSearch}/>
     <button className='search-button' type='submit'>Search</button>
   </form>
   </div>)

  }

export default Header
