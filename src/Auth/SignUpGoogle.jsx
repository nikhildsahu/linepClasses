import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import firebase from "firebase";
import fire from "../Fire";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Modal from "react-responsive-modal";

var provider = new firebase.auth.GoogleAuthProvider();
class SignUpGoogle extends Component {
  state = { open: false, red: false };
  onOpenModal = () => {
    this.setState({ open: true, loggin: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onRoll = e => {
    this.setState({ rollno: e.target.value });
  };
  onBatch = e => {
    this.setState({ batch: e.target.value });
  };

  c = () => {
    fire
      .database()
      .ref()
      .child("Students")
      .child(fire.auth().currentUser.uid)
      .child("name")
      .set(fire.auth().currentUser.displayName);

    fire
      .database()
      .ref()
      .child("Students")
      .child(fire.auth().currentUser.uid)
      .child("pic")
      .set(fire.auth().currentUser.photoURL);

    fire
      .database()
      .ref()
      .child("Students")
      .child(fire.auth().currentUser.uid)
      .child("email")
      .set(fire.auth().currentUser.email);
    fire
      .database()
      .ref()
      .child("Students")
      .child(fire.auth().currentUser.uid)
      .child("rollno")
      .set(this.state.rollno);

    fire
      .database()
      .ref()
      .child("Students")
      .child(fire.auth().currentUser.uid)
      .child("batch")
      .set(this.state.batch);

    this.props.k(fire.auth().currentUser.uid);
    this.props.n(fire.auth().currentUser.displayName);
    this.props.r(this.state.rollno);

    this.props.b(this.state.batch);

    window.localStorage.setItem("uid", fire.auth().currentUser.uid);
    window.localStorage.setItem("name", fire.auth().currentUser.displayName);
    window.localStorage.setItem("rollno", this.state.rollno);
    window.localStorage.setItem("batch", this.state.batch);

    if (
      this.props.uid != null &&
      this.props.name != null &&
      this.props.roll !== null &&
      this.props.batch !== null
    ) {
      this.setState({ red: true });
    }
  };

  Login = e => {
    fire

      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        e.setState({ loggin: true });
        // console.log("This ", user);

        // fire
        //   .database()
        //   .ref()
        //   .child("List")
        //   .child(fire.auth().currentUser.uid)
        //   .set("teacher");

        // fire
        //   .database()
        //   .ref()
        //   .child("Profiles")
        //   .child("Teacher")
        //   .child(fire.auth().currentUser.uid)
        //   .child("name")
        //   .set(fire.auth().currentUser.displayName);

        // fire
        //   .database()
        //   .ref()
        //   .child("Teachers")
        //   .child(fire.auth().currentUser.uid)
        //   .child("email")
        //   .set(fire.auth().currentUser.email);

        // e.props.k(fire.auth().currentUser.uid);
        // e.props.n(fire.auth().currentUser.displayName);
        // e.props.p(fire.auth().currentUser.photoURL);

        console.log("This ", result.user);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        console.log("This ", errorMessage);

        // ...
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.Login.bind(this, this)}>Google</button>
        <div>
          {this.state.red ? <Redirect to="works" /> : null}

          {console.log(this.state)}
          {this.state.loggin ? (
            <Modal open={true} onClose={this.onCloseModal} center>
              <h2>My Info</h2>

              <TextField
                style={{ width: "100%" }}
                id="outlined-name"
                label="Roll No"
                margin="normal"
                onChange={this.onRoll}
                variant="outlined"
              />
              <TextField
                style={{ width: "100%" }}
                id="outlined-name"
                label="Batch"
                margin="normal"
                onChange={this.onBatch}
                variant="outlined"
              />
              <Button
                onClick={this.c}
                variant="contained"
                color="secondary"
                style={{ width: "100%", marginTop: 20 }}
              >
                Procced
              </Button>
            </Modal>
          ) : null}
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

    r: id => {
      dispatch(roll(id));
    },
    b: id => {
      dispatch(batch(id));
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

function roll(index) {
  return { type: "ROLL", payload: index };
}

function batch(index) {
  return { type: "BATCH", payload: index };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpGoogle);
