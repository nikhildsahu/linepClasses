import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// minified version is also included

export default class Position extends Component {
  notify = () => toast("Wow so easy !");

  render() {
    return (
      <div>
        <button onClick={this.notify}>Notify !</button>
        <ToastContainer />

        {toast("Wow so easy !")}
      </div>
    );
  }
}
