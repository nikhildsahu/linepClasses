import React, { Component } from "react";
import fire from "../Fire";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "react-avatar";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";

import moment from "moment";
import Link from "react-router-dom/Link";

import "./No.css";
import { connect } from "react-redux";
class NoteShow extends Component {
  state = {
    Notes: []
  };

  componentWillMount() {
    if (this.props.type === "closed") {
      var a = [];

      fire
        .database()
        .ref()
        .child("WorkStation")
        .child(this.props.work)
        .child("Notes")
        .on("child_added", da => {
          a.push({
            Note: da.child("Note").node_.value_,
            timestamp: da.child("timestamp").node_.value_,
            uid: da.child("uid").node_.value_,
            username: da.child("username").node_.value_,
            key: da.child("key").node_.value_
          });
          this.setState({ Notes: a });
        });
    } else {
      var a = [];

      fire
        .database()
        .ref()
        .child("OpenGroup")
        .child(this.props.work)
        .child("Notes")
        .on("child_added", da => {
          a.push({
            Note: da.child("Note").node_.value_,
            timestamp: da.child("timestamp").node_.value_,
            uid: da.child("uid").node_.value_,
            username: da.child("username").node_.value_,
            key: da.child("key").node_.value_
          });
          this.setState({ Notes: a });
        });
    }
  }
  render() {
    return (
      <div className="card ">
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
              Notes
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
              <div className="profiletimeline m-t-0">
                {this.state.Notes.reverse().map(Notes => {
                  return (
                    <Link to={"/dashboard/post/" + Notes.key}>
                      <div
                        style={{
                          textAlign: "left",
                          fontFamily: "'Poppins', sans-serif",
                          minHeight: 100
                        }}
                        className="sl-item card-hover"
                      >
                        <div className="sl-left">
                          {" "}
                          <div>
                            <Avatar
                              size="70"
                              name={Notes.username}
                              src={Notes.propic}
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
                              {Notes.username}
                            </a>{" "}
                            <span className="sl-date">
                              {moment(Notes.timestamp).fromNow()}{" "}
                            </span>
                            <p style={{ fontSize: 13 }} className="m-t-10">
                              {Notes.Note}{" "}
                            </p>
                          </div>
                        </div>
                        <hr />
                      </div>
                    </Link>
                  );
                })}
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
)(NoteShow);
