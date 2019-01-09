import React, { Component } from "react";
import fire from "../Fire";
import { connect } from "react-redux";
import { Grid, Button, Collapse } from "@material-ui/core";
import Modal from "react-responsive-modal";
import axios from "axios";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class Evaluate extends Component {
  constructor(props) {
    super(props);

    this.props.w(window.localStorage.getItem("work"));

    this.state = {
      my: [],
      open: false,
      Toggle: false,
      ins: 0,
      ens: 10,
      lol: null,
      def: 5
    };

    // var headers = {
    //   "Content-Type": "application/json"
    // };
    // axios
    //   .post(
    //     "http://restinline.herokuapp/get",

    //     JSON.stringify({
    //       work: this.props.work,
    //       key: this.props.match.params.key
    //     }),
    //     {
    //       headers: headers
    //     }
    //   )

    //   .then(response => {
    //     console.log("RES", response);
    //     this.setState({ my: response.data });
    //   })
    //   .catch(error => {
    //     console.log("ERROR", error);
    //   });

    // console.log("A", this.props.work);

    // // fire
    //   .database()
    //   .ref()
    //   .child("Classes")
    //   .child(this.props.work)
    //   .child("Assignmnet")
    //   .child(this.props.match.params.key)
    //   .child("endt")
    //   .on("value", ol => {
    //     this.setState({ endt: ol.val() });
    //   });
  }
  v = () => {
    this.precap(10);
    console.log("AA");
  };

  onOpenModal = uid => {
    console.log("OPENM");

    var status = null;

    console.log("D", new Date(this.state.endt));
    if (uid.timestamp > uid.endt) {
      var status = "Late Submission";
    } else {
      var status = " On Time Submission";
    }

    this.setState({ open: true, lol: uid, status: status });
  };

  onCloseModal = () => {
    console.log("CLOSEM");

    this.setState({ lol: null });

    this.setState({ open: false });
  };

  getData = uid => {
    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Assignmnet")
      .child(this.props.match.params.key)
      .child("Submission")
      .child(uid)
      .on("value", ll => {
        this.setState({ lol: ll.val() });
        console.log(this.state);
      });
  };

  componentWillMount() {
    var a = [];

    fire
      .database()
      .ref()
      .child("Classes")
      .child(window.localStorage.getItem("work"))
      .child("Assignmnet")
      .child(this.props.match.params.key)
      .child("Submission")
      .orderByChild("timestamp")
      .on("child_added", ll => {
        a.push(ll.val());
        this.setState({ my: a });
      });
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
                Evaluate
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
                  var col = "white";

                  if (my.timestamp > my.endt) {
                    col = "#F48FB1";
                  } else {
                    col = "#73ff90";
                  }

                  return (
                    <div className="card-hover" key={my.uid} style={{}}>
                      <div>
                        <div className="row text-center" />
                      </div>

                      <Grid
                        style={{ borderColor: col, borderWidth: 20 }}
                        container
                      >
                        <Grid item md={1} style={{ backgroundColor: col }}>
                          {col === "#F48FB1" ? (
                            <div>
                              <h3>LATE</h3>
                            </div>
                          ) : (
                            <div>
                              <h3>ONTIME</h3>
                            </div>
                          )}
                        </Grid>

                        <Grid item md={2}>
                          <h3>
                            <b> {my.name} </b>
                          </h3>
                        </Grid>
                        <Grid item md={2}>
                          <h3>
                            <b> {my.rollno} </b>
                          </h3>
                        </Grid>
                        <Grid item md={2}>
                          <h3>
                            <b>
                              {" "}
                              {new Date(my.timestamp).getDate() +
                                "/" +
                                (new Date(my.timestamp).getMonth() + 1) +
                                "/" +
                                new Date(my.timestamp).getFullYear()}
                            </b>
                          </h3>{" "}
                        </Grid>
                        <Grid item md={2}>
                          <h3>
                            <b> {my.marks} </b>
                          </h3>
                        </Grid>

                        <Grid item md={2}>
                          <Button
                            style={{ top: -5 }}
                            onClick={this.onOpenModal.bind(this, my)}
                          >
                            <h3> Evaulate</h3>
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  );
                })}{" "}
                {this.state.lol != null ? (
                  <Modal
                    open={this.state.open}
                    onClose={this.onCloseModal.bind(this)}
                    big
                    class="border border-secondary"
                    center
                  >
                    <div>
                      <Grid style={{ width: "1000px" }} container>
                        <Grid item md={3}>
                          <h4 style={{ color: "#6300cc" }}>
                            Name:
                            <font style={{ color: "black" }}>
                              {this.state.lol.name}
                            </font>{" "}
                          </h4>{" "}
                        </Grid>{" "}
                        <Grid item md={3}>
                          <h4 style={{ color: "#6300cc" }}>
                            Roll No :
                            <font style={{ color: "black" }}>
                              {" "}
                              {this.state.lol.rollno}{" "}
                            </font>{" "}
                          </h4>{" "}
                        </Grid>{" "}
                        <Grid item md={3}>
                          <h4 style={{ color: "#6300cc" }}>
                            Batch :
                            <font style={{ color: "black" }}>
                              {" "}
                              {this.state.lol.batch}{" "}
                            </font>{" "}
                          </h4>{" "}
                        </Grid>
                      </Grid>
                      <hr />{" "}
                      <Grid style={{ width: "1000px" }} container>
                        <Grid item md={6}>
                          <h4 style={{ color: "#6300cc" }}>
                            Date of Submission:
                            <font style={{ color: "black" }}>
                              {new Date(this.state.lol.timestamp).getDate() +
                                "/" +
                                (new Date(this.state.lol.timestamp).getMonth() +
                                  1) +
                                "/" +
                                new Date(
                                  this.state.lol.timestamp
                                ).getFullYear()}
                            </font>{" "}
                          </h4>{" "}
                        </Grid>{" "}
                        <Grid item md={6}>
                          <h4 style={{ color: "#6300cc" }}>
                            Status:
                            <font style={{ color: "black" }}>
                              {" "}
                              <h3> {this.state.status} </h3>
                            </font>
                          </h4>{" "}
                        </Grid>{" "}
                        <Grid item md={3}>
                          <h4 style={{ color: "#6300cc" }}>
                            Marks :
                            <font style={{ color: "black" }}>
                              {" "}
                              {this.state.lol.marks}{" "}
                            </font>{" "}
                          </h4>{" "}
                        </Grid>{" "}
                      </Grid>
                      <hr />
                      <Grid style={{ width: "1000px" }} container>
                        <Grid item md={3}>
                          <h4 style={{ color: "#6300cc" }}>
                            Plagiarism:
                            <font style={{ color: "black" }}>
                              {this.state.lol.plagiarism * 100}% with{" "}
                              {this.state.lol.plagiarismwith}
                            </font>{" "}
                          </h4>{" "}
                        </Grid>{" "}
                      </Grid>
                      <hr />{" "}
                      <Grid style={{ width: "1000px" }} container>
                        <Grid item md={3}>
                          <Button
                            onClick={() => {
                              window.open(this.state.lol.file);
                            }}
                          >
                            View Assignmnet
                          </Button>
                        </Grid>
                        <Grid item md={3}>
                          <Button
                            onClick={() => {
                              this.setState({ Toggle: !this.state.Toggle });
                            }}
                          >
                            View Text{" "}
                          </Button>
                        </Grid>
                        <Grid item md={1}>
                          <input
                            typee="text"
                            onChange={e => {
                              this.setState({ mark: e.target.value });
                            }}
                          />
                        </Grid>
                        <Grid item md={3}>
                          <Button
                            onClick={() => {
                              fire
                                .database()
                                .ref()
                                .child("Classes")
                                .child(this.props.work)
                                .child("Assignmnet")
                                .child(this.props.match.params.key)
                                .child("Submission")
                                .child(this.state.lol.uid)
                                .child("marks")
                                .set(this.state.mark);
                              fire
                                .database()
                                .ref()
                                .child("Classes")
                                .child(this.props.work)
                                .child("Assignmnet")
                                .child(this.props.match.params.key)
                                .child("Marks")
                                .child(this.state.lol.uid)
                                .set(this.state.mark);
                            }}
                          >
                            Give Marks
                          </Button>
                          <hr />
                        </Grid>
                      </Grid>
                      <Collapse in={this.state.Toggle}>
                        {this.state.lol.text}
                      </Collapse>
                    </div>
                  </Modal>
                ) : null}
              </div>
            </div>

            <hr />
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
)(Evaluate);
