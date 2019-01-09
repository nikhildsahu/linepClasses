import React, { Component } from "react";
import fire from "../Fire";
import List from "@material-ui/core/List";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Fab from "@material-ui/core/ButtonBase";
import IconButton from "@material-ui/core/IconButton";

import moment from "moment";
import Collapse from "@material-ui/core/Collapse";

import Link from "react-router-dom/Link";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import dash from "../Icons/shape-1.svg";

import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";
const style = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
};
class Todo2 extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  s(r, c) {
    if (this.props.type === "closed") {
      if (c === false) {
        fire
          .database()
          .ref()
          .child("WorkStation")
          .child(this.props.work)

          .child("Todo")
          .child(r)
          .child("Completed")
          .child(this.props.uid)
          .set(this.props.username)
          .then(() => {
            window.location.reload();
          });
      } else {
        fire
          .database()
          .ref()
          .child("WorkStation")
          .child(this.props.work)
          .child("Todo")
          .child(r)
          .child("Completed")
          .child(this.props.uid)
          .remove()
          .then(() => {
            window.location.reload();
          });
      }
    } else {
      if (c === false) {
        fire
          .database()
          .ref()
          .child("OpenGroup")
          .child(this.props.work)

          .child("Todo")
          .child(r)
          .child("Completed")
          .child(this.props.uid)
          .set(this.props.username)
          .then(() => {
            window.location.reload();
          });
      } else {
        fire
          .database()
          .ref()
          .child("OpenGroup")
          .child(this.props.work)

          .child("Todo")
          .child(r)
          .child("Completed")
          .child(this.props.uid)
          .remove()
          .then(() => {
            window.location.reload();
          });
      }
    }
  }

  render() {
    return (
      <div>
        <div
          style={{
            textAlign: "left",
            fontFamily: "'Poppins', sans-serif",
            minHeight: 50
          }}
          className="sl-item card-hover"
        >
          <div className="sl-left">
            {" "}
            <div>
              <Checkbox
                style={{ width: 70, height: 70 }}
                checked={this.props.Todo.Info.check}
                onClick={this.s.bind(
                  this,
                  this.props.Todo.Info.ref,
                  this.props.Todo.Info.check
                )}
              />{" "}
            </div>
          </div>
          <div className="sl-right">
            <div>
              <a
                style={{ fontSize: 17 }}
                href="javascript:void(0)"
                className="link"
              >
                <b>{this.props.Todo.Info.todo}</b>
                {" : "} {this.props.Todo.Info.username}{" "}
              </a>{" "}
              <span className="sl-date">
                {" "}
                {moment(this.props.Todo.Info.timestamp).fromNow()}{" "}
              </span>
              <p style={{ fontSize: 13 }} className="m-t-10">
                {this.props.Todo.Info.msg}
              </p>
            </div>

            <IconButton
              onClick={this.toggle}
              style={{ left: "90%" }}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </div>
          <Collapse in={this.state.dropdownOpen} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Completed:</Typography>
              {this.props.Todo.Completed ? (
                this.props.Todo.Completed.map(Completed => {
                  return (
                    <li style={{ textAlign: "left" }}>
                      {"@"}
                      {Completed}
                    </li>
                  );
                })
              ) : (
                <h1 />
              )}
            </CardContent>
          </Collapse>

          <hr />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo2);
