import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { connect } from "react-redux";
import fire from "../Fire";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Grid, TextField, Button } from "@material-ui/core";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import logo from "../Icons/logo.svg";
import Avatar from "react-avatar";
import Link from "react-router-dom/Link";
import axios from "axios";
import ModalExample2 from "./ModalExample2";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ProfilePage from "./ProfilePage";
const drawerWidth = 240;

var headers = {
  "Content-Type": "application/json"
};

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class NavBarApp extends React.Component {
  state = {
    open: false,
    open2: false
  };
  onOpenModal2 = () => {
    this.setState({ open2: true });
  };

  onCloseModal2 = () => {
    this.setState({ open2: false });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div color="white" style={{ marginBottom: 60 }} className={classes.root}>
        <CssBaseline />
        <AppBar
          color="white"
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="black"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <img
              style={{ width: 30, height: 30, marginRight: 10 }}
              src={logo}
            />
            <Typography variant="h6" color="inherit" noWrap>
              LineUp
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          style={{ zIndex: 1111100 }}
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <div>
              <div style={{ marginTop: 15 }}>
                <a class="card-hover">
                  <Avatar
                    size="70"
                    name={window.localStorage.getItem("displayName")}
                    src={window.localStorage.getItem("photoURL")}
                  />
                </a>
              </div>
              <h4>{window.localStorage.getItem("displayName")}</h4>{" "}
            </div>

            <div />

            <ListItem>
              <ListItemText>
                <ListItemIcon />

                <Link style={{ color: "black" }} to="/dashboard_teacher">
                  Assignment
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <ListItemIcon />

                <Link
                  onClick={() => {
                    window.location.reload();
                  }}
                  style={{ color: "black" }}
                  to="/dashboard_teacher/notes"
                >
                  Notes
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <ListItemIcon />

                <Link
                  style={{ color: "black" }}
                  to="/dashboard_teacher/profiles"
                >
                  Students
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem onClick={this.props.func.bind(this, 0)}>
              <ListItemText>
                <ListItemIcon />

                <Link
                  style={{ color: "black" }}
                  to="/dashboard_teacher/profiles"
                >
                  Send Notification
                </Link>
              </ListItemText>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
      </div>
    );
  }
}

NavBarApp.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(NavBarApp));
