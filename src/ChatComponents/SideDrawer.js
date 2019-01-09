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
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import Noteicon from "../A/note.png";
import "./Chat.css";
import NoteShow from "../NotesComponents/NoteShow";
import ProfilesShow from "./ProfilesShow";
import TodoShow from "../TodoComponent/TodoShow";
import CardSendPic from "./CardSendPic";
import PolShow from "../Polls/PolShow";

const drawerWidth = 240;

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

class SideDrawer extends React.Component {
  state = {
    mobileOpen: false,
    Card: false
  };

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
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {[
            { name: "Home", url: "/" },
            { name: "Notes", url: "/notes" },
            { name: "Todo", url: "/todo" },
            {
              name: "Poll",
              url: "/poll"
            }
          ].map((text, index) => {
            return (
              <a href={text.url}>
                <ListItem button key={text.name}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                </ListItem>
              </a>
            );
          })}
        </List>
        <Divider />
      </div>
    );

    return (
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
            >
              {drawer}
            </Drawer>
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
            </Drawer>{" "}
            {console.log (classes.button)}
          </Hidden>
        </nav>
        <div className="ll">
          <main className={classes.content}>
            <Grid container>
              <Grid item xs={9}>
                <div>
                  <Switch>
                    <Route exact path="/dashboard/home" component={ChatShow} />
                    <Route path="/dashboard/note" component={NoteShow} />
                    <Route path="/dashboard/todo" component={TodoShow} />                  </Switch>
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
      </div>
    );
  }
}

SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SideDrawer);
