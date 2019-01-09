import React, { Component } from "react";
import "../A/Style.css";
import "../ChatComponents/Chat.css";

import "../A/Gh.css";
import Avatar from "react-avatar";
import Modal from "react-responsive-modal";
import axios from "axios";

import githubicon from "../Icons/github.png";
import workicon from "../Icons/work.png";
import AutoMarker from "./AutoMarker";
import MarkSheet from "./MarkSheet";
import helpicon from "../Icons/help.png";
import ProfilesShow from "../ChatComponents/ProfilesShow";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import fire from "../Fire";
import Loading from "./Loading";
import proicon from "../Icons/profile.png";
import TeacherA from "./TeacherA";
import ShowA from "./ShowA";
import ModalExample from "./ModalExample";
import logo from "../Icons/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import Forward from "./Forward";
import Evaluate from "../Submit/Evaluate";
import "react-toastify/dist/ReactToastify.css";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "react-notifications/lib/notifications.css";

import "./Gap.css";

import "@material/react-fab/dist/fab.css";

import { Grid, TextField, Button } from "@material-ui/core";
import Example from "./Example";
import NavBarApp from "./NavBarApp";

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

const menu = [
  {
    icon: "dashboard",
    label: "Menu 1",
    to: "menu-1"
  },
  {
    icon: "bell",
    label: "Menu 2",
    to: "menu-2"
  },
  {
    icon: "bolt",
    label: "Menu 3",
    content: [
      {
        icon: "bolt",
        label: "Sub Menu",
        to: "sub-menu"
      }
    ]
  },
  {
    icon: "external-link",
    label: "External Link",
    externalLink: true,
    to: "https://www.google.com"
  }
];

var DashText = { color: "black" };
var InboxText = { color: "black" };
var PollText = { color: "black" };
var NoteText = { color: "black" };
var TodoText = { color: "black" };
var LinkText = { color: "black" };
var ProfileText = { color: "black" };

