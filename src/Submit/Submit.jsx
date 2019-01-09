import React, { Component } from "react";
import fire from "../Fire";
import FileUploader from "react-firebase-file-uploader";
import { throws } from "assert";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { Grid, TextField } from "@material-ui/core";
import Pdf from "./Pdf";
import axios from "axios";

var strin = require("string-similarity");
class Submit extends Component {
  state = {
    username: "",
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: null,
    stri: null
  };

  onChnage = e => {
    this.setState({ stri: e.target.value });
    console.log(e.target.value);
  };
  send = () => {
    var date = new Date();
    var timestamp = date.getTime();

    var mak = this.makeid();

    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Assignmnet")

      .child(this.props.keyl)

      .child("Submission")
      .child(fire.auth().currentUser.uid)
      .child("file")
      .set(this.state.avatarURL);

    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Assignmnet")

      .child(this.props.keyl)

      .child("Submission")
      .child(fire.auth().currentUser.uid)
      .child("name")
      .set(this.props.name);
    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Assignmnet")

      .child(this.props.keyl)

      .child("Submission")
      .child(fire.auth().currentUser.uid)
      .child("uid")
      .set(this.props.uid);
    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Assignmnet")

      .child(this.props.keyl)

      .child("Submission")
      .child(fire.auth().currentUser.uid)
      .child("rollno")
      .set(this.props.roll);
    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Assignmnet")

      .child(this.props.keyl)

      .child("Submission")
      .child(fire.auth().currentUser.uid)
      .child("timestamp")
      .set(new Date().getTime());

    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Assignmnet")

      .child(this.props.keyl)

      .child("Submission")
      .child(fire.auth().currentUser.uid)
      .child("name")
      .set(fire.auth().currentUser.displayName);
    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Assignmnet")

      .child(this.props.keyl)

      .child("Submission")
      .child(fire.auth().currentUser.uid)
      .child("batch")
      .set(this.props.batch);
    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Assignmnet")

      .child(this.props.keyl)

      .child("Submission")
      .child(fire.auth().currentUser.uid)
      .child("marks")
      .set("");

    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Assignmnet")

      .child(this.props.keyl)

      .child("Submission")
      .child(fire.auth().currentUser.uid)
      .child("Evaluated")
      .set(false);

    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Assignmnet")

      .child(this.props.keyl)

      .child("Submission")
      .child(fire.auth().currentUser.uid)
      .child("endt")
      .set(this.props.endt);

    var a = fire.auth().currentUser.email.replace("@rknec.edu", "");

    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Assignmnet")
      .child(this.props.keyl)
      .child("NOT")
      .child(a)
      .remove();

    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Assignmnet")

      .child(this.props.keyl)

      .child("Submission")
      .child(fire.auth().currentUser.uid)
      .child("text")
      .set(this.state.stri);

    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Assignmnet")
      .child(this.props.keyl)

      .child("Completed")
      .child(fire.auth().currentUser.uid)
      .child("name")
      .set(fire.auth().currentUser.displayName);

    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Assignmnet")
      .child(this.props.keyl)

      .child("Completed")
      .child(fire.auth().currentUser.uid)
      .child("timestamp")
      .set(new Date().getTime());
    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Assignmnet")
      .child(this.props.keyl)

      .child("Completed")
      .child(fire.auth().currentUser.uid)
      .child("file")
      .set(this.state.avatarURL);

    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Assignmnet")
      .child(this.props.keyl)

      .child("Strings")
      .child(fire.auth().currentUser.displayName)
      .set(this.state.stri);

    var al = [];
    var l;
    var u = [];

    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Assignmnet")

      .child(this.props.keyl)
      .child("Strings")
      .on("value", k => {
        console.log(k.numChildren());
        l = k.numChildren();

        fire
          .database()
          .ref()
          .child("Classes")
          .child(this.props.work)
          .child("Assignmnet")
          .child(this.props.keyl)
          .child("Strings")
          .on("child_added", jj => {
            console.log("H");
            if (jj.key !== fire.auth().currentUser.displayName) {
              console.log(jj.key);
              al.push(jj.val());

              u.push(jj.key);
            }

            if (al.length === l - 1) {
              if (al.length > 0) {
                var matches = strin.findBestMatch(this.state.stri, al);
                console.log(matches);

                fire
                  .database()
                  .ref()
                  .child("Classes")
                  .child(this.props.work)
                  .child("Assignmnet")

                  .child(this.props.keyl)
                  .child("Submission")
                  .child(this.props.uid)
                  .child("plagiarism")
                  .set(matches.bestMatch.rating);
                fire
                  .database()
                  .ref()
                  .child("Classes")
                  .child(this.props.work)
                  .child("Assignmnet")

                  .child(this.props.keyl)
                  .child("Submission")
                  .child(this.props.uid)
                  .child("plagiarismwith")
                  .set(u[matches.bestMatchIndex])
                  .then(() => {
                    window.alert("Submission Successfull !");
                  });
              } else {
                fire
                  .database()
                  .ref()
                  .child("Classes")
                  .child(this.props.work)
                  .child("Assignmnet")

                  .child(this.props.keyl)
                  .child("Submission")
                  .child(this.props.uid)
                  .child("plagiarism")
                  .set(0);
                fire
                  .database()
                  .ref()
                  .child("Classes")
                  .child(this.props.work)
                  .child("Assignmnet")

                  .child(this.props.keyl)
                  .child("Submission")
                  .child(this.props.uid)
                  .child("plagiarismwith")
                  .set("no-one")
                  .then(() => {
                    window.alert("Submission Successfull !");
                  });
              }
            }
          });
      });
  };

  makeid = () => {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
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
    this.setState({
      avatar: filename,
      progress: 100,
      isUploading: false,
      text: this.state.text
    });
    fire
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };

  render() {
    return (
      <div>
        <h2>Submit Assignmnet</h2>
        <br />
        <br />
        <Grid style={{ padding: "12px" }} container>
          <Grid item md={3}>
            <h4 style={{ color: "black" }}>Assignment File :</h4>
          </Grid>
          <Grid item md={6}>
            {" "}
            <FileUploader
              accept=""
              name="avatar"
              randomizeFilename
              storageRef={fire.storage().ref("images")}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />{" "}
          </Grid>
        </Grid>
        <Grid style={{ padding: "12px" }} container>
          <Grid item md={3}>
            <h4 style={{ color: "black" }}>Assignment in Text Format :</h4>
          </Grid>
          <Grid item md={6}>
            <TextField
              id="outlined-multiline-static"
              label="Text"
              multiline
              rows="4"
              onChange={this.onChnage.bind(this)}
              margin="normal"
              variant="outlined"
            />{" "}
          </Grid>

          <Grid container>
            <Grid item md={5}>
              {this.state.isUploading && (
                <p>
                  <h4 style={{ color: "black" }}>
                    Progress: {this.state.progress}{" "}
                  </h4>
                </p>
              )}
            </Grid>
          </Grid>

          <Grid container>
            <Grid item md={5}>
              {this.state.progress === 100 && this.state.stri != null ? (
                <Button
                  onClick={this.send}
                  variant="contained"
                  color="secondary"
                >
                  Submit Assignmnet{" "}
                </Button>
              ) : null}
            </Grid>
          </Grid>
        </Grid>

        <br />
        <br />
        <br />
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
)(Submit);
