import React, { Component } from "react";
import datetimeDifference from "datetime-difference";
import axios from "axios";
import fire from "../Fire";
import { connect } from "react-redux";
import { Grid, TextField, Button } from "@material-ui/core";
class AutoMarker extends Component {
  state = {
    week2: "",
    week1: "",
    day0: "",
    day1: "",
    day2: "",
    day3: "",
    day4: "",
    day5: "",
    day6: "",
    aweek2: "",
    aweek1: "",
    aday1: "",
    aday2: "",
    aday3: "",
    aday4: "",
    aday5: "",
    aday6: ""
  };
  componentWillMount() {
    console.log("AA", this.props.match.params.key, this.props.key);
    var headers = {
      "Content-Type": "application/json"
    };
    axios
      .post(
        "http://localhost:5000/get",

        JSON.stringify({
          work: "SYSTEM PROGRAMING",
          key: "-LV4GFAARmUMgS-On_T5"
        }),
        {
          headers: headers
        }
      )

      .then(response => {
        console.log("RES", response);
        this.setState({ my: response.data });
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  }

  CheckSpace = () => {
    console.log("sx");
    this.state.my.map(my => {
      const date1 = new Date(my.timestamp);
      const date2 = new Date(my.endt);
      var result = datetimeDifference(date1, date2);
      console.log(result);
      if (my.timestamp < my.endt) {
        const date1 = new Date(my.timestamp);
        const date2 = new Date(my.endt);
        var result = datetimeDifference(date1, date2);

        if (result.days > 14) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child("Submission")

            .child(my.uid)
            .child("Marks")
            .set(this.state.week2);
        } else if (result.days > 7) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child("Submission")

            .child(my.uid)
            .child("Marks")
            .set(this.state.week1);
          console.log("BA");
        } else if (result.days === 7) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child("Submission")

            .child(my.uid)
            .child("Marks")
            .set(this.state.week1);
          console.log("jk");
        } else if (result.days === 6) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child("Submission")

            .child(my.uid)
            .child("Marks")
            .set(this.state.day6);
          console.log("gh");
        } else if (result.days === 5) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child("Submission")

            .child(my.uid)
            .child("Marks")
            .set(this.state.day5);
          console.log("jh");
        } else if (result.days === 4) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child("Submission")

            .child(my.uid)
            .child("Marks")
            .set(this.state.day4);
          console.log("jhhj");
        } else if (result.days === 3) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child("Submission")

