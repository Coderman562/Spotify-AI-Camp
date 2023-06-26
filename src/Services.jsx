import React from 'react';

function Services() {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div className="row text-center">
          {/* Service Item 1 */}
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">E-Commerce</h4>
            <p className="text-muted">Lorem ipsum dolor sit amet</p>
          </div>
          {/* Service Item 2 */}
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">Responsive Design</h4>
            <p className="text-muted">Lorem ipsum dolor sit amet</p>
          </div>
          {/* Service Item 3 */}
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">Web Security</h4>
            <p className="text-muted">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
