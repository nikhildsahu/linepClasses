import React, { Component } from "react";
import fire from "../Fire";
import List from "@material-ui/core/List";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Fab from "@material-ui/core/ButtonBase";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { connect } from "react-redux";

import Todo2 from "./Todo2";

import ListItemText from "@material-ui/core/ListItemText";
class TodoShow extends Component {
  state = {
    Todo: [],
    expanded: false,
    checkb: []
  };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  componentWillMount() {
    if (this.props.type === "closed") {
      var jj = [];

      var i = 0;
      fire
        .database()
        .ref()
        .child("Profiles")
        .child(fire.auth().currentUser.uid)
        .child("username")
        .on("value", ff => {
          this.setState({ username: ff.val() });
        });

      console.log("COMPO", this.props.username);
      fire
        .database()
        .ref()
        .child("WorkStation")
        .child(this.props.work)
        .child("Todo")
        .on("child_added", da => {
          var b = [];
          var g = false;
          fire
            .database()
            .ref()
            .child("WorkStation")
            .child(this.props.work)
            .child("Todo")
            .child(da.key)
            .child("Completed")
            .on("child_added", d => {
              if (d.val() === this.state.username) {
                g = true;
              }
              console.log(d.val());
              b.push(d.val());
            });

          var ll = {
            Info: {
              todo: da.val().info.todo,
              msg: da.val().info.msg,
              timestamp: da.val().info.timestamp,
              key: da.val().info.key,
              uid: da.val().info.uid,
              username: da.val().info.username,
              ref: da.key,
              check: g,
              index: i
            },
            Completed: b
          };

          jj.push(ll);

          this.setState({ Todo: jj });
        });
    } else {
      var jj = [];

      var i = 0;
      fire
        .database()
        .ref()
        .child("Profiles")
        .child(fire.auth().currentUser.uid)
        .child("username")
        .on("value", ff => {
          this.setState({ username: ff.val() });
        });

      console.log("COMPO", this.props.username);
      fire
        .database()
        .ref()
        .child("OpenGroup")
        .child(this.props.work)
        .child("Todo")
        .on("child_added", da => {
          var b = [];
          var g = false;
          fire
            .database()
            .ref()
            .child("OpenGroup")
            .child(this.props.work)
            .child("Todo")
            .child(da.key)
            .child("Completed")
            .on("child_added", d => {
              if (d.val() === this.state.username) {
                g = true;
              }
              console.log(d.val());
              b.push(d.val());
            });

          var ll = {
            Info: {
              todo: da.val().info.todo,
              msg: da.val().info.msg,
              timestamp: da.val().info.timestamp,
              key: da.val().info.key,
              uid: da.val().info.uid,
              username: da.val().info.username,
              ref: da.key,
              check: g,
              index: i
            },
            Completed: b
          };

          jj.push(ll);

          this.setState({ Todo: jj });
        });
    }
  }
  jk() {
    console.log("AA");
  }
  ch = () => {
    if (1) {
    }
  };
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
          .child("uid")
          .set("username")
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
          .child("uid")
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
          .child("uid")
          .set("username")
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
          .child("uid")
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
        <div>
          <ul
            className="nav nav-pills custom-pills"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active show"
                id="pills-timeline-tab"
                data-toggle="pill"
                href="#current-month"
                role="tab"
                aria-controls="pills-timeline"
                aria-selected="true"
              >
                {" "}
                Timeline
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade active show"
              id="current-month"
              role="tabpanel"
              aria-labelledby="pills-timeline-tab"
            >
              <div className="card-body">
                <div className="profiletimeline m-t-0">
                  <ul>
                    {this.state.Todo.map(Todo => {
                      return (
                        <li>
                          <Todo2 Todo={Todo} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
)(TodoShow);
