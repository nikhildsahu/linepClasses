import React, { Component } from "react";
import fire from "../Fire";
import List from "@material-ui/core/List";

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
import Card from "./Card";
import Avatar from "react-avatar";
import Link from "react-router-dom/Link";

class LinkShow extends Component {
  state = { Links: [] };

  componentWillMount() {
    if (this.props.type === "closed") {
      var a = [];
      fire
        .database()
        .ref()
        .child("WorkStation")
        .child(this.props.work)
        .child("Link")
        .on("child_added", dd => {
          console.log(dd.val());

          a.push(dd.val());
          this.setState({ Links: a });
        });
    } else {
      fire
        .database()
        .ref()
        .child("OpenGroup")
        .child(this.props.work)
        .child("Link")
        .on("child_added", dd => {
          console.log(dd.val());

          a.push(dd.val());
          this.setState({ Links: a });
        });
    }
  }

  render() {
    return (
      <div className="card">
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
              Links
            </a>
          </li>
        </ul>
        {/* Tabs */}
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade active show"
            id="current-month"
            role="tabpanel"
            aria-labelledby="pills-timeline-tab"
          >
            <div className="card-body">
              <div>
                <div>
                  {this.state.Links.slice(0)
                    .reverse()
                    .map(Links => {
                      return (
                        <div className="card-hover">
                          {" "}
                          <Grid
                            style={{ padding: 20 }}
                            container
                            justify="flex-start"
                          >
                            <Grid justify="flex-start" xs={0.5} md={1} item>
                              <Avatar size="60" name="Links" />
                            </Grid>
                            <Grid
                              style={{ textAlign: "left" }}
                              justify="flex-start"
                              xs={11}
                              item
                            >
                              <a href={Links}>
                                <h4>{Links}</h4>
                              </a>
                            </Grid>
                          </Grid>{" "}
                        </div>
                      );
                    })}
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
)(LinkShow);
