import React, { Component } from "react";
import fire from "../Fire";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import Card from "./Card";
import { connect } from "react-redux";
import { Grid, TextField, Button } from "@material-ui/core";

import Modal from "react-responsive-modal";
import DatePicker from "react-date-picker";
class ProfilesShow extends Component {
  constructor(props) {
    super(props);

    this.props.w(window.localStorage.getItem("work"));
    this.props.k(window.localStorage.getItem("uid"));
  }
  state = { profiles: [], open: false, email: null };
  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };
  onCha2 = e => {
    if (e.target.value.includes("@rknec.edu")) {
      var f = e.target.value.replace("@rknec.edu", "");
      console.log(f);

      this.setState({ email: f });
    } else {
      this.setState({ email: null });
    }
  };
  send = () => {
    if (this.state.email !== null) {
      console.log(this.state);

      fire
        .database()
        .ref()
        .child("List")
        .child(this.state.email)
        .child(this.props.work)
        .set(this.props.work);

      fire
        .database()
        .ref()
        .child("Noti")
        .child(this.state.email)
        .child(this.props.work.replace(" ", ""))
        .set(this.props.work.replace(" ", ""));

      fire
        .database()
        .ref()
        .child("Classes")
        .child(this.props.work)
        .child("Students")
        .child(this.state.email)
        .set(this.state.email);

      window.alert(this.state.email + "@rknec.edu  Added!");
    } else {
      window.alert("Not a Rknec email id !");
    }
  };

  componentWillMount() {
    var a = [];
    var User = [];

    fire
      .database()
      .ref()
      .child("Classes")
      .child(window.localStorage.getItem("work"))

      .child("Students")
      .on("child_added", f => {
        User.push(f.val());
        this.setState({ profiles: User });
      });
  }

  render() {
    return (
      <div style={{ textAlign: "left" }}>
        <br />

        <div className="card">
          <br />

          <ul
            className="nav nav-pills custom-pills"
            id="pills-tab"
            role="tablist"
          >
            <div>
              <Modal open={this.state.open} onClose={this.onCloseModal} center>
                <div style={{ padding: 100 }}>
                  <h2> Add Students With Rknec email id</h2>
                  <br />

                  <TextField
                    onChange={this.onCha2}
                    id="standard-bare"
                    margin="normal"
                  />
                  <div>
                    <br />
                    <Button
                      variant="outlined"
                      style={{ fontSize: "15px" }}
                      color="secondary"
                      onClick={this.send.bind(this)}
                    >
                      Add{" "}
                    </Button>
                  </div>
                </div>
              </Modal>
            </div>{" "}
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
                Students
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
                {this.state.profiles.map(profiles => {
                  return (
                    <div className="card-hover" style={{ textAlign: "left" }}>
                      <div>
                        <h4 style={{ paddingLeft: 20 }}>{profiles}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div />
        </div>
        <div className="Rel">
          <div className="Reliy">
            {" "}
            <Button
              onClick={this.onOpenModal}
              variant="contained"
              color="secondary"
              style={{ width: "200px", marginTop: 20 }}
            >
              Add New Students
            </Button>
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
)(ProfilesShow);
