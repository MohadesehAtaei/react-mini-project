import React from 'react'

function Card2({title, image}) {
  return (
    <div>
        <div className="col">
            <div className="card shadow bg-danger">
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title text-light">{title}</h5>
                </div>
                <div className="card-footer bg-warning">
                  <small className="text-center">More...</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card2