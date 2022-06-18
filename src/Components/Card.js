import React from 'react'

function Card({title, image, instructions}) {

//   const stripHTML = (myString) => {
//     return myString.replace( /(<([^>]+)>)/ig, '');
//  }

  return (
    <div>
        <div className="col">
            <div className="card shadow">
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title text-light">{title}</h5>
                  <p className="card-text text-light">{instructions.replace( /(<([^>]+)>)/ig, '')}</p>
                </div>
                <div className="card-footer bg-warning">
                  <small className="text-center">More...</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card