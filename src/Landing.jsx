import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import posed from "react-pose";
import jam from "./Icons/jam.png";
import dash from "./Icons/sc1.png";
import Grid from "@material-ui/core/Grid";
import { Window, TitleBar, Text } from "react-desktop/macOs";
import Card from "./ChatComponents/Card";
import shape from "./Icons/shape-1.svg";
import steve from "./Icons/steve.jpg";
import Plx from "react-plx";
import logo from "./Icons/logo.svg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Typed from "react-typed";
import Card2 from "./ChatComponents/Card2";
import sc1 from "./Icons/sc1.png";

import todo from "./Icons/ol.png";
import poll from "./Icons/k.png";
import facebook from "./Icons/facebook.png";
import instagram from "./Icons/instagram.png";
import linkedin from "./Icons/linkedin.png";
import github from "./Icons/github-logo.png";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Link from "react-router-dom/Link";
import { Hidden } from "@material-ui/core";

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});
const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 1,
        endValue: 2,
        property: "scale"
      }
    ]
  }
];

const Chat1 = [
  {
    start: 250,
    end: 600,
    properties: [
      {
        startValue: -2700,
        endValue: 0,
        property: "translateX"
      }
    ]
  }
];

const Chat2 = [
  {
    start: 250,

    end: 650,
    properties: [
      {
        startValue: -2700,
        endValue: 0,
        property: "translateX"
      }
    ]
  }
];

const Chat3 = [
  {
    start: 250,

    end: 700,
    properties: [
      {
        startValue: -2700,
        endValue: 0,
        property: "translateX"
      }
    ]
  }
];

const Chat4 = [
  {
    start: 250,
    end: 750,
    properties: [
      {
        startValue: -2700,
        endValue: 0,
        property: "translateX"
      }
    ]
  }
];

const parallaxData2 = [
  {
    start: 0,
    end: 100,
    properties: [
      {
        startValue: -1000,
        endValue: 0,
        property: "translateX"
      }
    ]
  }
];

const parallaxData3 = [
  {
    start: 0,
    end: 100,
    properties: [
      {
        startValue: -2000,
        endValue: 0,
        property: "translateY"
      }
    ]
  }
];

const rotate = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 0,
        endValue: 360,
        property: "rotate"
      },
      {
        startValue: 0.7,
        endValue: 1,
        property: "scale"
      }
    ]
  }
];

const todoplx = [
  {
    start: 900,
    end: 1100,
    properties: [
      {
        startValue: 1000,
        endValue: 0,
        property: "translateX"
      }
    ]
  }
];

const pollplx = [
  {
    start: 1200,
    end: 1500,
    properties: [
      {
        startValue: -1000,
        endValue: 0,
        property: "translateX"
      }
    ]
  }
];

