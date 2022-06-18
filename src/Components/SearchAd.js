import React from 'react'

function SearchAd() {

  var number = []
  for(var i=1;i<=10;i++){
    number.push(i)
  }

  return (
    <div>
        <form action="" className='AdForm row justify-content-center p-5 m-auto'>
                <h3 className='text-center'>Search Recipes By Ingredients</h3>
                <input className="form-control mb-3" type="text" placeholder="Enter An Ingredient" ></input>
                <input className="form-control mb-3" type="text" placeholder="Enter An Ingredient" ></input>
                <input className="form-control mb-3" type="text" placeholder="Enter An Ingredient" ></input>
                <h5 className='w-50 '>Number of recipes:</h5>
                <select className='w-25' name="number" id="">
                  {
                    number.map((item, index)=> <option key={index} value={item}>{item}</option>)
                  }
                </select>
                <button className='btn btn-warning w-50 mt-3 fs-5'>Search</button>
            </form>
    </div>
  )
}

export default SearchAd