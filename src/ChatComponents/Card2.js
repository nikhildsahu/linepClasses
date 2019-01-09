import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Avatar from "react-avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardMedia from "@material-ui/core/CardMedia";
import "../A/Style.css";
import FF from "../assets/MyImages/beats.png";

import Grid from "@material-ui/core/Grid";
import "./Chat.css";
import { Paper, Checkbox } from "@material-ui/core";

const styles = theme => ({
  card: {
    minWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class Card2 extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    function UserGreeting(p) {
      if (p != null) {
        return (
          <CardMedia className={classes.media} image={p} title="Paella dish" />
        );
      } else return null;
    }

    const { classes } = this.props;

    return (
      <div>
        {this.props.pic !== undefined ? (
          <div
            style={{
              textAlign: "left",
              fontFamily: "'Poppins', sans-serif",
              minHeight: 100,
              backgroundColor: "white"
            }}
            className="sl-item card-hover"
          >
            <div className="sl-left">
              {" "}
              <div>
                <Avatar
                  size="70"
                  name={this.props.name}
                  src={this.props.propic}
                />{" "}
              </div>
            </div>
            <div className="sl-right">
              <div>
                {" "}
                <a
                  style={{ fontSize: 17 }}
                  href="javascript:void(0)"
                  className="link"
                >
                  {this.props.username}
                </a>{" "}
                <span className="sl-date"> {this.props.timestamp}</span>
                <div className="m-t-20 row">
                  <div className="col-md-3 col-xs-12">
                    <img
                      src={this.props.pic}
                      alt="user"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div style={{ fontSize: 13 }} className="col-md-9 col-xs-12">
                    <p>{this.props.msg}</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ) : (
          <div
            style={{
              textAlign: "left",
              fontFamily: "'Poppins', sans-serif",
              minHeight: 70
            }}
            className="sl-item card-hover shadow"
          >
            <div className="sl-left">
              {" "}
              <div>
                <Avatar
                  size="70"
                  name={this.props.name}
                  src={this.props.propic}
                />
              </div>
            </div>
            <div className="sl-right">
              <div>
                <a
                  style={{ fontSize: 17 }}
                  href="javascript:void(0)"
                  className="link"
                >
                  {this.props.username}{" "}
                </a>{" "}
                <span className="sl-date">{this.props.timestamp} </span>
                <p style={{ fontSize: 13 }} className="m-t-10">
                  {this.props.msg}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Card2.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Card2);
