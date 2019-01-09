import React, { Component } from "react";
import axios from "axios";
import ReactExport from "react-data-export";
import { Grid, Button } from "@material-ui/core";

import { connect } from "react-redux";
import DoughnutChart from "react-chartjs/lib/doughnut";
import PieChart from "react-minimal-pie-chart";

import fire from "../Fire";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

var data = [
  {
    value: 300,
    color: "#F7464A",
    highlight: "#FF5A5E",
    label: "Red"
  },
  {
    value: 50,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Green"
  },
  {
    value: 100,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "Yellow"
  }
];
class MarkSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      my: [],
      j: null,
      lis: null,
      work: [],
      stud: "",
      comp: 0,
      stud: 0,
      in: 0,
      lateSubm: [],
      kk: [],
      NOT: []
    };
  }

  componentWillMount() {
    var j = [];
    var lateSubm = [];

    fire
      .database()
      .ref()
      .child("Classes")
      .child(window.localStorage.getItem("work"))
      .child("Assignmnet")
      .child(this.props.match.params.key)
      .on("value", kk => {
        this.setState({ lis: kk.val() });

        this.lol(kk.val().endt);
      });

    var Lope = [];
    fire
      .database()
      .ref()
      .child("Classes")
      .child(window.localStorage.getItem("work"))
      .child("Assignmnet")
      .child(this.props.match.params.key)
      .child("NOT")
      .on("child_added", lp => {
        Lope.push(lp.val());
        this.setState({ NOT: Lope });
      });

    fire
      .database()
      .ref()
      .child("Classes")
      .child(window.localStorage.getItem("work"))
      .child("Assignmnet")
      .child(this.props.match.params.key)
      .child("Completed")
      .on("value", olo => {
        this.setState({ comp: olo.numChildren() });

        var kk = this.state.kk;
        kk.push({
          value: this.state.comp,
          color: "#F7464A",
          highlight: "#FF5A5E",
          label: "Completed"
        });

        this.setState({ kk: kk });
      });

    fire
      .database()
      .ref()
      .child("Classes")
      .child(window.localStorage.getItem("work"))
      .child("Students")
      .on("value", olo => {
        this.setState({ stud: olo.numChildren() });
        var kk = this.state.kk;
        kk.push({
          value: this.state.stud - this.state.comp,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Not Completed"
        });

        this.setState({ kk: kk });
      });
    var headers = {
      "Content-Type": "application/json"
    };

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

        this.state.my.map(my => {
          j.push({
            name: my.name,
            rollno: my.rollno,
            marks: my.marks,
            date:
              new Date(my.timestamp).getDate() +
              "/" +
              (new Date(my.timestamp).getMonth() + 1) +
              "/" +
              new Date(my.timestamp).getFullYear(),

            batch: my.batch
          });

          this.setState({ j: j });
        });
      });
  }

  lol = o => {
    console.log("U SNS");

    this.state.my.map(my => {
      console.log("WWWW", o);
      var lateSubm = [];

      if (my.timestamp > o) {
        lateSubm.push({ my });
        this.setState({ lateSubm: lateSubm });
      }
    });
  };

  render() {
    return (
      <div style={{ paddingLeft: "50px" }}>
        <br />
        <br />
        <br />

        {this.state.lis != null ? (
          <div>
            <Grid style={{ textAlign: "left" }} container>
              <Grid item md={3}>
                <h3 style={{ color: "#6300cc" }}>
                  Name :
                  <font style={{ color: "black" }}>{this.state.lis.name}</font>{" "}
                </h3>{" "}
              </Grid>
              <Grid item md={3}>
                <h3 style={{ color: "#6300cc" }}>
                  Starting Date :
                  <font style={{ color: "black" }}>
                    {" "}
                    {new Date(this.state.lis.startt).getDate() +
                      "/" +
                      (new Date(this.state.lis.startt).getMonth() + 1) +
                      "/" +
                      new Date(this.state.lis.startt).getFullYear()}
                  </font>{" "}
                </h3>
              </Grid>{" "}
              <Grid item md={3}>
                <h3 style={{ color: "#6300cc" }}>
                  Last Date of Submission :
                  <font style={{ color: "black" }}>
                    {" "}
                    {new Date(this.state.lis.endt).getDate() +
                      "/" +
                      (new Date(this.state.lis.endt).getMonth() + 1) +
                      "/" +
                      new Date(this.state.lis.endt).getFullYear()}
                  </font>{" "}
                </h3>{" "}
              </Grid>{" "}
              <Grid item md={3}>
                <h3 style={{ color: "#6300cc" }}>
                  Marks :
                  <font style={{ color: "black" }}>{this.state.lis.marks}</font>{" "}
                </h3>{" "}
              </Grid>
            </Grid>
            <hr />
            <br />
            <Grid container>
              <hr />

              <Grid style={{ textAlign: "left" }} item md={6}>
                <h3>Download Marksheet in Excel Format </h3>
              </Grid>
              <Grid style={{ textAlign: "left" }} item md={6}>
                {this.state.j != null ? (
                  <ExcelFile
                    element={
                      <Button color="primary">
                        <h3>Download Data </h3>{" "}
                      </Button>
                    }
                  >
                    <ExcelSheet data={this.state.j} name="Students">
                      <ExcelColumn label="Name" value="name" />
                      <ExcelColumn label="RollNo" value="rollno" />
                      <ExcelColumn label="Date" value="date" />
                      <ExcelColumn label="Marks" value="marks" />
                    </ExcelSheet>
                  </ExcelFile>
                ) : null}
              </Grid>
            </Grid>
            <br />
            <hr />
            <Grid container>
              {console.log(this.state)}
              <Grid item md={2} />
              <Grid item md={4}>
                {" "}
                <PieChart
                  style={{ width: "200px", height: "200px" }}
                  data={this.state.kk}
                />
              </Grid>

              <Grid item md={6}>
                <h3 style={{ color: "#F7464A" }}>
                  {" "}
                  Total Students : {this.state.stud}{" "}
                </h3>
                <h3 style={{ color: "#46BFBD" }}>
                  Submitted : {this.state.comp}
                </h3>
                <h3> Not Submitted : {this.state.stud - this.state.comp}</h3>
                <br /> <br />
                <br /> <br />
              </Grid>
            </Grid>
            <br /> <br />
            <hr />
            <Grid style={{ textAlign: "left" }} container>
              <Grid item md={12}>
                <h3 style={{ textAlign: "left" }}>
                  People How haven't Submmitted Assignment{" "}
                </h3>
                {this.state.NOT.map(NOT => {
                  return (
                    <div>
                      {" "}
                      <h4 style={{ textAlign: "left" }}>
                        {" "}
                        {NOT}@rknec.edu{" "}
                      </h4>{" "}
                    </div>
                  );
                })}
              </Grid>
            </Grid>
          </div>
        ) : null}

        <hr />
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
)(MarkSheet);
