import React, { Component } from "react";
import "../A/Style.css";
import "../ChatComponents/Chat.css";

import "../A/Gh.css";
import Avatar from "react-avatar";

import githubicon from "../Icons/github.png";
import workicon from "../Icons/work.png";
import Forward from "./Forward";
import helpicon from "../Icons/help.png";
import ProfilesShow from "../ChatComponents/ProfilesShow";
import { Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import fire from "../Fire";
import Loading from "./Loading";

import proicon from "../Icons/profile.png";
import TeacherA from "./TeacherA";
import ShowA from "./ShowA";
import StudentSubmit from "./StudentSubmit";
import ModalExample from "./ModalExample";
import logo from "../Icons/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "react-notifications/lib/notifications.css";

import "./Gap.css";
import {
  DropdownMenu,
  Dropdown,
  DropdownToggle,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavLink,
  UncontrolledDropdown,
  UncontrolledCollapse,
  DropdownItem,
  CardBody,
  Card,
  NavbarNav
} from "reactstrap";

import moment from "moment";
import "@material/react-fab/dist/fab.css";

import { Grid } from "@material-ui/core";
import SideDrawer from "./SideDrawer";
import Example from "./Example";
import NavBarApp3 from "./NavBarApp3";

const styles = {
  // .container
  containerClass: {
    textAlign: "center"
  }, // .centered-content
  centeredContentClass: {
    display: "inline-block",
    width: "80px",
    height: "80px"
  }
};

var headers = {
  "Content-Type": "application/json"
};

var DashStyle = {
  color: "white"
};
var InboxStyle = {
  color: "white"
};

var TodoStyle = {
  color: "white"
};
var NoteStyle = {
  color: "white"
};
var PollStyle = {
  color: "white"
};

var ProfileStyle = {
  color: "white"
};

var LinkStyle = {
  color: "white"
};

var DashText = { color: "black" };
var InboxText = { color: "black" };
var PollText = { color: "black" };
var NoteText = { color: "black" };
var TodoText = { color: "black" };
var LinkText = { color: "black" };
var ProfileText = { color: "black" };

class StudentDash extends Component {
  constructor(props) {
    super(props);
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.w(window.localStorage.getItem("work"));

        this.props.n(fire.auth().currentUser.displayName);
        this.props.k(fire.auth().currentUser.uid);
        this.props.r(window.localStorage.getItem("rollno"));
        this.props.b(window.localStorage.getItem("batch"));
      }
    });
  }

  componentWillMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  createNotification = type => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "success":
          NotificationManager.success("Success message", "Title here");
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
      }
    };
  };

  toggle2() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  Toggle3() {
    this.setState({
      isPro: !this.state.isPro
    });
  }
  CHeck = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user !== undefined) return true;
      else return false;
    });
  };

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  l = () => {
    switch (window.location.pathname) {
      case "/dashboard_students": {
        DashStyle = {
          color: "white",

          backgroundColor: "#6479ed",
          height: "40px",
          padding: "1px"
        };
        InboxStyle = {
          color: "black",
          height: "40px",
          padding: "1px"
        };

        TodoStyle = {
          color: "black",
          height: "40px",
          padding: "1px"
        };

        DashText = { color: "white" };
        InboxText = { color: "black" };
        TodoText = { color: "black" };

        break;
      }

      case "/dashboard_students/notes": {
        InboxStyle = {
          color: "white",

          backgroundColor: "#6479ed",
          height: "40px",
          padding: "1px"
        };
        DashStyle = {
          color: "black",
          height: "40px",
          padding: "1px"
        };

        TodoStyle = {
          color: "black",
          height: "40px",
          padding: "1px"
        };

        DashText = { color: "white" };
        InboxText = { color: "black" };
        TodoText = { color: "black" };

        break;
      }

      case "/dashboard_teacher/profiles": {
        TodoStyle = {
          color: "white",
          backgroundColor: "#6479ed",
          height: "40px",
          padding: "1px"
        };

        DashStyle = {
          color: "black",
          height: "40px",
          padding: "1px"
        };

        InboxStyle = {
          color: "black",
          height: "40px",
          padding: "1px"
        };

        TodoText = { color: "white" };
        InboxText = { color: "black" };
        DashText = { color: "black" };

        break;
      }
    }
  };

  toggle4 = () => {
    this.setState({
      isOpen2: !this.state.isOpen2
    });
  };
  lolo = () => {
    window.location.reload();
  };
  componentDidMount() {
    switch (window.location.pathname) {
      case "/dashboard_student": {
        DashStyle = {
          color: "white",

          backgroundColor: "#6479ed",
          height: "40px",
          padding: "1px"
        };
        InboxStyle = {
          color: "black",
          height: "40px",
          padding: "1px"
        };
        TodoStyle = {
          color: "black",
          height: "40px",
          padding: "1px"
        };

        DashText = { color: "white" };
        InboxText = { color: "black" };
        TodoText = { color: "black" };

        break;
      }

      case "/dashboard_student/notes": {
        InboxStyle = {
          color: "white",

          backgroundColor: "#6479ed",
          height: "40px",
          padding: "1px"
        };
        DashStyle = {
          color: "black",
          height: "40px",
          padding: "1px"
        };

        TodoStyle = {
          color: "black",
          height: "40px",
          padding: "1px"
        };

        DashText = { color: "white" };
        InboxText = { color: "black" };
        TodoText = { color: "black" };

        break;
      }

      case "/dashboard_teacher/profiles": {
        TodoStyle = {
          color: "white",

          backgroundColor: "#6479ed",
          height: "40px",
          padding: "1px"
        };
        DashStyle = {
          color: "black",
          height: "40px",
          padding: "1px"
        };

        InboxStyle = {
          color: "black",
          height: "40px",
          padding: "1px"
        };

        TodoText = { color: "white" };
        InboxText = { color: "black" };
        DashText = { color: "black" };

        break;
      }
    }

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  SendNot = () => {};

  resize() {
    let currentHideNav = window.innerWidth;
    if (currentHideNav <= 760) {
      this.setState({ Mobile: true });
    } else {
      this.setState({ Mobile: false });
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.props.uid ? (
            <div>
              {this.state.Mobile ? (
                <div id="main-wrapper" data-theme="light">
                  <div />

                  <div className="page-wrapper" style={{ display: "block" }}>
                    <Example />
                    <NavBarApp3 />
                    <Switch>
                      <Route
                        path="/dashboard_student"
                        exact
                        component={StudentSubmit}
                      />
                      <Route
                        path="/dashboard_student/notes"
                        exact
                        component={Forward}
                      />
                    </Switch>
                    <div className="container-fluid">
                      {this.props.name && this.props.uid ? (
                        <div>
                          <div className="Rel">
                            <div className="Reliy" />{" "}
                          </div>
                        </div>
                      ) : (
                        <div>{""}</div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  id="main-wrapper"
                  data-theme="light"
                  data-layout="vertical"
                  data-sidebartype="full"
                  data-sidebar-position="fixed"
                  data-boxed-layout="full"
                >
                  <div />

                  <header
                    style={{ zIndex: 1 }}
                    className="topbar"
                    data-navbarbg="skin6"
                  >
                    <nav className="navbar top-navbar navbar-expand-md navbar-light">
                      <Grid
                        container
                        alignContent="flex-end"
                        justify="flex-end"
                        alignItems="flex-end"
                      >
                        {" "}
                        <h2>{this.props.work}</h2>
                        <Grid className="card-hover" item xs={1}>
                          <a />
                        </Grid>
                        <Grid style={{ marginRight: 20 }} item xs={1}>
                          <Link to="/works">
                            {" "}
                            <Grid className="card-hover" container>
                              <Grid item md={4}>
                                <img style={{ width: 34 }} src={workicon} />
                              </Grid>
                              <Grid item md={8}>
                                <b style={{ color: "black" }}>WorkStation</b>
                              </Grid>{" "}
                            </Grid>
                          </Link>
                        </Grid>{" "}
                        <Grid style={{ marginRight: 20 }} item xs={1}>
                          <Link
                            onClick={() => {
                              fire.auth().signOut();
                            }}
                            to="/logins"
                          >
                            <Grid className="card-hover" container>
                              <Grid item md={4}>
                                <img src={proicon} />
                              </Grid>
                              <Grid item md={8}>
                                <b style={{ color: "black" }}>Sign Out</b>
                              </Grid>
                            </Grid>
                          </Link>
                        </Grid>
                        <Grid style={{ marginRight: 20 }} item xs={1}>
                          <Grid className="card-hover" container>
                            <Grid item md={4}>
                              <img src={githubicon} />
                            </Grid>

                            <Grid item md={8}>
                              <b style={{ color: "black" }}>Github</b>
                            </Grid>
                          </Grid>
                        </Grid>{" "}
                        <Grid style={{ marginRight: 20 }} item xs={1}>
                          <Grid className="card-hover" container>
                            <Grid item md={4}>
                              <img src={helpicon} />
                            </Grid>

                            <Grid item md={8}>
                              <b>Help</b>{" "}
                            </Grid>
                          </Grid>
                        </Grid>{" "}
                      </Grid>
                      <div className="navbar-header" data-logobg="skin6">
                        <a className="navbar-brand" href="/">
                          {/* Logo icon */}
                          <b className="logo-icon">
                            {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
                            {/* Dark Logo icon */}
                            <img
                              style={{ width: 30, height: 30 }}
                              src={logo}
                              alt="homepage"
                              className="dark-logo"
                            />
                            {/* Light Logo icon */}
                          </b>
                          {/*End Logo icon */}
                          {/* Logo text */}
                          <span className="logo-text">
                            {/* dark Logo text */}
                            <h3 style={{ marginLeft: 20 }}>
                              <b>LineUp</b>
                            </h3>
                          </span>
                        </a>
                      </div>
                    </nav>
                  </header>
                  <aside
                    style={{ zIndex: 0, position: "fixed" }}
                    className="left-sidebar __web-inspector-hide-shortcut__"
                    data-sidebarbg="skin6"
                  >
                    {/* Sidebar scroll*/}
                    <div
                      className="scroll-sidebar ps-container ps-theme-default ps-active-y"
                      data-ps-id="9f0b0d4d-aa58-1e1d-908f-b3ce4b7ff9c0"
                    >
                      <br />
                      <br />
                      <br />
                      <br />
                      <Grid justify="center" container>
                        <Grid item md={6}>
                          <Avatar
                            size="70"
                            name={window.localStorage.getItem("displayName")}
                          />
                        </Grid>

                        <Grid item md={12}>
                          <h4> {window.localStorage.getItem("displayName")}</h4>
                        </Grid>
                      </Grid>
                      <br />
                      <br />
                      <Grid onClick={this.l} style={DashStyle}>
                        <h4>
                          <Link
                            onClick={this.l}
                            style={DashStyle}
                            to="/dashboard_student"
                          >
                            {" "}
                            <b> Assignment</b>{" "}
                          </Link>
                        </h4>
                      </Grid>
                      <Grid onClick={this.l} style={InboxStyle}>
                        <h4>
                          <Link
                            onClick={this.l}
                            style={InboxStyle}
                            to="/dashboard_student/notes"
                          >
                            {" "}
                            <b> Notes</b>{" "}
                          </Link>
                        </h4>
                      </Grid>{" "}
                      <Grid />
                      <Grid />
                      <br />
                    </div>
                  </aside>

                  <div className="page-wrapper" style={{ display: "block" }}>
                    <Example />

                    <Switch>
                      <Route
                        path="/dashboard_student"
                        exact
                        component={StudentSubmit}
                      />
                      <Route
                        path="/dashboard_student/notes"
                        exact
                        component={() => <Forward ol={false} />}
                      />
                    </Switch>
                    <div className="container-fluid">
                      {this.props.name && this.props.uid ? (
                        <div>
                          <div className="Rel">
                            <div className="Reliy" />{" "}
                          </div>
                        </div>
                      ) : (
                        <div>{""}</div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    k: id => {
      dispatch(uid(id));
    },

    n: id => {
      dispatch(name(id));
    },

    u: id => {
      dispatch(username(id));
    },

    p: id => {
      dispatch(pic(id));
    },
    w: id => {
      dispatch(work(id));
    },
    t: id => {
      dispatch(type(id));
    },

    r: id => {
      dispatch(roll(id));
    },
    b: id => {
      dispatch(batch(id));
    }
  };
};

function uid(index) {
  return { type: "UID", payload: index };
}

function name(index) {
  return { type: "NAME", payload: index };
}

function username(index) {
  return { type: "USERNAME", payload: index };
}

function pic(index) {
  return { type: "PIC", payload: index };
}
function work(index) {
  return { type: "WORK", payload: index };
}
function type(index) {
  return { type: "TYPE", payload: index };
}

function roll(index) {
  return { type: "ROLL", payload: index };
}

function batch(index) {
  return { type: "BATCH", payload: index };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDash);
