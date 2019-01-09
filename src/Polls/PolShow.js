import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardMedia from "@material-ui/core/CardMedia";
import fire from "../Fire";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import "./h.css";
import List from "@material-ui/core/List";
import DoughnutChart from "react-chartjs/lib/doughnut";
import { Typography } from "@material-ui/core";
import moment from "moment";
var s = 0;
var voted = false;
var data = [];
var colo = [
  {
    he: "#f23142",
    bo: "btn waves-effect waves-light btn-danger"
  },
  {
    he: "#8200F0",
    bo: "btn waves-effect waves-light btn-primary"
  },
  {
    he: "#00AD8E",
    bo: "btn waves-effect waves-light btn-success"
  },
  {
    he: "#FCBC00",
    bo: "btn waves-effect waves-light btn-warning"
  },
  {
    he: "#5B6168",
    bo: "btn waves-effect waves-light btn-secondary"
  },
  {
    he: "#E2E4EA",
    bo: "btn waves-effect waves-light btn-light"
  }
];
class PolShow extends Component {
  check() {}
  as(ref, title) {
    if (this.props.type === "closed") {
      fire
        .database()
        .ref()
        .child("WorkStation")
        .child(this.props.work)
        .child("Poll")
        .child(ref)
        .child("vote")
        .child("Username")
        .set(title);

      fire
        .database()
        .ref()
        .child("WorkStation")
        .child(this.props.work)
        .child("Poll")
        .child(ref)
        .child("voteR")
        .child(title)
        .child("Username")
        .set("Username")
        .then(() => {
          window.location.reload();
        });
    } else {
      fire
        .database()
        .ref()
        .child("OpenGroup")
        .child(this.props.work)
        .child("Poll")
        .child(ref)
        .child("vote")
        .child("Username")
        .set(title);

      fire
        .database()
        .ref()
        .child("OpenGroup")
        .child(this.props.work)
        .child("Poll")
        .child(ref)
        .child("voteR")
        .child(title)
        .child("Username")
        .set("Username")
        .then(() => {
          window.location.reload();
        });
    }
  }
  componentWillMount() {
    var a = [];
    var s = [];

    if (this.props.type === "closed") {
      fire
        .database()
        .ref()
        .child("WorkStation")
        .child(this.props.work)
        .child("Poll")
        .on("child_added", da => {
          var check = false;
          fire
            .database()
            .ref()
            .child("WorkStation")
            .child(this.props.work)
            .child("Poll")
            .child(da.key)
            .child("vote")
            .on("child_added", d => {
              if (d.key === "Username") {
                check = true;
              }
            });

          a.push({ a: da.val(), b: da.key, c: check });

          this.setState({ array: a });
          console.log("UJJJJJJJJJJJJJJJ", this.state.array);
          this.state.array.map(array => {
            var data2 = [];

            array.a.title.Pol.map(Pol => {
              var h = 0;

              fire
                .database()
                .ref()
                .child("WorkStation")
                .child(this.props.work)
                .child("Poll")
                .child(array.b)
                .child("voteR")
                .child(Pol)
                .on("value", kak => {
                  if (kak.exists) {
                    var jon = this.state.array.indexOf(array);

                    var snow = this.state.array[jon].a.title.Pol.indexOf(Pol);

                    h = kak.numChildren();
                    data2.push({
                      value: h,
                      color: colo[snow].he,
                      highlight: "#DEDCCC",
                      label: kak.key
                    });

                    var jon = this.state.array.indexOf(array);

                    console.log("DATA", jon);

                    var ll = this.state.array;
                    ll[jon].data = data2;
                    ll[jon].index = jon;

                    this.setState({ array: ll });

                    console.log("AAAAAAAAAAAAAAAAAAAAAAAA", this.state);
                  }
                });
            });
          });

          // if (this.state.array[0] != null) {
          //   for (let index = 0; index < this, this.state.array.length; index++) {
          //     this.state.array[index].a.title.Pol.map(Pol => {
          //       fire
          //         .database()
          //         .ref()
          //         .child("Poll")
          //         .child(this.state.array[index].b)
          //         .child("voteR")
          //         .child(Pol)
          //         .on("value", kak => {
          //           s = kak.numChildren();
          //           console.log ("KAK", kak.numChildren(), kak);
          //         });
          //     });
          //   }
          // }
        });
    } else {
      fire
        .database()
        .ref()
        .child("OpenGroup")
        .child(this.props.work)
        .child("Poll")
        .on("child_added", da => {
          var check = false;
          fire
            .database()
            .ref()
            .child("OpenGroup")
            .child(this.props.work)
            .child("Poll")
            .child(da.key)
            .child("vote")
            .on("child_added", d => {
              if (d.key === "Username") {
                check = true;
              }
            });

          a.push({ a: da.val(), b: da.key, c: check });

          this.setState({ array: a });
          console.log("UJJJJJJJJJJJJJJJ", this.state.array);
          this.state.array.map(array => {
            var data2 = [];

            array.a.title.Pol.map(Pol => {
              var h = 0;

              fire
                .database()
                .ref()
                .child("OpenGroup")
                .child(this.props.work)
                .child("Poll")
                .child(array.b)
                .child("voteR")
                .child(Pol)
                .on("value", kak => {
                  if (kak.exists) {
                    var jon = this.state.array.indexOf(array);

                    var snow = this.state.array[jon].a.title.Pol.indexOf(Pol);

                    h = kak.numChildren();
                    data2.push({
                      value: h,
                      color: colo[snow].he,
                      highlight: "#DEDCCC",
                      label: kak.key
                    });

                    var jon = this.state.array.indexOf(array);

                    console.log("DATA", jon);

                    var ll = this.state.array;
                    ll[jon].data = data2;
                    ll[jon].index = jon;

                    this.setState({ array: ll });

                    console.log("AAAAAAAAAAAAAAAAAAAAAAAA", this.state);
                  }
                });
            });
          });

       
        });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      array: []
    };
  }

