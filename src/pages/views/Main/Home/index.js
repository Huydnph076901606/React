import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Home = ({products}) => {
  return (
      <div>
                <section className="feature-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 p-0">
            <div className="feature-item set-bg" >
            <img src="img/slider-1.jpg" alt=""></img>
              <span className="cata new">new</span>
              <div className="fi-content text-white">
                <h5><a href="#">Suspendisse ut justo tem por, rutrum</a></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <a href="#" className="fi-comment">3 Comments</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="feature-item set-bg" ><img src="img/slider-1.jpg" with="100px" alt=""></img>
              <span className="cata strategy">strategy</span>
              <div className="fi-content text-white">
                <h5><a href="#">Justo tempor, rutrum erat id, molestie</a></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <a href="#" className="fi-comment">3 Comments</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="feature-item set-bg" ><img src="img/slider-1.jpg" alt=""></img>
              <span className="cata new">new</span>
              <div className="fi-content text-white">
                <h5><a href="#">Nullam lacinia ex eleifend orci porttitor</a></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <a href="#" className="fi-comment">3 Comments</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="feature-item set-bg" ><img src="img/slider-1.jpg" alt=""></img>
              <div className="fi-content text-white">
                <h5><a href="#">Lacinia ex eleifend orci suscipit</a></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <a href="#" className="fi-comment">3 Comments</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="recent-game-section spad set-bg"><img src="img/slider-1.jpg" alt=""></img>
      <div className="container">
        <div className="section-title">
          <div className="cata new">new</div>
          <h2>Recent Games</h2>
        </div>
        <div className="row">

        {products.map(({name, image, price }, index) => (
          <div className="col-lg-4 col-md-6">
            <div className="recent-game-item">
              <div className="rgi-thumb set-bg" >
                <img src={image} alt="Image placeholder" className="img-fluid" with="200px"/>
              </div>
              <div className="rgi-content">
              <h3 className="mb-2"><Link to="/ProductDetail">{name}</Link></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
                <p className="text-primary font-weight-bold">${price}</p>
                <button className="btn btn-danger">Add to cart</button>
                <div className="rgi-extra">
                  <div className="rgi-star"><img src="img/icons/star.png" alt="" /></div>
                  <div className="rgi-heart"><img src="img/icons/heart.png" alt="" /></div>
                </div>
                
              </div>
              
            </div>    	
          </div> 
            ))}

        </div>
      </div>
    </section>

      </div>
  )
}

Home.propTypes = {

}


export default Home
