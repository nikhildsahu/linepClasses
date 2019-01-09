import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ChatShow from "./ChatShow";
import Fab from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import fire from "../Fire";
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";
import ProfilesShow from "./ProfilesShow";
import CardSendPic from "./CardSendPic";
import Badge from "@material-ui/core/Badge";
import { Paper } from "@material-ui/core";

const drawerWidth = 240;
const isLogged = false;
const style = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
};
const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: 0
  }
});

class FinalChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      Card: false,
      lodded: false
    };

    fire.auth().onAuthStateChanged(user => {
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

            console.log(dd.val());
          });

        fire
          .database()
          .ref()
          .child("Profiles")
          .child(this.props.uid)
          .child("username")
          .on("value", dd => {
            this.props.u(dd.val());
            console.log(dd.val());
          });
      }
    });

    this.setState({ lodded: true });
  }

  componentDidMount() {}

  CHeck = () => {

    fire.auth().onAuthStateChanged(user => {
      if (user) {
        fire
          .database()
          .ref()
          .child("Profiles")
          .child(fire.auth().currentUser.uid)
          .on("child_added", f => {
            console.log(f);
          });
      } else {
        window.alert("OFF");
      }
    });
  };
  // hi = () => {
  //   console.log ("ATHARVASSSSSSSSATAHRVASSSATHARVASSSATHAR$AVQA");
  //   fire
  //     .database()
  //     .ref()
  //     .child("Profiles")
  //     .child(fire.auth().currentUser.uid)
  //     .on("child_added", f => {
  //       this.setState({ avu: f.val() });

  //       console.log (this.state);
  //     });
  // };
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handlecard = () => {
    this.setState({
      Card: !this.state.Card
    });
  };

  as() {
    if (this.state.Card === true) {
      return <CardSendPic uid={this.props.uid} />;
    }
  }
  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div style={{ padding: 10 }}>
        <div style={{ backgroundColor: "#f7f9fc", padding: 7 }}>
          <div>
            <Grid container justify="center" alignItems="center">
              <Avatar
                style={{ paper: { zIndex: 50 } }}
                style={{ width: 60, height: 60 }}
                className={classes.avatar}
              >
                H
              </Avatar>
            </Grid>
          </div>
          <div style={{ padding: 11 }}>
            <Grid container justify="center" alignItems="center">
              <Typography
                style={{ style }}
                component="h2"
                variant="headline"
                gutterBottom
                color="#CD92FF"
              >
                {this.props.username}{" "}
              </Typography>
            </Grid>{" "}
          </div>

          <div>
            <Grid container justify="center" alignItems="center">
              <Typography variant="subheading" gutterBottom>
                {this.props.name}
              </Typography>
            </Grid>
          </div>

          <div style={{ paddingBottom: 4 }} />
        </div>
        <List>
          {[
            { name: "Home", url: "/" },
            { name: "Notes", url: "/notes" },
            { name: "Todko", url: "/todo" },
            {
              name: "Poll",
              url: "/poll"
            }
          ].map((text, index) => {
            return (
              <a href={text.url}>
                {" "}
                <ListItem button key={text.name}>
                  <ListItemText primary={text.name} />
                  <Badge
                    color="primary"
                    invisible={index % 2 === 0 ? true : false}
                  >
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                  </Badge>
                </ListItem>{" "}
              </a>
            );
          })}
        </List>
        <Divider />
      </div>
    );

    return (
      <div>
        <div className={classes.root}>
          <CssBaseline />

          <nav className={classes.drawer}>
            {/* The implementation can be swap with js to avoid SEO duplication of links. */}

            <Hidden smUp implementation="css">
              <Drawer
                container={this.props.container}
                variant="temporary"
                anchor={theme.direction === "rtl" ? "right" : "left"}
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper
                }}
                ModalProps={{
                  keepMounted: true // Better open performance on mobile.
                }}
              />
            </Hidden>
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                  Responsive drawer
                </Typography>
              </Toolbar>
            </AppBar>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <div className="ll">
            <main className={classes.content}>
              <Grid container>
                <Grid item xs={9}>
                  <div>
                    <ChatShow />
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <Hidden only="xs">
                    <div style={{ position: "fixed" }}>
                      <ProfilesShow />
                    </div>
                  </Hidden>
                </Grid>
              </Grid>
              {this.CHeck}
              <div className="Rel">
                <div className="Reliy"> {this.as()} </div>
                <div className="Reli">
                  <Fab
                    onClick={this.handlecard}
                    color="secondary"
                    aria-label="Edit"
                  >
                    <Icon>edit_icon</Icon>
                  </Fab>
                </div>
              </div>{" "}
            </main>
          </div>
        </div>{" "}
      </div>
    );
  }
}

FinalChat.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
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
)(withStyles(styles, { withTheme: true })(FinalChat));
