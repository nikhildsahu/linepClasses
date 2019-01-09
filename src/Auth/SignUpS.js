import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import fire from "../Fire";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import logo from "../Icons/logo.svg";

import Link from "react-router-dom/Link";
class SignUpS extends Component {
  constructor() {
    super();
    this.showNotifications = this.showNotifications.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  showNotifications() {
    // If the Notifications API is supported by the browser
    // then show the notification
    if (this.n.supported()) this.n.show();
  }

  handleClick(event) {
    this.n.close(event.target.tag);
  }
  state = {
    name: null,
    email: null,
    password: null,
    logged: false
  };

  onChangeName = e => {
    this.setState({ name: e.target.value });
  };
  onChangeEmail = e => {
    this.setState({ email: e.target.value });
  };
  onChangePass = e => {
    this.setState({ password: e.target.value });
  };

  validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }

  OnCreateuser = () => {
    var kk = this.validateEmail(this.state.email);
    if (kk === true) {
      fire
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          window.alert(errorMessage);
        })
        .then(() => {
          console.log(this.state);

          this.props.onTodoClick(fire.auth().currentUser.uid);

          this.CHeck();
        });
    }
  };

  OnLogin = () => {
    this.setState({ login: true });
  };

  CHeck = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        fire
          .database()
          .ref()
          .child("Students")
          .child(user.uid)
          .set(this.state);

        window.alert("User IS Logged In");
        this.setState({ logged: true });
      }
    });
  };

  render() {
    return (
      <Grid
        container
        style={{ backgroundColor: "white", zIndex: 8, height: 800 }}
        justify="center"
      />
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};
function toggleTodo(index) {
  return { type: "UID", payload: index };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpS);
