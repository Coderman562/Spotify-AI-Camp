import React from 'react';
import teamMember1 from './assets/img/team/1.jpg';
import teamMember2 from './assets/img/team/2.jpg';
import teamMember3 from './assets/img/team/3.jpg';

function Team() {
  return (
    <section className="page-section bg-light" id="team">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={teamMember1} alt="..." />
              <h4>Parveen Anand</h4>
              <p className="text-muted">Lead Designer</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={teamMember2} alt="..." />
              <h4>Diana Petersen</h4>
              <p className="text-muted">Lead Marketer</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={teamMember3} alt="..." />
              <h4>Larry Parker</h4>
              <p className="text-muted">Lead Developer</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
