import React, { Component } from "react";

import fire from "../Fire";
import { connect } from "react-redux";
import Avatar from "react-avatar";
import { Grid, Button, Collapse } from "@material-ui/core";
import Evaluate from "../Submit/Evaluate";
import Link from "react-router-dom/Link";
import datetimeDifference from "datetime-difference";
import Modal from "react-responsive-modal";
import TeacherA from "./TeacherA";
class ShowA extends Component {
  constructor(props) {
    super(props);

    this.props.w(window.localStorage.getItem("work"));
    this.props.k(window.localStorage.getItem("uid"));
    this.props.p(window.localStorage.getItem("photoURL"));
    this.props.n(window.localStorage.getItem("displayName"));

    this.state = { my: [], expanded: false };
    var a = [];
    const date1 = new Date(2546276632777);
    const date2 = new Date(1546276630642);

    const result = datetimeDifference(date1, date2);
  }

  componentWillMount() {
    console.log("AAA", this.props);
    var a = [];
    fire
      .database()
      .ref()
      .child("Classes")
      .child(window.localStorage.getItem("work"))
      .child("Assignmnet")
      .on("child_added", da => {
        var gg = [];

        fire
          .database()
          .ref()
          .child("Classes")
          .child(window.localStorage.getItem("work"))
          .child("Assignmnet")
          .child(da.key)
          .child("Completed")
          .on("child_added", kk => {
            gg.push({ name: kk.val().name, file: kk.val().file });
          });
        a.push({
          name: da.val().name,
          key: da.key,
          endt: da.val().endt,
          marks: da.val().marks,
          startt: da.val().startt,
          title: da.val().title,
          com: gg,
          open: da.val().open
        });
        this.setState({ my: a });

        console.log(this.state);
      });
  }
  render() {
    return (
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
              Assignment
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
              {this.state.my.map(my => {
                var newDate = new Date();
                newDate.setTime(my.startt);
                var dateString =
                  newDate.getDate() +
                  "/" +
                  newDate.getMonth() +
                  "/" +
                  newDate.getFullYear();

                var ll = new Date();
                ll.setTime(my.endt);

                return (
                  <div
                    style={{
                      textAlign: "left",
                      fontFamily: "'Poppins', sans-serif",
                      minHeight: 100,
                      backgroundColor: "white"
                    }}
                    className="sl-item card-hover"
                  >
                    <Grid container>
                      <Grid item md={0.3} />
                      <Grid item md={3}>
                        <h4 style={{ color: "#6300cc" }}>
                          Name :
                          <font style={{ color: "black" }}>{my.name}</font>{" "}
                        </h4>{" "}
                      </Grid>
                      <Grid item md={3}>
                        <h4 style={{ color: "#6300cc" }}>
                          Starting Date :
                          <font style={{ color: "black" }}>
                            {new Date(my.startt).getDate() +
                              "/" +
                              (new Date(my.startt).getMonth() + 1) +
                              "/" +
                              new Date(my.startt).getFullYear()}
                          </font>{" "}
                        </h4>
                      </Grid>{" "}
                      <Grid item md={3}>
                        <h4 style={{ color: "#6300cc" }}>
                          Last Date of Submission :
                          <font style={{ color: "black" }}>
                            {new Date(my.endt).getDate() +
                              "/" +
                              (new Date(my.endt).getMonth() + 1) +
                              "/" +
                              new Date(my.endt).getFullYear()}
                          </font>{" "}
                        </h4>{" "}
                      </Grid>{" "}
                      <Grid item md={3}>
                        <h4 style={{ color: "#6300cc" }}>
                          Marks :
                          <font style={{ color: "black" }}>{my.marks}</font>{" "}
                        </h4>{" "}
                      </Grid>
                    </Grid>{" "}
                    <hr />
                    <Grid container>
                      {" "}
                      <h4 style={{ color: "#6300cc" }}>
                        Title:{" "}
                        <font style={{ color: "black" }}>{my.title}</font>{" "}
                      </h4>{" "}
                    </Grid>
                    <hr />
                    <Grid container justify="flex-end">
                      <Grid item md={1.3} style={{ padding: "15px" }}>
                        <Button
                          onClick={() => {
                            this.setState({ expanded: !this.state.expanded });
                          }}
                          style={{
                            paddingLeft: "20px",
                            width: 230
                          }}
                          color="primary"
                          variant="outlined"
                        >
                          <b>Completed </b>
                        </Button>{" "}
                      </Grid>
                      {/* <Grid item md={1.3} style={{ padding: "15px" }}>
                        <Link
                          onClick={() => {
                            window.location.reload();
                          }}
                          style={{ color: "white" }}
                          to={"/dashboard_teacher/automarker/" + my.key}
                        >
                          <Button
                            style={{
                              paddingLeft: "20px",
                              width: 230
                            }}
                            color="primary"
                            variant="outlined"
                          >
                            <b>Auto Evaluater </b>
                          </Button>{" "}
                        </Link>
                      </Grid> */}
                      <Grid item md={1.3} style={{ padding: "15px" }}>
                        <Button
                          onClick={() => {
                            if (
                              window.confirm(
                                "Really you Want To make All Submitted Files Public To Student?"
                              )
                            ) {
                              fire
                                .database()
                                .ref()
                                .child("Classes")
                                .child(this.props.work)
                                .child("Assignmnet")
                                .child(my.key)
                                .child("Show")
                                .set(true);
                            }
                          }}
                          style={{
                            paddingLeft: "20px",
                            width: 230
                          }}
                          color="primary"
                          variant="outlined"
                        >
                          <b>Make Assignment Public </b>
                        </Button>{" "}
                      </Grid>
                      <Modal>
                        <h4>Atharva </h4>
                      </Modal>

                      <Grid item md={1.3} style={{ padding: "15px" }}>
                        <Link
                          onClick={() => {}}
                          style={{ color: "white" }}
                          to={"/dashboard_teacher/evaluate/" + my.key}
                        >
                          {" "}
                          <Button
                            style={{
                              paddingLeft: "20px",
                              width: 230
                            }}
                            color="primary"
                            variant="outlined"
                          >
                            <b>Evaluate </b>{" "}
                          </Button>{" "}
                        </Link>{" "}
                      </Grid>
                      <Grid item md={1.3} style={{ padding: "15px" }}>
                        {" "}
                        <Link
                          style={{ color: "white" }}
                          to={"/dashboard_teacher/marksheet/" + my.key}
                        >
                          <Button
                            color="primary"
                            variant="outlined"
                            style={{
                              paddingLeft: "20px",
                              width: 230
                            }}
                          >
                            <b>MarkSheet </b>{" "}
                          </Button>{" "}
                        </Link>
                      </Grid>
                    </Grid>
                    <Collapse
                      style={{ width: "100%" }}
                      in={this.state.expanded}
                      timeout="auto"
                      unmountOnExit
                    >
                      {" "}
                      <h4 style={{ color: "#6300cc" }}>
                        People Who Submitted Assignmnets
                      </h4>{" "}
                      {my.open
                        ? my.com.map(com => {
                            return (
                              <Grid container>
                                <Grid item md={6}>
                                  <h4>{com.name}</h4>
                                </Grid>
                                <Grid item md={6}>
                                  <h4>{com.file}</h4>
                                </Grid>
                                <hr />
                              </Grid>
                            );
                          })
                        : my.com.map(com => {
                            return (
                              <Grid style={{ paddingLeft: "20px" }} container>
                                <Grid item md={3}>
                                  <h4>{com.name}</h4>
                                </Grid>
                                {my.Show ? (
                                  <Grid item md={3}>
                                    <h4>
                                      <Button
                                        onClick={() => {
                                          window.open(com.file);
                                        }}
                                      >
                                        View Assignment
                                      </Button>
                                    </h4>
                                  </Grid>
                                ) : null}
                                <hr />
                              </Grid>
                            );
                          })}
                    </Collapse>{" "}
                    <Grid container />
                  </div>
                );
              })}
            </div>
            <div>
              <div className="Rel">
                <div className="Reliy">
                  <TeacherA />
                </div>{" "}
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
    },
    l: id => {
      dispatch(list(id));
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

function list(index) {
  return { type: "LIST", payload: index };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowA);
