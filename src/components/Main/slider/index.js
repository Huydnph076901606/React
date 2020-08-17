import React from 'react'
import PropTypes from 'prop-types'

const slider = props => {
    return (
     <div>  
        <section className="hero-section">
             <img src="slider-1.jpg"></img>
              <div className="container">
                <h2>The Best <span>Games</span> Out There</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada <br /> lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. <br />Suspendisse cursus faucibus finibus.</p>
                <a href="#" className="site-btn">Read More</a>
              </div>  
      </section>   
     </div>
    )
}

slider.propTypes = {

}

export default slider
