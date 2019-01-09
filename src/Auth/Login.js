import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import firebase from "firebase";
import fire from "../Fire";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Modal from "react-responsive-modal";
import Grid from "@material-ui/core/Grid";
import GoogleButton from "react-google-button";
import logo from "../Icons/logo.svg";

var provider = new firebase.auth.GoogleAuthProvider();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, red: false, log: false };

    fire.auth().onAuthStateChanged(user => {
      console.log("USER", user);

      if (user !== null) {
        this.setState({ log: true });
      }
    });
  }

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

  Login = e => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return fire

          .auth()
          .signInWithPopup(provider)
          .then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;

            console.log("This ", result.user);
            e.setState({ loggin: true });

            e.props.k(fire.auth().currentUser.uid);
            e.props.n(fire.auth().currentUser.displayName);
            e.props.p(fire.auth().currentUser.photoURL);
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
      });
  };

  componentWillMount() {}

  render() {
    return (
      <Grid
        container
        style={{
          backgroundColor: "white",
          zIndex: 2,
          height: 800,
          fontFamily: " 'Roboto', 'sans-serif'"
        }}
        justify="center"
      >
        {this.state.log ? <Redirect to="/work" /> : null}
        <Grid
          className="card card-hover shadow"
          item
          md={4}
          xs={12}
          style={{
            backgroundColor: "white",
            zIndex: 4,
            height: 500,
            margin: 40,
            marginTop: 120
          }}
        >
          <div>
            <img style={{ width: 50, height: 50 }} src={logo} />
            <h3>
              <b>LineUp</b>
            </h3>
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
              <h3>Teacher Login </h3>

              <p>
                {" "}
                <Grid justify="center" container>
                  <Grid item md={5}>
                    <br />

                    <GoogleButton
                      className="shadow"
                      type="light" // can also be written as disabled={true} for clarity
                      onClick={this.Login.bind(this, this)}
                    />
                  </Grid>
                </Grid>
              </p>

              <br />
            </div>

            <br />
          </div>
        </Grid>
      </Grid>
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
)(Login);