  kk(array, Pol) {
    var jon = this.state.array.indexOf(array);

    var snow = this.state.array[jon].a.title.Pol.indexOf(Pol);
    return colo[snow].bo;
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
              Poll
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
              <div>
                <div>
                  <List>
                    {this.state.array
                      .slice(0)
                      .reverse()
                      .map(array => {
                        return (
                          <div
                            style={{
                              textAlign: "left",
                              fontFamily: "'Poppins', sans-serif",
                              minHeight: 100
                            }}
                            className="sl-item card-hover"
                          >
                            <div className="sl-left">
                              <Avatar size="70" name="AAAAAAAAAAAAa" />
                            </div>{" "}
                            <div>
                              {" "}
                              <a
                                style={{ fontSize: 17, marginLeft: 20 }}
                                href="javascript:void(0)"
                                className="link"
                              >
                                {array.a.Info.username}{" "}
                              </a>{" "}
                              <span className="sl-date">
                                {" "}
                                {moment(array.a.Info.timestamp).fromNow()}
                              </span>
                            </div>
                            <div className="sl-right">
                              {
                                <Grid container>
                                  {" "}
                                  <Grid xs={5} md={3}>
                                    {array.a.title
                                      ? array.a.title.Pol.map(Pol => {
                                          return (
                                            <div style={{ margin: 30 }}>
                                              <div>
                                                <button
                                                  onClick={
                                                    array.c
                                                      ? null
                                                      : this.as.bind(
                                                          this,
                                                          array.b,
                                                          Pol
                                                        )
                                                  }
                                                  class={this.kk(array, Pol)}
                                                >
                                                  {Pol}
                                                </button>
                                              </div>
                                            </div>
                                          );
                                        })
                                      : null}{" "}
                                  </Grid>
                                  <Grid xs={12} md={4} item>
                                    {array.data ? (
                                      <div>
                                        <DoughnutChart data={array.data} />
                                        <div style={{ margin: 10 }} />
                                      </div>
                                    ) : null}
                                  </Grid>
                                </Grid> /* <div>
                                <a
                                  style={{ fontSize: 17 }}
                                  href="javascript:void(0)"
                                  className="link"
                                >
                                  {this.props.username}{" "}
                                </a>{" "}
                                <span className="sl-date">
                                  {this.props.timestamp}{" "}
                                </span>
                                <p style={{ fontSize: 13 }} className="m-t-10">
                                  {this.props.msg}
                                </p>
                              </div> */
                              }
                            </div>
                            <hr />
                          </div>
                        );
                      })}
                  </List>
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
)(PolShow);
