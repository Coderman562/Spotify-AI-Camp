import React from 'react';
import portfolioImage1 from './assets/img/portfolio/1.jpg';
import portfolioImage2 from './assets/img/portfolio/2.jpg';
import portfolioImage3 from './assets/img/portfolio/3.jpg';
import portfolioImage4 from './assets/img/portfolio/4.jpg';
import portfolioImage5 from './assets/img/portfolio/5.jpg';
import portfolioImage6 from './assets/img/portfolio/6.jpg';


function Portfolio() {
  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">EDA</h2>
          <h3 className="section-subheading text-muted">Here are some graphs and plots of our dat</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={portfolioImage1} alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Threads</div>
                <div className="portfolio-caption-subheading text-muted">Illustration</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={portfolioImage2} alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Explore</div>
                <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={portfolioImage3} alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Finish</div>
                <div className="portfolio-caption-subheading text-muted">Identity</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={portfolioImage4} alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Lines</div>
                <div className="portfolio-caption-subheading text-muted">Branding</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={portfolioImage5} alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Southwest</div>
                <div className="portfolio-caption-subheading text-muted">Website Design</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={portfolioImage6} alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Window</div>
                <div className="portfolio-caption-subheading text-muted">Photography</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
