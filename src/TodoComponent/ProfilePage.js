import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

class ProfilePage extends Component {
  state = {
    username: "AAA",
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: ""
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
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };

  render() {
    return (
      <div>
        {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
        {this.state.avatarURL}
        <div style={{ marginLeft: 20 }}>
          <FileUploader
            accept="Posts/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart.bind(this)}
            onUploadError={this.handleUploadError.bind(this)}
            onUploadSuccess={this.handleUploadSuccess.bind(this)}
            onProgress={this.handleProgress.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
