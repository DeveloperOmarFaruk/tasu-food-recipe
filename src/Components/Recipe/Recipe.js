import React from 'react'
import Wobble from 'react-reveal/Wobble'
import './Recipe.css'
import RecipeData from './RecipeData'


const Recipe = (props) => {

const { recipes } = props

    return (
        <>
        <div className=''>
        <div className='row'>
            {
                recipes.map(recipe =>(
                <RecipeData
                key={Math.random() * 100}
                name={recipe.recipe.label}
                image={recipe.recipe.image}
                ingredientLines={recipe.recipe.ingredientLines}
                />
                ))
            }
        </div>
        <footer className="footer-container">
        <Wobble>
        <h3 className="footer">Developed By &#10084;&#65039; Developer.OmarFaruk</h3>
        </Wobble>
        </footer>
   
        </div>
        </>
    )
}

export default Recipe
