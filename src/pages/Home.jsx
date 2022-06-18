import React from 'react'
import { useState, useEffect } from 'react'


import Search from '../Components/Search'
import Card from '../Components/Card'
// https://api.spoonacular.com/recipes/complexSearch?query=pizza&number=4&apiKey=73c21bb249134808b1aa3eff1c73147c
// https://api.spoonacular.com/recipes/complexSearch?query=pizza&number=4&apiKey=1dd9e7d17ad248c9b12789ac1984d570

function Home() {
  
  const [randomRecipes, setRandomRecipes] = useState([])
  
  useEffect(()=> {
    fetch('https://api.spoonacular.com/recipes/random?number=6&apiKey=73c21bb249134808b1aa3eff1c73147c')
    .then(response => response.json())
    .then(data => setRandomRecipes(data.recipes.map((item)=>{
      return(
        <Card
        key={item.id}
        title={item.title}
        image={item.image}
        instructions={item.instructions}
      />)
    })))
    .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <Search/>
      <div className=' py-5 '>
        <div className='container bg-dark text-light fs-5 p-3'>New Recipes</div>
        <div className="container p-5 shadow rounded bg-light">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {randomRecipes}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home