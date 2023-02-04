import React from 'react'

const PlaceholderDetailscars = () => {
  return (
                <div className="container py-5 my-5 ">
                <div className="card mb-3 py-5 px-4 detailsCard" >
                <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center">
                <div className="placeholder-card-image d-flex align-items-center justify-content-center bg-light card-img-top">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
                </div>
                <div className="col-md-8">
                    <div className="card-body ">
                    <h2 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                    </h2>
                    <h4 className="card-title placeholder-glow"><span className="placeholder col-5"></span></h4>
                    <br />
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                        </p>
                    <br />
                    <div className="card-text placeholder-glow">
                        <h5>
                        <span className="placeholder col-1"></span> 
                        </h5>
                        <br />
                        <h5>
                        <span className="placeholder col-2"> </span>
                        <span className="placeholder col-1"></span>
                        <span className="placeholder col-1"></span>
                        </h5>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
  )
}

export default PlaceholderDetailscars
