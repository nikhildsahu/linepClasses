import React, { Component } from "react";

import { connect } from "react-redux";
import fire from "../Fire";
import NoteIcon from "../A/note.png";
import Grid from "@material-ui/core/Grid";
import Link from "react-router-dom/Link";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import axios from "axios";
import Avatar from "react-avatar";
var headers = {
  "Content-Type": "application/json"
};
class SDashboard extends Component {
  state = {};
  render() {
    return (
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
              style={{ overflow: "hidden", width: "auto", height: 644 }}
            >
            
              {/*- Sidemenu */}
              <Grid container>
                <Grid
                  style={{
                    color: "#000000"
                  }}
                  item
                  xs={4}
                >
                  Atharva{" "}
                </Grid>
              </Grid>

              <div id="sidebar-menu" className="active">
                <ul>
                  <div>
                    <Link className="card-hover" to="/dashboard">
                      <Grid
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

                            .then(response => {
                              console.log ("AS");
                            })
                            .catch(error => {});
                        }}
                        container
                        style={{
                          color: "#6479ed",
                          backgroundColor: "#6479ed"
                        }}
                      >
                        <Grid item xs={2} />
                        <Grid item xs={6}>
                          <h5 style={{ color: "white" }}>Dashboard</h5>{" "}
                        </Grid>
                        <Grid style={{ marginTop: 6 }} item xs={2}>
                          <span style={{ color: "white" }} className="badge">
                            {this.props.Msg}
                          </span>{" "}
                        </Grid>
                      </Grid>
                    </Link>{" "}
                    <Link to="/dashboard/inbox">
                      <Grid
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

                            .then(response => {
                              console.log ("AS");
                            })
                            .catch(error => {
                              console.log ("LLLLL");
                            });
                        }}
                      >
                        <Grid item xs={2} />
                        <Grid item xs={6}>
                          <h5 style={{ color: "black" }}>Inbox</h5>{" "}
                        </Grid>
                        <Grid style={{ marginTop: 6 }} item xs={2}>
                          <span className="badge">{this.props.Inbox}</span>{" "}
                        </Grid>
                      </Grid>
                    </Link>
                    <Link to="/dashboard/note">
                      <Grid
                        container
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

                            .then(response => {
                              console.log ("AS");
                            })
                            .catch(error => {});
                        }}
                      >
                        <Grid item xs={2} />
                        <Grid item xs={6}>
                          <h5 style={{ color: "black" }}>Note</h5>{" "}
                        </Grid>
                        <Grid style={{ marginTop: 6 }} item xs={2}>
                          <span className="badge">{this.props.Note}</span>{" "}
                        </Grid>
                      </Grid>
                    </Link>
                    <Link to="/dashboard/todo">
                      <Grid
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

                            .then(response => {
                              console.log ("AS");
                            })
                            .catch(error => {});
                        }}
                      >
                        <Grid item xs={2} />
                        <Grid item xs={6}>
                          <h5 style={{ color: "black" }}>Todo</h5>{" "}
                        </Grid>
                        <Grid style={{ marginTop: 6 }} item xs={2}>
                          <span className="badge">{this.props.Todo}</span>{" "}
                        </Grid>
                      </Grid>
                    </Link>
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
                      <Grid container>
                        <Grid item xs={2} />
                        <Grid item xs={6}>
                          <h5 style={{ color: "black" }}>Poll</h5>{" "}
                        </Grid>
                        <Grid style={{ marginTop: 6 }} item xs={2}>
                          <span className="badge">{this.props.Poll}</span>{" "}
                        </Grid>
                      </Grid>
                    </Link>
                  </div>
                </ul>
              </div>
              {/* Sidebar */}
              <div className="clearfix" />
            </div>
            <div
              className="slimScrollBar"
              style={{
                background: "rgb(158, 165, 171)",
                width: 8,
                position: "absolute",
                top: 66,
                opacity: "0.4",
                display: "none",
                borderRadius: 7,
                zIndex: 99,
                right: 1,
                height: "423.2px"
              }}
            />
            <div
              className="slimScrollRail"
              style={{
                width: 8,
                height: "100%",
                position: "absolute",
                top: 0,
                display: "none",
                borderRadius: 7,
                background: "rgb(51, 51, 51)",
                opacity: "0.2",
                zIndex: 90,
                right: 1
              }}
            />
          </div>
        </div>
        {console.log ("End", this.props.Msg)}
      </aside>
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
)(SDashboard);
