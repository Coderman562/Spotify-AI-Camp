import React from 'react';
import aboutImage1 from './assets/img/about/1.jpg';
import aboutImage2 from './assets/img/about/2.jpg';
import aboutImage3 from './assets/img/about/3.jpg';
import aboutImage4 from './assets/img/about/4.jpg';

function About() {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src={aboutImage1} alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2009-2011</h4>
                <h4 className="subheading">Our Humble Beginnings</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src={aboutImage2} alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>March 2011</h4>
                <h4 className="subheading">An Agency is Born</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src={aboutImage3} alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>December 2015</h4>
                <h4 className="subheading">Transition to Full Service</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Lorem ipsum dolor sit</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src={aboutImage4} alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>July 2020</h4>
                <h4 className="subheading">Phase Two Expansion</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Lorem ipsu</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                Be Part
                <br />
                Of Our
                <br />
                Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
