import React, { Component } from "react";

import fire from "../Fire";
class SignUpNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      name: null,
      email: null,

      pass: null
    };
  }

  changeemail = e => {
    this.setState({
      email: e.target.value,
      username: this.state.username,
      name: this.state.name,
      pass: this.state.pass
    });
  };

  changepass = e => {
    this.setState({
      email: this.state.email,
      username: this.state.username,
      name: this.state.name,
      pass: e.target.value
    });
  };

  changeusername = e => {
    this.setState({
      email: this.state.email,
      username: e.target.value,
      name: this.state.name,
      pass: this.state.pass
    });
  };

  onSignup = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..

        console.log (errorMessage + "S");
      });
  };
  render() {
    return (
      <div className="main-wrapper">
        hggggggggggggg
        {/* ============================================================== */}
        {/* Preloader - style you can find in spinners.css */}
        {/* ============================================================== */}
        <div className="preloader" style={{ display: "none" }}>
          <div className="lds-ripple">
            <div className="lds-pos" />
            <div className="lds-pos" />
          </div>
        </div>
        {/* ============================================================== */}
        {/* Preloader - style you can find in spinners.css */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Login box.scss */}
        {/* ============================================================== */}
        <div
          className="auth-wrapper d-flex no-block justify-content-center align-items-center"
          style={{
            background:
              "url(../../assets/images/big/auth-bg.jpg) no-repeat center center"
          }}
        >
          <div className="auth-box">
            <div>
              <div className="logo">
                <span className="db">
                  <img src="../../assets/images/logo-icon.png" alt="logo" />
                </span>
                <h5 className="font-medium m-b-20">Sign Up to Admin</h5>
              </div>
              {/* Form */}
              <div className="row">
                <div className="col-12">
                  <form className="form-horizontal m-t-20" action="index.html">
                    <div className="form-group row ">
                      <div className="col-12 ">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          required=" "
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-12 ">
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          required=" "
                          placeholder="Email"
                          onChange={this.changeemail}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-12 ">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          required=" "
                          placeholder="Username"
                          onChange={this.changeusername}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-12 ">
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          required=" "
                          placeholder="Password"
                          onChange={this.changepass}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-12 ">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group text-center ">
                      <div className="col-xs-12 p-b-20 ">
                        <button
                          onClick={() => {
                            console.log (this.onSignup.bind(this));
                          }}
                          className="btn btn-info "
                        >
                          SIGN UP
                        </button>
                      </div>
                    </div>
                    <div className="form-group m-b-0 m-t-10 ">
                      <div className="col-sm-12 text-center ">
                        Already have an account?{" "}
                        <a
                          href="authentication-login1.html "
                          className="text-info m-l-5 "
                        >
                          <b>Sign In</b>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* Login box.scss */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Page wrapper scss in scafholding.scss */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Page wrapper scss in scafholding.scss */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Right Sidebar */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Right Sidebar */}
        {/* ============================================================== */}
      </div>
    );
  }
}

export default SignUpNow;
