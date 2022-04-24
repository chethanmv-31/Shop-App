import React from 'react'
import Product from './Product'
import Products from './Products'

function Home() {
    return (
        <div className='hero'>
            <div className="card bg-dark text-dark">
                <img src="/assets/shopping.jpg" className="card-img" alt="background" />
                <div className="card-img-overlay ">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">TRENDING NOW</h5>
                        <p className="card-text lead fs-2">
                            CHECK IT OUT FOR ALL TRENDS
                        </p>
                    </div>
                </div>
            </div>
            {/* <Products/> */}
            
        </div>
    )
}

export default Home