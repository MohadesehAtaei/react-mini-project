import React from 'react'

import SearchAd from '../Components/SearchAd'

function AdvanceSearch() {
  
  return (
    <div>
      <div className='p-5'>
        <SearchAd/>
        <div>
          <div className='text-light bg-dark fs-5 p-3 mt-5'>Result For Search Of Recipes By Ingredients:</div>
          <div className='bg-light'>
            <h4 className='text-center p-5'>no result</h4>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AdvanceSearch