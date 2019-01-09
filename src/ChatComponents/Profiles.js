import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import ProfilesShow from "./ProfilesShow";
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: 0
  },
  toolbar: theme.mixins.toolbar
});

function Profiles(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      <ProfilesShow />
    </div>
  );
}

Profiles.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profiles);
