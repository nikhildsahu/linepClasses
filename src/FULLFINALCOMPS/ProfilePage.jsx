import React, { Component } from "react";
import fire from "../Fire";
import FileUploader from "react-firebase-file-uploader";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Link from "react-router-dom/Link";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.SignOut = this.SignOut.bind(this);
  }

  state = {
    username: "",
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: ""
  };
  SignOut = () => {
    console.log(
      "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDdd"
    );
  };

  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    fire
      .storage()
      .ref("propic")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };

  Up = () => {
    fire
      .database()
      .ref()
      .child("Profiles")
      .child(this.props.uid)
      .child("pic")
      .set(this.state.avatarURL);
  };
  render() {
    return (
      <div>
        <form>
          <label>Avatar:</label>
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.avatarURL && <img src={this.state.avatarURL} />}
          <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={fire.storage().ref("propic")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        </form>{" "}
        <div>
          <Button color="primary" onClick={this.Up.bind(this)}>
            Change Profile Picture{" "}
          </Button>
        </div>
        <div>
          <Button color="seconadry" onClick={this.SignOut.bind(this)}>
            <Link to="/login">SignOut </Link>
          </Button>
        </div>
        <Button color="secondary" onClick={this.toggle}>
          Cancel
        </Button>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
