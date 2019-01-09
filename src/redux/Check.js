import React, { Component } from "react";
import { connect } from "react-redux";
import { dispatch } from "redux";

class Check extends Component {
  state = {};

  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  console.log (state);
  return state;
};
const mapDispatchToProps = dispatch => {
  return dispatch(toggleTodo("KKKJJKKKKJKKKJKK"));
};
function toggleTodo(index) {
  return { type: "UID", payload: index };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Check);
