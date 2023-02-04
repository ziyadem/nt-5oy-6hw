import React from 'react'

const DetailsCard = ({idCard}) => {

  return (
    <div className="container py-5 my-5 ">
              <div className="card mb-3 py-5 px-4 detailsCard" >
              <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center">
                  <img src={idCard.image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h2 className="card-title">{idCard.title}</h2>
                    <h4 className="card-title">Category:{idCard.category}</h4>
                    <br />
                    <p className="card-text">{idCard.description}</p>
                    <br />
                    <div className="card-text">
                      <h5>${idCard.price}</h5>
                      <br />
                      <h5>
                        <i className="fa-solid fa-star text-warning"></i>
                        {idCard?.rating?.rate} / {idCard?.rating?.count}
                      </h5>
                  </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default DetailsCard
