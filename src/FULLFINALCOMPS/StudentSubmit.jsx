import React, { Component } from "react";

import fire from "../Fire";
import Modal from "react-responsive-modal";

import { connect } from "react-redux";
import Avatar from "react-avatar";
import { Grid } from "@material-ui/core";
import Submit from "../Submit/Submit";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

class StudentSubmit extends Component {
  constructor(props) {
    super(props);

    this.state = { my: [], expanded: false, open: false, now: new Date() };
  }

  componentWillMount() {
    var a = [];

    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Assignmnet")
      .on("child_added", da => {
        var gg = [];

        fire
          .database()
          .ref()
          .child("Classes")
          .child(this.props.work)
          .child("Assignmnet")
          .child(da.key)
          .child("Completed")
          .on("child_added", kk => {
            gg.push({
              name: kk.val().name,
              timestamp: kk.val().timestamp,
              file: kk.val().file
            });
          });
        a.push({
          name: da.val().name,
          key: da.key,
          endt: da.val().endt,
          marks: da.val().marks,
          startt: da.val().startt,
          title: da.val().title,
          com: gg,
          after: da.val().after,
          status: this.kl(da.val().endt, da.val().after),

          Show: da.val().Show
        });

        this.setState({ my: a });
        console.log(a);
      });
  }
  kl = (y, l) => {
    if (l === false) {
      if (this.state.now > y) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  Toggle = () => {
    this.setState({ expanded: !this.state.expanded });
  };

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
              <br />

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
                var endst =
                  ll.getDate() + "/" + ll.getMonth() + "/" + ll.getFullYear();

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
                            {" "}
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
                          variant="outlined"
                          color="primary"
                          style={{
                            paddingLeft: "20px",
                            width: 230
                          }}
                          onClick={this.Toggle}
                        >
                          <b>Completed </b>
                        </Button>
                      </Grid>
                      <Grid item md={1.3} style={{ padding: "15px" }}>
                        <Button
                          disabled={!my.status}
                          variant="outlined"
                          color="primary"
                          style={{ paddingLeft: "20px", width: 230 }}
                          onClick={this.onOpenModal}
                        >
                          Submit{" "}
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid container>
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
                      <br />
                      <Grid item />
                    </Grid>
                    <Modal
                      style={{ height: "600px" }}
                      open={this.state.open}
                      onClose={this.onCloseModal}
                      center
                    >
                      <Submit
                        style={{ height: "600px" }}
                        keyl={my.key}
                        endt={my.endt}
                      />
                    </Modal>



                    
                    {console.log(my.key, "AS")}
                  </div>
                );
              })}
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
)(StudentSubmit);
