import React, { Component } from "react";
import fire from "../Fire";
import Modal from "react-responsive-modal";
import DatePicker from "react-date-picker";
import { connect } from "react-redux";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import {
  Grid,
  TextField,
  Button,
  RadioGroup,
  Checkbox
} from "@material-ui/core";

class TeacherA extends Component {
  state = {
    open: false,
    so: new Date(),
    eo: new Date(),

    marks: null,
    name: null,
    endt: null,
    startt: null,
    name: this.props.name,
    after: false,
    show: false
  };

  tog = () => {
    console.log(this.state);
    this.setState({ after: !this.state.after });
  };

  send = () => {
    console.log(this.state);

    if (this.state.marks != null && this.state.endt && this.state.startt) {
      var key = fire
        .database()
        .ref()
        .child("Classes")
        .child(window.localStorage.getItem("work"))
        .child("Assignmnet")
        .push(this.state).key;

      var headers = {
        "Content-Type": "application/json"
      };
      fire
        .database()
        .ref()
        .child("Classes")
        .child(window.localStorage.getItem("work"))
        .child("Students")
        .on("child_added", ll => {
          fire
            .database()
            .ref()
            .child("Classes")
            .child(window.localStorage.getItem("work"))
            .child("Assignmnet")

            .child(key)
            .child("NOT")
            .child(ll.val())
            .set(ll.val());
        });
    } else {
      window.alert("Please Fill Up All Section");
    }
  };

  onChange = date3 =>
    this.setState({
      startt: date3.getTime(),
      start: date3.toString(),
      so: date3
    });
  onChange2 = date2 => {
    this.setState({ endt: date2.getTime(), end: date2.toString(), eo: date2 });
  };

  onCha = e => {
    this.setState({ marks: e.target.value });

    console.log(this.state);
  };
  onCha2 = e => {
    this.setState({ title: e.target.value });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };

  Create = () => {};

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button
          variant="outlined"
          color="secondary"
          onClick={this.onOpenModal.bind(this)}
        >
          Create New Assignment
        </Button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div style={{ padding: 100 }}>
            <h2>Create New Assignmnet</h2>
            <Grid container>
              <Grid item md={4} xs={2}>
                <br />
                <h3>Name</h3>
              </Grid>
              <Grid item md={8} xs={10}>
                {" "}
                <TextField
                  onChange={this.onCha2}
                  id="standard-bare"
                  margin="normal"
                />
                <br />
                <br />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={4}>
                <h3>Start</h3>
              </Grid>
              <Grid item md={8}>
                {" "}
                <DatePicker
                  style={{ width: 300 }}
                  onChange={this.onChange}
                  value={this.state.so}
                />
                <br />
                <br />
              </Grid>
              <br />
            </Grid>
            <Grid container>
              <Grid item md={4}>
                <h3>End</h3>
              </Grid>
              <Grid item md={8}>
                {" "}
                <DatePicker
                  style={{ width: 300 }}
                  onChange={this.onChange2}
                  value={this.state.eo}
                />
                <br />
              </Grid>
              <br />
            </Grid>
            <Grid container>
              <Grid item md={4}>
                <br />
                <h3>Marks</h3>
              </Grid>
              <Grid item md={8}>
                {" "}
                <TextField
                  id="standard-bare"
                  margin="normal"
                  onChange={this.onCha}
                />
                <br />
                <br />
              </Grid>
            </Grid>
            <Grid container>
              <Grid md={2} item>
                <Checkbox
                  checked={this.state.after}
                  onClick={this.tog}
                  style={{ width: "80px" }}
                  value="checkedB"
                  color="primary"
                />{" "}
                <br /> <br />
              </Grid>
              <Grid md={10} item>
                <h3>Accept Submission after End Date</h3>
                <br /> <br />
              </Grid>
              <br /> <br />
              <br />
              <br />
            </Grid>

            <Grid style={{ topMargin: "30px" }} container>
              <Grid item md={12}>
                <Button
                  variant="outlined"
                  style={{ fontSize: "15px" }}
                  color="secondary"
                  onClick={this.send.bind(this)}
                >
                  Create New Assignmnet
                </Button>
              </Grid>
            </Grid>
          </div>
        </Modal>
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
)(TeacherA);