const Proplx = [
  {
    start: 1800,
    end: 2100,
    properties: [
      {
        startValue: 2000,
        endValue: 0,
        property: "translateX"
      }
    ]
  }
];

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 12 };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <header>
          <br />

          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={2} md={1}>
              <img style={{ width: 70, height: 70 }} src={logo} />
            </Grid>{" "}
            <Grid item xs={4} md={1}>
              <h2 style={{ left: -40 }}>
                <b>Line Up </b>
              </h2>{" "}
            </Grid>
            <Grid item md={6} />
            <Grid item md={1}>
              <Hidden mdDown>
                <Link to="/logins">
                  <h3 style={{ left: -40, color: "black" }}>
                    <b>Student</b>
                  </h3>{" "}
                </Link>
              </Hidden>
            </Grid>{" "}
            <Grid item md={1}>
              <Hidden mdDown>
                <Link to="/logint">
                  <h3 style={{ left: -40, color: "black" }}>
                    <b>Teacher </b>
                  </h3>{" "}
                </Link>
              </Hidden>
            </Grid>{" "}
          </Grid>
        </header>
        <section
          style={{
            backgroundColor: "white",
            textAlign: "center",
            padding: "2%"
          }}
        >
          <br />
          <br />

          <Grid container justify="center">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Grid
              style={{
                textAlign: "center",
                fontFamily: "'Roboto Slab', 'serif'"
              }}
              item
              xs={12}
              md={8}
            >
              <Hidden mdDown>
                <Typed
                  style={{ fontSize: "44px" }}
                  strings={[
                    "Manage Your Class",
                    "New Way Of Class Communication"
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                />{" "}
              </Hidden>{" "}
              <Hidden mdUp>
                <Typed
                  style={{ fontSize: "36px", lineHeight: "60px" }}
                  strings={[
                    "Manage Your Class",
                    "New Way Of Class Communication"
                  ]}
                  loop
                  typeSpeed={40}
                  backSpeed={50}
                />{" "}
              </Hidden>
              <b style={{ color: "#8327f2", fontSize: "44px" }}>LineUp</b>
              <br />
              <br />
              <div style={{ fontSize: "17px" }}>
                <b>
                  {" "}
                  Manage Assignment | Todo | Notes | Notification | Marksheet
                </b>
              </div>
              <br />
              <br />
              <br />
              <br />
              <Grid justify="center" container>
                <Grid item xs={4} md={2}>
                  <div
                    style={{
                      height: 60,
                      backgroundColor: "#6300CC",
                      color: "white",
                      fontSize: "32"
                    }}
                    className="card-hover shadow-lg"
                  >
                    <br />
                    <Link style={{ color: "white" }} to="/logins">
                      <a>Login as Student</a>
                    </Link>
                  </div>
                </Grid>
                <Grid item md={1} xs={1} />
                <Grid item xs={4} md={2}>
                  <div
                    style={{
                      height: 60,
                      backgroundColor: "white",
                      color: "#6300CC",
                      fontSize: "32"
                    }}
                    className="card-hover shadow-lg"
                  >
                    <br />
                    <Link style={{ color: "#6300CC" }} to="/logint">
                      <b>
                        {" "}
                        <a>Login as Teacher</a>
                      </b>
                    </Link>
                  </div>
                </Grid>
              </Grid>
              <br />
              <br />
              <Plx parallaxData={rotate}>
                <img src={sc1} className="shadow-lg border" />
              </Plx>
              <br />
              <br />
            </Grid>
          </Grid>
        </section>

        <section
          style={{
            backgroundColor: "white",
            textAlign: "center",
            padding: "2%"
          }}
        >
          <Grid justify="center" container>
            <Grid item md={4} xs={12}>
              <div className="card-body">
                <div className="profiletimeline m-t-0">
                  <Plx parallaxData={Chat1}>
                    <Card2
                      style={{ translateX: -2000 }}
                      username="SteveG"
                      name="Steve"
                      timestamp="2 minutes ago"
                      msg=" Hey Today's Class will be Scheduled at 9.30am"
                      propic="https://firebasestorage.googleapis.com/v0/b/workstation-de68a.appspot.com/o/download.jpeg?alt=media&token=995c451b-cb3e-4f91-af40-d380f40fe605"
                    />
                  </Plx>
                  <Plx parallaxData={Chat2}>
                    <Card2
                      username="SteveG"
                      name="Steve"
                      timestamp="2 minutes ago"
                      msg="Tomorrow is last date for Submission "
                      propic="https://firebasestorage.googleapis.com/v0/b/workstation-de68a.appspot.com/o/ed4d4e729ac60f71a256aad92dad4ab9--mens-headshots-business-headshots.jpg?alt=media&token=c9b7760d-1a57-4011-a6ca-a5267dc46e77"
                    />{" "}
                  </Plx>

                  <Plx parallaxData={Chat3}>
                    <Card2
                      username="StackKe"
                      name="Stacy"
                      timestamp="2 minutes ago"
                      msg=" Notes for DataSructure has been Send!"
                      propic="https://firebasestorage.googleapis.com/v0/b/workstation-de68a.appspot.com/o/female-profile-picture-2.jpg?alt=media&token=89936ebd-4f1c-4468-8eee-017e4620ef5c"
                    />{" "}
                  </Plx>
                  <Plx parallaxData={Chat4}>
                    <Card2
                      username="SteveG"
                      name="Steve"
                      timestamp="2 minutes ago"
                      msg="Line Up Is a Great Way To Manage Your Stuffs  "
                      propic="https://firebasestorage.googleapis.com/v0/b/workstation-de68a.appspot.com/o/download.jpeg?alt=media&token=995c451b-cb3e-4f91-af40-d380f40fe605"
                    />
                  </Plx>
                </div>
              </div>
            </Grid>
          </Grid>
        </section>

        <br />
        <br />
        <br />

        <section>
          <Grid justify="left" container>
            <Grid item md={2} xs={12} />

            <Grid item md={4} xs={12}>
              <h1>
                <b>Manage Classroom</b>
              </h1>
              <h3>
                Communicate Efficently and Manage Your Classroom with LineUp
              </h3>
            </Grid>
            <Grid item md={6} xs={12}>
              <Plx parallaxData={todoplx}>
                <img
                  style={{ padding: "20px" }}
                  className="card-hover shadow-lg"
                  src={todo}
                />
              </Plx>
            </Grid>
          </Grid>

          <br />
          <br />
          <br />
          <br />
          <Grid justify="left" container>
            <Grid item md={6} xs={12}>
              <Plx parallaxData={pollplx}>
                <img
                  style={{ padding: "20px" }}
                  className="card-hover shadow-lg"
                  src={poll}
                />
              </Plx>
            </Grid>

            <Grid item md={4} xs={12}>
              <br />
              <br />
              <h1>
                <b> Multiple Classroom</b>{" "}
                <h3>
                  Manage Multiple Classroom and Send Them Push Notifications{" "}
                </h3>
              </h1>
            </Grid>
          </Grid>
        </section>

        <br />
        <br />
        <br />

        <section style={{ textAlign: "center" }}>
          <h1>
            <b>Connect To Devloper</b>
          </h1>
          <br />
          <br />{" "}
          <Plx parallaxData={Proplx}>
            <div class="container portfolio shadow-lg">
              <div class="row">
                <div class="col-md-12">
                  <div class="heading">
                    <img src="https://image.ibb.co/cbCMvA/logo.png" />
                  </div>
                </div>
              </div>
              <div class="bio-info ">
                <div class="row" align="center">
                  <div class="col-md-6" align="center">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="bio-image">
                          <img
                            style={{ width: 220, height: 220 }}
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="bio-content">
                      <h1>Hi there, I'm Atharva</h1>
                      <h6 />
                      <p>
                        P.S I have no special talent, I'm just passionately
                        curious ;)
                      </p>

                      <br />
                      <br />
                      <Grid spacing={3} container>
                        <Grid item md={3} xs={6}>
                          <a>
                            <td
                              onClick={() =>
                                window.open(
                                  "https://www.facebook.com/atharva.udapure",
                                  "faceBook"
                                )
                              }
                            >
                              <div>
                                <img
                                  herf="https://www.facebook.com/atharva.udapure"
                                  style={{ width: 90, height: 90 }}
                                  src={facebook}
                                />
                              </div>{" "}
                            </td>
                          </a>
                        </Grid>
                        <Grid item md={3} xs={6}>
                          <a>
                            <td
                              onClick={() =>
                                window.open(
                                  "https://www.instagram.com/__athrva__",
                                  "Instagram"
                                )
                              }
                            >
                              <div>
                                <img
                                  style={{ width: 90, height: 90 }}
                                  src={instagram}
                                />
                              </div>
                            </td>
                          </a>
                        </Grid>
                        <Grid item md={3} xs={6}>
                          <a>
                            <td
                              onClick={() =>
                                window.open(
                                  "https://github.com/atharvau",
                                  "Instagram"
                                )
                              }
                            >
                              <div>
                                <img
                                  style={{ width: 90, height: 90 }}
                                  src={github}
                                />
                              </div>
                            </td>
                          </a>
                        </Grid>
                        <Grid item md={3} xs={6}>
                          <a>
                            <td
                              onClick={() =>
                                window.open(
                                  "https://github.com/atharvau",
                                  "Instagram"
                                )
                              }
                            >
                              <div>
                                <img
                                  style={{ width: 90, height: 90 }}
                                  src={linkedin}
                                />
                              </div>
                            </td>
                          </a>
                        </Grid>
                      </Grid>

                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>
          </Plx>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
      </div>
    );
  }
}

export default Landing;
