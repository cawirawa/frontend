import React, { Component } from "react";
import { Head } from "react-static";
import Navbar from "../components/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import pieChart from "../images/major-distribution.png";
import teamImage from "../images/team.jpg";

import "../css/icon.css";
import "../css/team.css";

class Team extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Team</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
        </Head>
        <Navbar />
        <Image src={teamImage} fluid alt="Team" />
        <Container>
          <div id="page-wrapper">
            <article id="main">
              <section></section>
              <section className="wrapper style4 container">
                <div className="content">
                  <section>
                    <header>
                      <h1 id="first-text">Meet our team!</h1>
                    </header>
                    <p id="introduction">
                      The UCSD Solar Car Team has its roots firmly planted by a
                      spirit of excellence through diversity. With a variety of
                      students from contrasting educational as well as cultural
                      backgrounds, every member is equally responsible for the
                      team's success. Supervising them are the team leads, who
                      go the extra step to bring out the best in every one of
                      them.
                    </p>
                    <p />
                    <p />
                  </section>
                </div>
              </section>
              <section className="wrapper style1 container special">
                <img id="piechart" src={pieChart} alt="Pie Chart" />
              </section>
              {/*<section className="wrapper style1 container special mt-3">
                <span className="icon featured fa-users" />
    </section>*/}

              <section className="wrapper style1 container special mt-5">
                <div className="row">
                  <div className="col-md-4 col-12-narrower lead">
                    <section>
                      <header>
                        <div
                          id="project-lead-img"
                          className="profile-image"
                        ></div>
                        <h4 className="section-name">Kieu Huynh</h4>
                      </header>
                      <p className="profile-header">
                        Project Lead | Class of 2020 | Mechanical Engineering
                      </p>
                      <p className="profile-description text-muted">
                        “My fondest memory of the team would probably be our
                        last end of the year bonfire of which I teamed up with a
                        few other deviant members to spook the rest of the team.
                        It definitely tested my abilities to maintain a poker
                        face.”{" "}
                      </p>
                    </section>
                  </div>
                  <div className="col-md-4 col-12-narrower lead">
                    <section>
                      <header>
                        <div
                          id="mechanical-lead-img"
                          className="profile-image"
                        ></div>
                        <h4 className="section-name">Roy Choi</h4>
                      </header>
                      <p className="profile-header">
                        Mechanical Lead | Class of 2020 | Mechanical Engineering
                      </p>
                      <p className="profile-description text-muted">
                        “As the mechanical lead it is my job to ensure that the
                        team is continuously working on the car’s physical and
                        CAD design in order to compete in any potential upcoming
                        solar race. Securing the correct tools, guidance and
                        services is essential.”
                      </p>
                      <p className="profile-description text-muted">
                        “I would say that the first summer I joined the solar
                        car team was the best. We would work late nights on a
                        project that we loved and eat and bond together
                        afterwards as a team.”
                      </p>
                    </section>
                  </div>
                  <div className="col-md-4 col-12-narrower lead">
                    <section>
                      <header>
                        <div
                          id="electrical-lead-img"
                          className="profile-image"
                        ></div>
                        <h4 className="section-name">Bryan Thai</h4>
                      </header>
                      <p className="profile-header">
                        Electrical Lead | Class of 2020 | Bioengineering
                      </p>
                      <p className="profile-description text-muted">
                        “My role in the team is to provide a level of guidance
                        in the design and implementation of the electrical
                        system for the vehicle.”
                      </p>
                      <p className="profile-description text-muted">
                        “My fondest memories are the bonfires that we usually
                        host because they’re always fun and a great way to bond
                        with the other members of the team.”
                      </p>
                    </section>
                  </div>
                </div>
              </section>

              <section className="wrapper style1 container special mt-3">
                <div className="row">
                  <div className="col-md-4 col-12-narrower other-members">
                    <section>
                      <div className="icon-wrapper">
                        <span className="icon featured fa-briefcase symbol" />
                      </div>
                      <header>
                        <h4 className="section-name">Operations Team</h4>
                      </header>
                      <p className="text-muted team-description">
                        Our job is to provide the tools necessary for the other
                        subteams to progress effortlessly. This includes efforts
                        towards public relations, sponsorship, and competition
                        logistics.
                      </p>
                      <p className="text-muted team-description">
                        Camila Paik, Angela Yu
                      </p>
                    </section>
                  </div>
                  <div className="col-md-4 col-12-narrower other-members">
                    <section>
                      <div className="icon-wrapper">
                        <span className="icon featured fa-cogs symbol" />
                      </div>
                      <header>
                        <h4 className="section-name">Mechanical Team</h4>
                      </header>
                      <p className="text-muted team-description">
                        Responsibilities include the design, analysis, and
                        manufacturing on the car’s structure
                      </p>
                      <p className="text-muted team-description">
                        Roy Choi, Janet He, Eugine Lin, Angela Yu, Canwin Tso,
                        Sean Orellana, Jennie Coates, Arjun Ray, Arturo Medina,
                        Jesse Sanchez, Dustin Tengdyantono, Billy Park, Jacob
                        Watson, Sukhdeep Chera,
                      </p>
                    </section>
                  </div>
                  <div className="col-md-4 col-12-narrower other-members">
                    <section>
                      <div className="icon-wrapper">
                        <span className="icon featured fa-bolt symbol" />
                      </div>
                      <header>
                        <h4 className="section-name">Electrical Team</h4>
                      </header>
                      <p className="text-muted team-description">
                        Our job as the electrical subteam is to bring the car to
                        life by providing the electricity needed to power the
                        motor, whether that be through the solar array or the
                        batteries. We also ensure that the vehicle is safe to
                        operate using a suite of sensors throughout the car that
                        monitor and provide feedback on its current condition.
                      </p>
                      <p className="text-muted team-description">
                        Bryan Thai, Dan Nguyen, Vivian Lee, Sara Dorr, Madeline
                        Tjoa, Jonathan Venegas, Daniel Renfrow
                      </p>
                    </section>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </Container>
      </div>
    );
  }
}

export default Team;
