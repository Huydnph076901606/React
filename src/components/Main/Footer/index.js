import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
        <div>
        <section className="footer-top-section">
          <div className="container">
            <div className="footer-top-bg">
              <img src="img/footer-top-bg.png" alt="" />
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-logo text-white">
                  <img src="img/footer-logo.png" alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit ame.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget mb-5 mb-md-0">
                  <h4 className="fw-title">Latest Posts</h4>
                  <div className="latest-blog">
                    <div className="lb-item">
                      <div className="lb-thumb set-bg" data-setbg="img/latest-blog/1.jpg" />
                      <div className="lb-content">
                        <div className="lb-date">June 21, 2018</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum </p>
                        <a href="#" className="lb-author">By Admin</a>
                      </div>
                    </div>
                    <div className="lb-item">
                      <div className="lb-thumb set-bg" data-setbg="img/latest-blog/2.jpg" />
                      <div className="lb-content">
                        <div className="lb-date">June 21, 2018</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum </p>
                        <a href="#" className="lb-author">By Admin</a>
                      </div>
                    </div>
                    <div className="lb-item">
                      <div className="lb-thumb set-bg" data-setbg="img/latest-blog/3.jpg" />
                      <div className="lb-content">
                        <div className="lb-date">June 21, 2018</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum </p>
                        <a href="#" className="lb-author">By Admin</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Top Comments</h4>
                  <div className="top-comment">
                    <div className="tc-item">
                      <div className="tc-thumb set-bg" data-setbg="img/authors/1.jpg" />
                      <div className="tc-content">
                        <p><a href="#">James Smith</a> <span>on</span>  Lorem ipsum dolor sit amet, co</p>
                        <div className="tc-date">June 21, 2018</div>
                      </div>
                    </div>
                    <div className="tc-item">
                      <div className="tc-thumb set-bg" data-setbg="img/authors/2.jpg" />
                      <div className="tc-content">
                        <p><a href="#">James Smith</a> <span>on</span>  Lorem ipsum dolor sit amet, co</p>
                        <div className="tc-date">June 21, 2018</div>
                      </div>
                    </div>
                    <div className="tc-item">
                      <div className="tc-thumb set-bg" data-setbg="img/authors/3.jpg" />
                      <div className="tc-content">
                        <p><a href="#">James Smith</a> <span>on</span>  Lorem ipsum dolor sit amet, co</p>
                        <div className="tc-date">June 21, 2018</div>
                      </div>
                    </div>
                    <div className="tc-item">
                      <div className="tc-thumb set-bg" data-setbg="img/authors/4.jpg" />
                      <div className="tc-content">
                        <p><a href="#">James Smith</a> <span>on</span>  Lorem ipsum dolor sit amet, co</p>
                        <div className="tc-date">June 21, 2018</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer top section end */}
        {/* Footer section */}
        <footer className="footer-section">
          <div className="container">
            <ul className="footer-menu">
              <li><a href="index.html">Home</a></li>
              <li><a href="review.html">Games</a></li>
              <li><a href="categories.html">Blog</a></li>
              <li><a href="community.html">Forums</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
            <p className="copyright">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
          </div>
        </footer>
      </div>
    )
}

Footer.propTypes = {

}

export default Footer
