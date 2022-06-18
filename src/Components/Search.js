import React from 'react'
import { useState } from 'react'

import Card2 from './Card2'

function Search() {
  var number = []
  for(var i=1;i<=10;i++){
    number.push(i)
  }
    //https://api.spoonacular.com/recipes/complexSearch?query=pizza&number=3&apiKey=73c21bb249134808b1aa3eff1c73147c
  const [search, setSearch] = useState({
    query: '',
    number: 1
  })

  const [searchRecipes, setSearchRecipes] = useState([])

  const formHandler = (e)=> {
    e.preventDefault()
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${search.query}&number=${search.number}&apiKey=73c21bb249134808b1aa3eff1c73147c`)
    .then((res)=>res.json())
    .then((data)=> setSearchRecipes(data.results.map((item)=>{
      return(
        <Card2
        key={item.id}
        title={item.title}
        image={item.image}
      />)
    })))
    .catch((error)=> console.log(error))
  }

  return (
    <div>
        <div className="container-fluid bg-image">
            <form action="" className='row justify-content-center p-5 m-auto'>
                <h2 className='text-center'>Search Recipes Of Foods</h2>
                <input className="form-control mb-3" type="text" 
                        placeholder="Search Recipes"
                        required 
                        onChange={(e)=>setSearch({...search, query:e.target.value})}
                        ></input>
                <h5 className='w-50 '>Number of recipes:</h5>
                <select className='w-25' name="number" id="" 
                        onChange={(e)=>setSearch({...search, number:e.target.value})}
                        >
                  {
                    number.map((item, index)=> <option key={index} value={item}>{item}</option>)
                  }

                </select>
                <button className='btn btn-warning w-50 mt-3 fs-5' 
                        onClick={formHandler}
                        >Search</button>
            </form>
        </div>
        {search.query !== '' ? 
        <><div className='container bg-dark text-light fs-5 p-3 mt-5'>Result for Search "{search.query}"</div><div className="container shadow rounded p-5 bg-light">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {searchRecipes}
          </div>
        </div></> : ''  
        }

        
    </div>
  )
}

export default Search