class MainLayout extends Component {
  constructor(props) {
    super(props);

    this.state = { Mobile: true, red: false };

    this.props.w(window.localStorage.getItem("work"));

    this.props.n(window.localStorage.getItem("displayName"));

    this.props.k(window.localStorage.getItem("uid"));
    this.props.p(window.localStorage.getItem("photoURL"));

    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.k(user.uid);
        this.props.n(user.displayName);
        this.props.n(user.photoUrl);
      } else {
        this.setState({ red: true });
      }
    });

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

    this.resize();

    var mss = fire.messaging();

    mss
      .requestPermission()
      .then(() => {
        return mss.getToken();
      })
      .then(function(token) {
        console.log(token);
        fire
          .database()
          .ref()
          .child("Classes")

          .child(window.localStorage.getItem("work"))
          .child("Tokens")
          .push(token);
      })
      .catch(function(err) {
        console.log("ANT");
        console.log(mss.getToken());
      });
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
      case "/dashboard_teacher": {
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

      case "/dashboard_teacher/notes": {
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
      case "/dashboard_teacher": {
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

      case "/dashboard_teacher/notes": {
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

      default:
        {
          TodoStyle = {
            color: "black",

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
        }

        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  SendNot = () => {};

  resize() {
    console.log(window.innerWidth);

    let currentHideNav = window.innerWidth;
    if (currentHideNav <= 760) {
      this.setState({ Mobile: true });
    } else {
      this.setState({ Mobile: false });
    }
  }

  onOpenModal2 = () => {
    this.setState({ open2: true });
  };
  onOpenModal3 = y => {
    this.setState({ open2: true });
  };

  onCloseModal2 = () => {
    this.setState({ open2: false });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.Mobile ? (
            <div id="main-wrapper" data-theme="light">
              <NavBarApp func={this.onOpenModal3} />
              <div />

              <div className="page-wrapper" style={{ display: "block" }}>
                <Example />

                <Switch>
                  <Route path="/dashboard_teacher" exact component={ShowA} />
                  <Route
                    path="/dashboard_teacher/profiles"
                    exact
                    component={ProfilesShow}
                  />
                  <Route
                    path="/dashboard_teacher/evaluate/:key"
                    exact
                    component={Evaluate}
                  />

                  <Route
                    path="/dashboard_teacher/marksheet/:key"
                    exact
                    component={MarkSheet}
                  />

                  <Route
                    path="/dashboard_teacher/automarker/:key"
                    exact
                    component={AutoMarker}
                  />
                  <Route
                    path="/dashboard_teacher/notes"
                    exact
                    component={Forward}
                  />
                </Switch>

                <div className="container-fluid">
                  {this.props.name && this.props.uid ? (
                    <div />
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
                      <Link to="/work">
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
                        to="/logint"
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
                    </Grid>{" "}
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
                        src={window.localStorage.getItem("photoURL")}
                        name={window.localStorage.getItem("displayName")}
                      />
                    </Grid>

                    <Grid item md={12}>
                      <h4> {window.localStorage.getItem("displayName")}</h4>
                    </Grid>
                  </Grid>
                  <br />
                  <br />
                  <Grid
                    className="card-hover"
                    onClick={this.l}
                    style={DashStyle}
                  >
                    <h4>
                      <Link
                        onClick={() => {
                          this.forceUpdate();
                        }}
                        style={DashStyle}
                        to="/dashboard_teacher"
                      >
                        {" "}
                        <b> Assignment</b>{" "}
                      </Link>
                    </h4>
                  </Grid>
                  <Grid
                    className="card-hover"
                    onClick={this.l}
                    style={InboxStyle}
                  >
                    <h4>
                      <Link style={InboxStyle} to="/dashboard_teacher/notes">
                        {" "}
                        <b> Notes</b>{" "}
                      </Link>
                    </h4>
                  </Grid>{" "}
                  <Grid />
                  <Grid
                    className="card-hover"
                    onClick={this.l}
                    style={TodoStyle}
                  >
                    <h4>
                      <Link style={TodoStyle} to="/dashboard_teacher/profiles">
                        {" "}
                        <b>Students</b>{" "}
                      </Link>
                    </h4>
                  </Grid>{" "}
                  <Grid className="card-hover">
                    <a onClick={this.onOpenModal2}>
                      <h4>
                        <b>Send Notification</b>{" "}
                      </h4>
                    </a>
                  </Grid>{" "}
                  <Grid />
                  <br />
                </div>
              </aside>

              <div className="page-wrapper" style={{ display: "block" }}>
                <Example />

                <Switch>
                  <Route path="/dashboard_teacher" exact component={ShowA} />
                  <Route
                    path="/dashboard_teacher/profiles"
                    exact
                    component={ProfilesShow}
                  />
                  <Route
                    path="/dashboard_teacher/evaluate/:key"
                    exact
                    component={Evaluate}
                  />

                  <Route
                    path="/dashboard_teacher/marksheet/:key"
                    exact
                    component={MarkSheet}
                  />

                  <Route
                    path="/dashboard_teacher/automarker/:key"
                    exact
                    component={AutoMarker}
                  />
                  <Route
                    path="/dashboard_teacher/notes"
                    exact
                    component={() => <Forward ol={true} />}
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

        <Modal open={this.state.open2} onClose={this.onCloseModal2} center>
          <Grid container>
            <Grid item md={12}>
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows="4"
                margin="normal"
                variant="outlined"
                onChange={e => {
                  this.setState({ noti: e.target.value });
                }}
              />
            </Grid>

            <Grid item md={12}>
              <Button
                onClick={() => {
                  var key =
                    "AAAA7vFGP0c:APA91bFVtwwXsz2QSwMRr5YXEk6AyKAXcyVhreOt3bG3zXyqiciAwNjk-zjgW3nXLURvi9uFQ2e1n2wr2KtIn4iIVfuQ34DjndbbEHi_QVwWgw17DSa0jhZYPRNj1og_M6Wvta33VcP4";

                  var to = "/topics/" + this.props.work.replace(" ", "");

                  var notification = {
                    title: window.localStorage.getItem("work"),
                    body: this.state.noti,

                    icon: "firebase-logo.png",
                    click_action: "",
                    sound: "default"
                  };

                  fetch("https://fcm.googleapis.com/fcm/send", {
                    method: "POST",
                    headers: {
                      Authorization: "key=" + key,
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      notification: notification,
                      to: to
                    })
                  })
                    .then(function(response) {
                      console.log("AA", response);

                      window.alert("Notification Sent !");
                    })
                    .catch(function(error) {
                      console.error("bb", error);
                      window.alert(" Error in Sending Notification Sent !");
                    });
                }}
                color="secondary"
              >
                SEND{" "}
              </Button>
            </Grid>
          </Grid>
          <br />
        </Modal>
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
    l: id => {
      dispatch(list(id));
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

function list(index) {
  return { type: "LIST", payload: index };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);
