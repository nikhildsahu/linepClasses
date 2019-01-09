import React, { Component } from "react";

import { connect } from "react-redux";
import FileUploader from "react-firebase-file-uploader";
import Modal from "react-responsive-modal";
import fire from "../Fire";
import { Grid, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

class Grievance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  Toggle = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  send = () => {
    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Messages")
      .push({ msg: this.state.name, uid: fire.auth().currentUser.uid });
  };

  render() {
    return (
      <div>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <Grid container justify="center">
            <Grid item md={12}>
              <h3>New Grievance </h3>
            </Grid>

            <Grid item md={12}>
              <TextField
                onChange={e => {
                  this.setState({ name: e.target.value });
                }}
                id="outlined-name"
                label="Name"
                margin="normal"
                multiline
                variant="outlined"
              />{" "}
            </Grid>

            <Grid item md={12}>
              <Button>{this.send}</Button>
            </Grid>
          </Grid>
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
)(Grievance);
