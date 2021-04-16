import { BrowserRouter as Router } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import {GlobalStyle} from './GlobalStyle'
import Header from './Components/Header/Header'
import Axios from 'axios'
import Recipe from './Components/Recipe/Recipe'



function App() {

  const [search, setSearch] = useState('')
  const [recipes, setRecipes] = useState([])

  const API_ID = '19393b59'
  const API_KEY = '26a4cf87bb69b502ac2dff0c7f02bd3d'

  useEffect(async () => {
    
    await getRecipes()
  }, [])

  const getRecipes = async () =>{

    const result = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`)
    setRecipes(result.data.hits)
  }

  const onInputChange = (e) => {
    setSearch(e.target.value)
  }

  const onSearchClick = (e) =>{
    getRecipes()
  }

    return ( 
      <Router>
      <GlobalStyle/>
      <Header 
      
      search={search} 
      onInputChange={onInputChange}
      onSearchClick={onSearchClick}/>
      <div className='container'>
      <Recipe recipes={recipes}/>
      </div>
      </Router>
    );
    }
      export default App;
