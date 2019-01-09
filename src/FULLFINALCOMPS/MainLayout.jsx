import React, { Component } from "react";
import ChatShow from "../ChatComponents/ChatShow";
import "../A/Style.css";
import "../ChatComponents/Chat.css";
import CardSendPic from "../ChatComponents/CardSendPic";
import NavBar from "../UIKIT/NavBar";
import "../A/Gh.css";
import menuicon from "../Icons/menu.png";
import Drawer from "../UIKIT/Drawer";
import githubicon from "../Icons/github.png";
import workicon from "../Icons/work.png";

import helpicon from "../Icons/help.png";
import NavBarApp from "./NavBarApp";
import TodoShow from "../TodoComponent/TodoShow";
import PolShow from "../Polls/PolShow";
import { Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import fire from "../Fire";
import Loading from "./Loading";
import axios from "axios";
import NavBar2 from "./NavBar2";
import LottieControl from "./LottieControl";
import cancelicon from "../Icons/cancel.png";
import proicon from "../Icons/profile.png";

import ModalExample from "./ModalExample";
import logo from "../Icons/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import ProfilesShow from "../ChatComponents/ProfilesShow";
import FF from "../assets/MyImages/beats.png";
import Avatar from "react-avatar";
import { Redirect } from "react-router-dom";
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
import Fab from "@material/react-fab";

import Hidden from "@material-ui/core/Hidden";
import NoteShow from "../NotesComponents/NoteShow";
import Post from "./Post";
import Carded from "../UIKIT/Carded";
import Inbox from "../Inbox/Inbox";
import { Grid } from "@material-ui/core";
import SideDrawer from "./SideDrawer";
import Example from "./Example";
import SDashboard from "./SDashboard";
import SInbox from "./SInbox";
import STodo from "./STodo";
import SPoll from "./SPoll";
import SNote from "./SNote";
import LinkShow from "../ChatComponents/LinkShow";
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

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.props.w(window.localStorage.getItem("work"));
    this.props.t(window.localStorage.getItem("type"));

    axios
      .post(
        "https://restinbase.herokuapp.com/delete",
        JSON.stringify({
          type: "msg",
          uid: this.props.uid
        }),
        {
          headers: headers
        }
      )

      .then(response => {})
      .catch(error => {});

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      btnDropright: false,
      isMenuOpen: false,
      Notifications: { Msg: 0, Inbox: 0, Todo: 0, Poll: 0, Note: 0 },
      isPro: false,
      Link: 0,
      Profile: 0,
      isOpen2: false,
      collapsed: true,
      loggedin: true
    };

    fire.auth().onAuthStateChanged(user => {
      console.log("USER", user);

      if (user) {
        this.props.k(user.uid);
        fire
          .database()
          .ref()
          .child("Profiles")
          .child(this.props.uid)
          .child("name")
          .on("value", dd => {
            this.props.n(dd.val());
          });

        fire
          .database()
          .ref()
          .child("Profiles")
          .child(this.props.uid)
          .child("username")
          .on("value", dd => {
            this.props.u(dd.val());
          });
        fire
          .database()
          .ref()
          .child("Profiles")
          .child(this.props.uid)
          .child("pic")
          .on("value", dd => {
            this.props.p(dd.val());
          });

if(this.props.type==="closed")
{
  var a = [];
  fire
    .database()
    .ref()
    .child("WorkStation")
    .child(this.props.work)
    .child("Members")
    .on("child_added", da => {
      a.push(da.val());
      this.props.l(a);

    });


  fire

    .database()
    .ref().child("WorkStation").child(this.props.work)
    .child("Notifications")
    .child(this.props.uid)
    .child("Msg")
    .on("value", ll => {
      if (ll.numChildren() > 0)
        // toast.info("You have " + ll.numChildren() + " Messages's");
        this.setState({
          Notifications: {
            Msg: null,
            Inbox: this.state.Notifications.Inbox,
            Note: this.state.Notifications.Note,
            Todo: this.state.Notifications.Todo,
            Poll: this.state.Notifications.Poll,
            Profiles: this.state.Notifications.Profiles,
            Links: this.state.Notifications.Links
          }
        });
    });

  fire
    .database()
    .ref().child("WorkStation").child(this.props.work)
    .child("Notifications")
    .child(this.props.uid)
    .child("Inbox")

    .on("value", ll => {
      if (ll.numChildren() > 0)
        // toast.success("You have " + ll.numChildren() + " Inbox");

        this.setState({
          Notifications: {
            Inbox: ll.numChildren(),
            Msg: this.state.Notifications.Msg,
            Note: this.state.Notifications.Note,
            Todo: this.state.Notifications.Todo,
            Poll: this.state.Notifications.Poll,
            Profiles: this.state.Notifications.Profiles,
            Links: this.state.Notifications.Links
          }
        });
    });
  fire
    .database()
    .ref().child("WorkStation").child(this.props.work)
    .child("Notifications")
    .child(this.props.uid)
    .child("Note")
    .on("value", ll => {
      if (ll.numChildren() > 0)
        // toast.warn("You have " + ll.numChildren() + " Notes");
        this.setState({
          Notifications: {
            Note: ll.numChildren(),
            Inbox: this.state.Notifications.Inbox,
            Msg: this.state.Notifications.Msg,
            Todo: this.state.Notifications.Todo,
            Poll: this.state.Notifications.Poll,
            Profiles: this.state.Notifications.Profiles,
            Links: this.state.Notifications.Links
          }
        });
    });
  fire
    .database()
    .ref().child("WorkStation").child(this.props.work)
    .child("Members")
    .on("child_added", dd => {
      this.setState({
        Profile: dd.numChildren()
      });
    });

  fire
    .database()
    .ref().child("WorkStation").child(this.props.work)
    .child("Link")
    .on("value", dd => {
      this.setState({
        Link: dd.numChildren()
      });
    });

  fire
    .database()
    .ref().child("WorkStation").child(this.props.work)
    .child("Notifications")
    .child(this.props.uid)
    .child("Todo")
    .on("value", ll => {
      if (ll.numChildren() > 0)
        // toast.error("You have " + ll.numChildren() + " Todo's");
        this.setState({
          Notifications: {
            Todo: ll.numChildren(),
            Inbox: this.state.Notifications.Inbox,
            Msg: this.state.Notifications.Msg,
            Note: this.state.Notifications.Note,
            Poll: this.state.Notifications.Poll,
            Profiles: this.state.Notifications.Profiles,
            Links: this.state.Notifications.Links
          }
        });
    });
    fire
    .database()
    .ref().child("WorkStation").child(this.props.work)
    .child("Notifications")
    .child(this.props.uid)
    .child("Poll")
    .on("value", ll => {
      // toast("You have " + ll.numChildren() + " Poll's");
      if (ll.numChildren() > 0) {
        this.setState({
          Notifications: {
            Poll: ll.numChildren(),
            Inbox: this.state.Notifications.Inbox,
            Msg: this.state.Notifications.Msg,
            Note: this.state.Notifications.Note,
            Todo: this.state.Notifications.Todo,

            Profiles: this.state.Notifications.Profiles,
            Links: this.state.Notifications.Links
          }
        });
      }
    });

}else{

  var a = [];
  fire
    .database()
    .ref()
    .child("OpenGroup")
    .child(this.props.work)
    .child("Members")
    .on("child_added", da => {
      a.push(da.val());
      this.props.l(a);

    });


  fire

    .database()
    .ref().child("OpenGroup").child(this.props.work)
    .child("Notifications")
    .child(this.props.uid)
    .child("Msg")
    .on("value", ll => {
      if (ll.numChildren() > 0)
        // toast.info("You have " + ll.numChildren() + " Messages's");
        this.setState({
          Notifications: {
            Msg: null,
            Inbox: this.state.Notifications.Inbox,
            Note: this.state.Notifications.Note,
            Todo: this.state.Notifications.Todo,
            Poll: this.state.Notifications.Poll,
            Profiles: this.state.Notifications.Profiles,
            Links: this.state.Notifications.Links
          }
        });
    });

  fire
    .database()
    .ref().child("OpenGroup").child(this.props.work)
    .child("Notifications")
    .child(this.props.uid)
    .child("Inbox")

    .on("value", ll => {
      if (ll.numChildren() > 0)
        // toast.success("You have " + ll.numChildren() + " Inbox");

        this.setState({
          Notifications: {
            Inbox: ll.numChildren(),
            Msg: this.state.Notifications.Msg,
            Note: this.state.Notifications.Note,
            Todo: this.state.Notifications.Todo,
            Poll: this.state.Notifications.Poll,
            Profiles: this.state.Notifications.Profiles,
            Links: this.state.Notifications.Links
          }
        });
    });
  fire
    .database()
    .ref().child("OpenGroup").child(this.props.work)
    .child("Notifications")
    .child(this.props.uid)
    .child("Note")
    .on("value", ll => {
      if (ll.numChildren() > 0)
        // toast.warn("You have " + ll.numChildren() + " Notes");
        this.setState({
          Notifications: {
            Note: ll.numChildren(),
            Inbox: this.state.Notifications.Inbox,
            Msg: this.state.Notifications.Msg,
            Todo: this.state.Notifications.Todo,
            Poll: this.state.Notifications.Poll,
            Profiles: this.state.Notifications.Profiles,
            Links: this.state.Notifications.Links
          }
        });
    });
  fire
    .database()
    .ref().child("OpenGroup").child(this.props.work)
    .child("Members")
    .on("child_added", dd => {
      this.setState({
        Profile: dd.numChildren()
      });
    });

  fire
    .database()
    .ref().child("OpenGroup").child(this.props.work)
    .child("Link")
    .on("value", dd => {
      this.setState({
        Link: dd.numChildren()
      });
    });

  fire
    .database()
    .ref().child("OpenGroup").child(this.props.work)
    .child("Notifications")
    .child(this.props.uid)
    .child("Todo")
    .on("value", ll => {
      if (ll.numChildren() > 0)
        // toast.error("You have " + ll.numChildren() + " Todo's");
        this.setState({
          Notifications: {
            Todo: ll.numChildren(),
            Inbox: this.state.Notifications.Inbox,
            Msg: this.state.Notifications.Msg,
            Note: this.state.Notifications.Note,
            Poll: this.state.Notifications.Poll,
            Profiles: this.state.Notifications.Profiles,
            Links: this.state.Notifications.Links
          }
        });
    });
    fire
    .database()
    .ref().child("OpenGroup").child(this.props.work)
    .child("Notifications")
    .child(this.props.uid)
    .child("Poll")
    .on("value", ll => {
      // toast("You have " + ll.numChildren() + " Poll's");
      if (ll.numChildren() > 0) {
        this.setState({
          Notifications: {
            Poll: ll.numChildren(),
            Inbox: this.state.Notifications.Inbox,
            Msg: this.state.Notifications.Msg,
            Note: this.state.Notifications.Note,
            Todo: this.state.Notifications.Todo,

            Profiles: this.state.Notifications.Profiles,
            Links: this.state.Notifications.Links
          }
        });
      }
    });
}


        if (this.props.type === "open") {
          fire
            .database()
            .ref()
            .child("OpenGroup")
            .child(this.props.work)
            .child("Members")
            .child(this.props.uid)
            .set(this.props.uid);
        }
      
      } else {
        this.setState({ loggedin: false });
      }
    });

    this.setState({ lodded: true });
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
      case "/dashboard": {
        DashStyle = {
          color: "#6479ed",
          backgroundColor: "#6479ed"
        };
        InboxStyle = {
          color: "white"
        };

        TodoStyle = {
          color: "white"
        };
        NoteStyle = {
          color: "white"
        };
        PollStyle = {
          color: "white"
        };
        LinkStyle = {
          color: "white"
        };

        ProfileStyle = {
          color: "white"
        };

        DashText = { color: "white" };
        InboxText = { color: "black" };
        PollText = { color: "black" };
        NoteText = { color: "black" };
        TodoText = { color: "black" };
        LinkText = { color: "black" };

        ProfileText = { color: "black" };

        break;
      }
      case "/dashboard/todo": {
        DashStyle = {
          color: "white"
        };
        InboxStyle = {
          color: "white"
        };

        TodoStyle = {
          color: "#6479ed",
          backgroundColor: "#6479ed"
        };
        NoteStyle = {
          color: "white"
        };
        PollStyle = {
          color: "white"
        };

        LinkStyle = {
          color: "white"
        };

        ProfileStyle = {
          color: "white"
        };

        DashText = { color: "black" };
        InboxText = { color: "black" };
        PollText = { color: "black" };
        NoteText = { color: "black" };
        TodoText = { color: "white" };
        LinkText = { color: "black" };

        ProfileText = { color: "black" };

        break;
      }
      case "/dashboard/poll": {
        DashStyle = {
          color: "white"
        };
        InboxStyle = {
          color: "white"
        };

        TodoStyle = {
          color: "white"
        };
        NoteStyle = {
          color: "white"
        };
        PollStyle = {
          color: "#6479ed",
          backgroundColor: "#6479ed"
        };

        LinkStyle = {
          color: "white"
        };

        ProfileStyle = {
          color: "white"
        };

        DashText = { color: "black" };
        InboxText = { color: "black" };
        PollText = { color: "white" };
        NoteText = { color: "black" };
        TodoText = { color: "black" };
        LinkText = { color: "black" };

        ProfileText = { color: "black" };

        break;
      }

      case "/dashboard/inbox": {
        DashStyle = {
          color: "white"
        };
        InboxStyle = {
          color: "#6479ed",
          backgroundColor: "#6479ed"
        };

        TodoStyle = {
          color: "white"
        };
        NoteStyle = {
          color: "white"
        };
        PollStyle = {
          color: "white"
        };

        LinkStyle = {
          color: "white"
        };

        ProfileStyle = {
          color: "white"
        };

        DashText = { color: "black" };
        InboxText = { color: "white" };
        PollText = { color: "black" };
        NoteText = { color: "black" };
        TodoText = { color: "black" };
        LinkText = { color: "black" };

        ProfileText = { color: "black" };

        break;
      }
      case "/dashboard/note": {
        DashStyle = {
          color: "white"
        };
        InboxStyle = {
          color: "white"
        };

        TodoStyle = {
          color: "white"
        };
        NoteStyle = {
          color: "#6479ed",
          backgroundColor: "#6479ed"
        };
        PollStyle = {
          color: "white"
        };
        LinkStyle = {
          color: "white"
        };

        ProfileStyle = {
          color: "white"
        };

        DashText = { color: "black" };
        InboxText = { color: "black" };
        PollText = { color: "black" };
        NoteText = { color: "white" };
        TodoText = { color: "black" };
        LinkText = { color: "black" };
        ProfileText = { color: "black" };
        break;
      }

      case "/dashboard/profiles": {
        DashStyle = {
          color: "white"
        };
        InboxStyle = {
          color: "white"
        };

        TodoStyle = {
          color: "white"
        };
        NoteStyle = {
          color: "white"
        };
        PollStyle = {
          color: "white"
        };

        LinkStyle = {
          color: "white"
        };

        ProfileStyle = {
          color: "#6479ed",
          backgroundColor: "#6479ed"
        };

        DashText = { color: "black" };
        InboxText = { color: "black" };
        PollText = { color: "black" };
        NoteText = { color: "black" };
        TodoText = { color: "black" };
        LinkText = { color: "black" };
        ProfileText = { color: "white" };
        break;
      }

      case "/dashboard/links": {
        DashStyle = {
          color: "white"
        };
        InboxStyle = {
          color: "white"
        };

        TodoStyle = {
          color: "white"
        };
        NoteStyle = {
          color: "white"
        };
        PollStyle = {
          color: "white"
        };

        LinkStyle = {
          color: "#6479ed",
          backgroundColor: "#6479ed"
        };

        ProfileStyle = {
          color: "white"
        };

        DashText = { color: "black" };
        InboxText = { color: "black" };
        PollText = { color: "black" };
        NoteText = { color: "black" };
        TodoText = { color: "black" };
        LinkText = { color: "white" };
        ProfileText = { color: "black" };
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
      case "/dashboard": {
        DashStyle = {
          color: "#6479ed",
          backgroundColor: "#6479ed"
        };
        InboxStyle = {
          color: "white"
        };

        TodoStyle = {
          color: "white"
        };
        NoteStyle = {
          color: "white"
        };
        PollStyle = {
          color: "white"
        };

        DashText = { color: "white" };
        InboxText = { color: "black" };
        PollText = { color: "black" };
        NoteText = { color: "black" };
        TodoText = { color: "black" };
        LinkText = { color: "black" };

        ProfileText = { color: "black" };

        break;
      }
      case "/dashboard/todo": {
        DashStyle = {
          color: "white"
        };
        InboxStyle = {
          color: "white"
        };

        TodoStyle = {
          color: "#6479ed",
          backgroundColor: "#6479ed"
        };
        NoteStyle = {
          color: "white"
        };
        PollStyle = {
          color: "white"
        };

        DashText = { color: "black" };
        InboxText = { color: "black" };
        PollText = { color: "black" };
        NoteText = { color: "black" };
        TodoText = { color: "white" };
        LinkText = { color: "black" };

        ProfileText = { color: "black" };

        break;
      }
      case "/dashboard/poll": {
        DashStyle = {
          color: "white"
        };
        InboxStyle = {
          color: "white"
        };

        TodoStyle = {
          color: "white"
        };
        NoteStyle = {
          color: "white"
        };
        PollStyle = {
          color: "#6479ed",
          backgroundColor: "#6479ed"
        };
        DashText = { color: "black" };
        InboxText = { color: "black" };
        PollText = { color: "white" };
        NoteText = { color: "black" };
        TodoText = { color: "black" };
        LinkText = { color: "black" };

        ProfileText = { color: "black" };

        break;
      }

      case "/dashboard/inbox": {
        DashStyle = {
          color: "white"
        };
        InboxStyle = {
          color: "#6479ed",
          backgroundColor: "#6479ed"
        };

        TodoStyle = {
          color: "white"
        };
        NoteStyle = {
          color: "white"
        };
        PollStyle = {
          color: "white"
        };
        DashText = { color: "black" };
        InboxText = { color: "white" };
        PollText = { color: "black" };
        NoteText = { color: "black" };
        TodoText = { color: "black" };
        LinkText = { color: "black" };

        ProfileText = { color: "black" };

        break;
      }
      case "/dashboard/note": {
        DashStyle = {
          color: "white"
        };
        InboxStyle = {
          color: "white"
        };

        TodoStyle = {
          color: "white"
        };
        NoteStyle = {
          color: "#6479ed",
          backgroundColor: "#6479ed"
        };
        PollStyle = {
          color: "white"
        };
        DashText = { color: "black" };
        InboxText = { color: "black" };
        PollText = { color: "black" };
        NoteText = { color: "white" };
        TodoText = { color: "black" };
        LinkText = { color: "black" };
        ProfileText = { color: "black" };
        break;
      }

      case "/dashboard/profiles": {
        DashStyle = {
          color: "white"
        };
        InboxStyle = {
          color: "white"
        };

        TodoStyle = {
          color: "white"
        };
        NoteStyle = {
          color: "white"
        };
        PollStyle = {
          color: "white"
        };

        LinkStyle = {
          color: "white"
        };

        ProfileStyle = {
          color: "#6479ed",
          backgroundColor: "#6479ed"
        };

        DashText = { color: "black" };
        InboxText = { color: "black" };
        PollText = { color: "black" };
        NoteText = { color: "black" };
        TodoText = { color: "black" };
        LinkText = { color: "black" };
        ProfileText = { color: "white" };
        break;
      }

      case "/dashboard/links": {
        DashStyle = {
          color: "white"
        };
        InboxStyle = {
          color: "white"
        };

        TodoStyle = {
          color: "white"
        };
        NoteStyle = {
          color: "white"
        };
        PollStyle = {
          color: "white"
        };

        LinkStyle = {
          color: "#6479ed",
          backgroundColor: "#6479ed"
        };

        ProfileStyle = {
          color: "white"
        };

        DashText = { color: "black" };
        InboxText = { color: "black" };
        PollText = { color: "black" };
        NoteText = { color: "black" };
        TodoText = { color: "black" };
        LinkText = { color: "white" };
        ProfileText = { color: "black" };
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
        {this.l()}
        {this.props.work === null ? <Redirect to="/workstation" /> : null}
        {this.state.loggedin ? null : <Redirect to="/login" />}
        {this.state.Mobile ? (
          <div id="main-wrapper" data-theme="light">
            {" "}
            <div className="page-wrapper" style={{ display: "block" }}>
              <div>
                <NavBarApp />
              </div>
              <div className="container-fluid">
                {this.props.name && this.props.uid && this.props.username ? (
                  <div>
                    <Carded />

                    <Switch>
                      <Route exact path="/dashboard" component={ChatShow} />
                      {/* <Route exact path="/dashboard/todo" component={TodoShow} /> */}
                      <Route
                        exact
                        path="/dashboard/todo"
                        render={routeProps => (
                          <TodoShow username={this.props.username} />
                        )}
                      />
                      <Route exact path="/dashboard/poll" component={PolShow} />
                      <Route
                        exact
                        path="/dashboard/note"
                        component={NoteShow}
                      />
                      // given a route config like this
                      <Route path="/dashboard/post/:key" component={Post} />
                      <Route
                        exact
                        path="/dashboard/inbox"
                        render={routeProps => (
                          <TodoShow username={this.props.uid} />
                        )}
                        component={Inbox}
                      />
                      <Route
                        exact
                        path="/dashboard/profiles"
                        component={ProfilesShow}
                      />{" "}
                      <Route
                        exact
                        path="/dashboard/links"
                        component={LinkShow}
                      />
                    </Switch>

                    <div className="Rel">
                      <div className="Reliy">
                        <Dropdown
                          color="primary"
                          direction="up"
                          isOpen={this.state.btnDropright}
                          toggle={() => {
                            this.setState({
                              btnDropright: !this.state.btnDropright
                            });
                          }}
                        >
                          <DropdownToggle style={{ zIndex: 50 }} caret>
                            Send New Message
                          </DropdownToggle>
                          <DropdownMenu>
                            <CardSendPic />
                          </DropdownMenu>
                        </Dropdown>
                      </div>{" "}
                    </div>
                    {this.l()}
                  </div>
                ) : (
                  <div class="d-flex justify-content-center align-items-center">
                    <LottieControl />
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            {this.props.name && this.props.uid && this.props.username ? (
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
                        <Link
                          to="/workstation"
                          onClick={() => {
                            window.localStorage.removeItem("work");
                            window.localStorage.removeItem("type");
                            this.props.work = null;
                            this.props.work = null;
                          }}
                        >
                          {" "}
                          <Grid className="card-hover" container>
                            <Grid item md={4}>
                              <img src={workicon} />
                            </Grid>
                            <Grid item md={8}>
                              <b style={{ color: "black" }}>WorkStation</b>
                            </Grid>{" "}
                          </Grid>
                        </Link>
                      </Grid>{" "}
                      <Grid style={{ marginRight: 20 }} item xs={1}>
                        <Grid className="card-hover" container>
                          <Grid item md={4}>
                            <img src={proicon} />
                          </Grid>
                          <Grid item md={8}>
                            <ModalExample />
                          </Grid>
                        </Grid>
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
                      </Grid>
                    </Grid>
                    <div className="navbar-header" data-logobg="skin6">
                      <a className="navbar-brand" href="index.html">
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
                    <div style={{ marginTop: 50 }}>
                      <a class="card-hover">
                        <Avatar
                          size="70"
                          name={this.props.name}
                          src={this.props.pic}
                        />
                      </a>
                    </div>
                    <h4>{this.props.name}</h4>
                    <p className="text-muted">{this.props.username}</p>

                    <div
                      className="slimScrollDiv active"
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "auto",
                        height: 644
                      }}
                    >
                      <div
                        className="slimscroll-menu in"
                        id="remove-scroll"
                        style={{
                          overflow: "hidden",
                          width: "auto",
                          height: 644
                        }}
                      >
                        <div
                          className="card-hover"
                          style={{ backgroundImage: { FF } }}
                        >
                          <Link className="card-hover" to="/dashboard">
                            <Grid
                              style={DashStyle}
                              onClick={() => {
                                axios

                                  .post(
                                    "https://restinbase.herokuapp.com/delete",
                                    JSON.stringify({
                                      type: "msg",
                                      uid: this.props.uid
                                    }),
                                    {
                                      headers: headers
                                    }
                                  )

                                  .then(response => {})
                                  .catch(error => {});

                                window.location.reload();
                              }}
                              container
                            >
                              <Grid item xs={2} />
                              <Grid item xs={6}>
                                <h5 style={DashText}>Dashboard</h5>{" "}
                              </Grid>
                              <Grid style={{ marginTop: 6 }} item xs={2}>
                                <span style={DashText} className="badge">
                                  {this.state.Notifications.Msg}
                                </span>{" "}
                              </Grid>
                            </Grid>
                          </Link>{" "}
                        </div>
                        <div className="card-hover">
                          {" "}
                          <Link to="/dashboard/inbox">
                            <Grid
                              style={InboxStyle}
                              container
                              onClick={() => {
                                axios
                                  .post(
                                    "https://restinbase.herokuapp.com/delete",
                                    JSON.stringify({
                                      type: "inbox",
                                      uid: this.props.uid
                                    }),
                                    {
                                      headers: headers
                                    }
                                  )

                                  .then(response => {})
                                  .catch(error => {});
                                window.location.reload();
                              }}
                            >
                              <Grid item xs={2} />
                              <Grid item xs={6}>
                                <h5 style={InboxText}>Inbox</h5>{" "}
                              </Grid>
                              <Grid style={{ marginTop: 6 }} item xs={2}>
                                <span style={InboxText} className="badge">
                                  {this.state.Notifications.Inbox}
                                </span>{" "}
                              </Grid>
                            </Grid>
                          </Link>
                        </div>
                        <div className="card-hover">
                          <Link to="/dashboard/note">
                            <Grid
                              container
                              style={NoteStyle}
                              onClick={() => {
                                axios
                                  .post(
                                    "https://restinbase.herokuapp.com/delete",
                                    JSON.stringify({
                                      type: "note",
                                      uid: this.props.uid
                                    }),
                                    {
                                      headers: headers
                                    }
                                  )

                                  .then(response => {})
                                  .catch(error => {});
                              }}
                            >
                              <Grid item xs={2} />
                              <Grid item xs={6}>
                                <h5 style={NoteText}>Note</h5>{" "}
                              </Grid>
                              <Grid style={{ marginTop: 6 }} item xs={2}>
                                <span style={NoteText} className="badge">
                                  {this.state.Notifications.Note}
                                </span>{" "}
                              </Grid>
                            </Grid>
                          </Link>
                        </div>
                        <div className="card-hover">
                          <Link to="/dashboard/todo">
                            <Grid
                              style={TodoStyle}
                              container
                              onClick={() => {
                                axios
                                  .post(
                                    "https://restinbase.herokuapp.com/delete",
                                    JSON.stringify({
                                      type: "todo",
                                      uid: this.props.uid
                                    }),
                                    {
                                      headers: headers
                                    }
                                  )

                                  .then(response => {})
                                  .catch(error => {});
                              }}
                            >
                              <Grid item xs={2} />
                              <Grid item xs={6}>
                                <h5 style={TodoText}>Todo</h5>{" "}
                              </Grid>
                              <Grid style={{ marginTop: 6 }} item xs={2}>
                                <span style={TodoText} className="badge">
                                  {this.state.Notifications.Todo}
                                </span>{" "}
                              </Grid>
                            </Grid>
                          </Link>
                        </div>
                        <div className="card-hover">
                          {" "}
                          <Link
                            to="/dashboard/poll"
                            onClick={() => {
                              axios
                                .post(
                                  "https://restinbase.herokuapp.com/delete",
                                  JSON.stringify({
                                    type: "poll",
                                    uid: this.props.uid
                                  }),
                                  {
                                    headers: headers
                                  }
                                )

                                .then(response => {})
                                .catch(error => {});
                            }}
                          >
                            {this.l()}
                            <Grid container style={PollStyle}>
                              <Grid item xs={2} />
                              <Grid item xs={6}>
                                <h5 style={PollText}>Poll</h5>{" "}
                              </Grid>
                              <Grid style={{ marginTop: 6 }} item xs={2}>
                                <span style={PollText} className="badge">
                                  {this.state.Notifications.Poll}
                                </span>{" "}
                              </Grid>
                            </Grid>
                          </Link>
                        </div>

                        <div className="card-hover">
                          <Link to="/dashboard/profiles">
                            <Grid container style={ProfileStyle}>
                              <Grid item xs={2} />
                              <Grid item xs={6}>
                                <h5 style={ProfileText}>Profile</h5>{" "}
                              </Grid>
                              <Grid style={{ marginTop: 6 }} item xs={2}>
                                <span style={ProfileText} className="badge">
                                  {this.state.Profile}
                                </span>
                              </Grid>
                            </Grid>
                          </Link>
                        </div>

                        <div className="card-hover">
                          <Link to="/dashboard/links">
                            <Grid container style={LinkStyle}>
                              <Grid item xs={2} />
                              <Grid item xs={6}>
                                <h5 style={LinkText}>Links</h5>{" "}
                              </Grid>{" "}
                              <Grid style={{ marginTop: 6 }} item xs={2}>
                                <span style={LinkText} className="badge">
                                  {this.state.Link}
                                </span>
                              </Grid>
                            </Grid>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>

                <div className="page-wrapper" style={{ display: "block" }}>
                  <Example />

                  <div className="container-fluid">
                    <ToastContainer />
                    {window.location.pathname === "/dashboard/todo" ? (
                      <Grid alignItems="center" container>
                        <Grid style={{ textAlign: "left" }} item xs={10}>
                          <h3>Todo</h3>
                        </Grid>
                        <Grid item xs={2}>
                          Dashboard {"   "}/ Todo
                        </Grid>{" "}
                      </Grid>
                    ) : null}
                    {window.location.pathname === "/dashboard/poll" ? (
                      <Grid alignItems="center" container>
                        <Grid style={{ textAlign: "left" }} item xs={10}>
                          <h3>Poll</h3>
                        </Grid>
                        <Grid item xs={2}>
                          Dashboard {"   "}/ Poll
                        </Grid>{" "}
                      </Grid>
                    ) : null}
                    {window.location.pathname === "/dashboard/note" ? (
                      <Grid alignItems="center" container>
                        <Grid style={{ textAlign: "left" }} item xs={10}>
                          <h3>Note</h3>
                        </Grid>
                        <Grid item xs={2}>
                          Dashboard {"   "}/ Note
                        </Grid>{" "}
                      </Grid>
                    ) : null}
                    {window.location.pathname === "/dashboard" ? (
                      <Grid alignItems="center" container>
                        <Grid style={{ textAlign: "left" }} item xs={10}>
                          <h3>Dashboard</h3>
                        </Grid>
                        <Grid item xs={2}>
                          Dashboard {"   "}/
                        </Grid>{" "}
                      </Grid>
                    ) : null}
                    {window.location.pathname === "/dashboard/inbox" ? (
                      <Grid alignItems="center" container>
                        <Grid style={{ textAlign: "left" }} item xs={10}>
                          <h3>Inbox</h3>
                        </Grid>
                        <Grid item xs={2}>
                          Dashboard {"   "}/ Inbox
                        </Grid>{" "}
                      </Grid>
                    ) : null}
                    {this.props.name &&
                    this.props.uid &&
                    this.props.username ? (
                      <div>
                        <Carded />
                        <Switch>
                          <Route exact path="/dashboard" component={ChatShow} />
                          {/* <Route exact path="/dashboard/todo" component={TodoShow} /> */}
                          <Route
                          
                            path="/dashboard/todo"
                            render={routeProps => (
                              <TodoShow username={this.props.username} />
                            )}
                          />
                          <Route
                            exact
                            path="/dashboard/poll"
                            component={PolShow}
                          />
                          <Route
                            exact
                            path="/dashboard/note"
                            component={NoteShow}
                          />
                          // given a route config like this
                          <Route path="/dashboard/post/:key" component={Post} />
                          <Route
                            exact
                            path="/dashboard/inbox"
                            render={routeProps => (
                              <TodoShow username={this.props.uid} />
                            )}
                            component={Inbox}
                          />
                          <Route
                            exact
                            path="/dashboard/profiles"
                            component={ProfilesShow}
                          />{" "}
                          <Route
                            exact
                            path="/dashboard/links"
                            component={LinkShow}
                          />
                        </Switch>

                        <div className="Rel">
                          <div className="Reliy">
                            <Dropdown
                              color="primary"
                              direction="up"
                              isOpen={this.state.btnDropright}
                              toggle={() => {
                                this.setState({
                                  btnDropright: !this.state.btnDropright
                                });
                              }}
                            >
                              <DropdownToggle
                                className="waves-effect waves-light btn btn-danger d-block"
                                style={{ zIndex: 50 }}
                                caret
                              >
                                Send New Message
                              </DropdownToggle>
                              <DropdownMenu>
                                <CardSendPic />
                              </DropdownMenu>
                            </Dropdown>
                          </div>{" "}
                        </div>
                      </div>
                    ) : (
                      <div>{""}</div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Loading />
            )}
          </div>
        )}
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
