import React, { Component } from "react";
import fire from "../Fire";
import GoogleLogin from "react-google-login";

const responseGoogle = response => {
  console.log(response);
};
class TeacherSign extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        ,
      </div>
    );
  }
}

export default TeacherSign;