            .child(my.uid)
            .child("Marks")
            .set(this.state.day3);
          console.log("jhnj");
        } else if (result.days === 2) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child("Submission")

            .child(my.uid)
            .child("Marks")
            .set(this.state.day2);
          console.log("0iikk");
        } else if (result.days === 1) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child("Submission")

            .child(my.uid)
            .child("Marks")
            .set(this.state.day1);
          console.log("ughbb");
        } else if (result.days === 0) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child("Submission")

            .child(my.uid)
            .child("Marks")
            .set(this.state.day0);
          console.log("ughbb");
        }
      } else {
        const date1 = new Date(my.timestamp);
        const date2 = new Date(my.endt);
        var result = datetimeDifference(date1, date2);

        if (result.days > 14) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child("Submission")

            .child(my.uid)
            .child("Marks")
            .set(this.state.aweek2);
        } else if (result.days > 7) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child("Submission")

            .child(my.uid)
            .child("Marks")
            .set(this.state.aweek1);
          console.log("BA");
        } else if (result.days === 7) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child("Submission")

            .child(my.uid)
            .child("Marks")
            .set(this.state.aweek1);
          console.log("jk");
        } else if (result.days === 6) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child(my.uid)
            .child("Marks")
            .set(this.state.aday6);
          console.log("gh");
        } else if (result.days === 5) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child("Submission")

            .child(my.uid)
            .child("Marks")
            .set(this.state.aday5);
          console.log("jh");
        } else if (result.days === 4) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child("Submission")

            .child(my.uid)
            .child("Marks")
            .set(this.state.aday4);
          console.log("jhhj");
        } else if (result.days === 3) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child("Submission")

            .child(my.uid)
            .child("Marks")
            .set(this.state.aday3);
          console.log("jhnj");
        } else if (result.days === 2) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child("Submission")

            .child(my.uid)
            .child("Marks")
            .set(this.state.aday2);
          console.log("0iikk");
        } else if (result.days === 1) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child("Submission")

            .child(my.uid)
            .child("Marks")
            .set(this.state.aday1);
          console.log("ughbb");
        } else if (result.days === 0) {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(this.props.work)
            .child("Assignmnet")
            .child(this.props.match.params.key)
            .child("Submission")

            .child(my.uid)
            .child("Marks")
            .set(this.state.day0);
          console.log("ughbb");
        }
      }
    });
    window.alert("Done!  Go To Evaluate or MarkSheet");
  };

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
                <Grid container>
                  <Grid md={12} item>
                    {" "}
                    <h3>Before The Date Of Submission</h3>
                  </Grid>
                </Grid>{" "}
                <Grid justify="center" container>
                  <Grid item md={1}>
                    <TextField
                      onChange={e => {
                        this.setState({ week2: e.target.value });
                      }}
                      id="standard-name"
                      label="Week 2"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item md={1}>
                    <TextField
                      onChange={e => {
                        this.setState({ week1: e.target.value });
                      }}
                      id="standard-name"
                      label="Week 1"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item md={1}>
                    <TextField
                      onChange={e => {
                        this.setState({ day6: e.target.value });
                      }}
                      id="standard-name"
                      label="Day 6"
                      margin="normal"
                    />
                  </Grid>

                  <Grid item md={1}>
                    <TextField
                      onChange={e => {
                        this.setState({ day5: e.target.value });
                      }}
                      id="standard-name"
                      label="Day 5"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item md={1}>
                    <TextField
                      onChange={e => {
                        this.setState({ day4: e.target.value });
                      }}
                      id="standard-name"
                      label="Day 4"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item md={1}>
                    <TextField
                      onChange={e => {
                        this.setState({ day3: e.target.value });
                      }}
                      id="standard-name"
                      label="Day 3"
                      margin="normal"
                    />{" "}
                  </Grid>
                  <Grid item md={1}>
                    <TextField
                      onChange={e => {
                        this.setState({ day2: e.target.value });
                      }}
                      id="standard-name"
                      label="Day 2"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item md={1}>
                    <TextField
                      onChange={e => {
                        this.setState({ day1: e.target.value });
                      }}
                      id="standard-name"
                      label="Day 1"
                      margin="normal"
                    />
                  </Grid>
                </Grid>
                <hr />
                <Grid container>
                  <Grid md={12} item>
                    {" "}
                    <h3> On Date Of Submission</h3>
                  </Grid>
                </Grid>{" "}
                <Grid justify="center" container>
                  <Grid md={1} item>
                    {" "}
                    <TextField
                      onChange={e => {
                        this.setState({ day0: e.target.value });
                      }}
                      id="standard-name"
                      label="Day 0"
                      margin="normal"
                    />{" "}
                    <hr />
                  </Grid>
                </Grid>{" "}
                <hr />
                <Grid container>
                  <Grid md={12} item>
                    {" "}
                    <h3>After The Date Of Submission</h3>
                  </Grid>
                </Grid>{" "}
                <Grid justify="center" container>
                  <Grid item md={1}>
                    <TextField
                      onChange={e => {
                        this.setState({ aweek2: e.target.value });
                      }}
                      id="standard-name"
                      label="Week 2"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item md={1}>
                    <TextField
                      onChange={e => {
                        this.setState({ aweek1: e.target.value });
                      }}
                      id="standard-name"
                      label="Week 1"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item md={1}>
                    <TextField
                      onChange={e => {
                        this.setState({ aday6: e.target.value });
                      }}
                      id="standard-name"
                      label="Day 6"
                      margin="normal"
                    />
                  </Grid>

                  <Grid item md={1}>
                    <TextField
                      onChange={e => {
                        this.setState({ aday5: e.target.value });
                      }}
                      id="standard-name"
                      label="Day 5"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item md={1}>
                    <TextField
                      onChange={e => {
                        this.setState({ aday4: e.target.value });
                      }}
                      id="standard-name"
                      label="Day 4"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item md={1}>
                    <TextField
                      onChange={e => {
                        this.setState({ aday3: e.target.value });
                      }}
                      id="standard-name"
                      label="Day 3"
                      margin="normal"
                    />{" "}
                  </Grid>
                  <Grid item md={1}>
                    <TextField
                      onChange={e => {
                        this.setState({ aday2: e.target.value });
                      }}
                      id="standard-name"
                      label="Day 2"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item md={1}>
                    <TextField
                      onChange={e => {
                        this.setState({ aday1: e.target.value });
                      }}
                      id="standard-name"
                      label="Day 1"
                      margin="normal"
                    />
                  </Grid>
                </Grid>
                <hr />
                <Grid justify="center" container>
                  <Grid md={1}>
                    <Button onClick={this.CheckSpace}>
                      <h3> EVALUATE </h3>
                    </Button>
                  </Grid>
                </Grid>
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
)(AutoMarker);
