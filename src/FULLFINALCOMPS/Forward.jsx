import React, { Component } from "react";
import { connect } from "react-redux";
import FileUploader from "react-firebase-file-uploader";
import Modal from "react-responsive-modal";
import fire from "../Fire";
import { Grid, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
class Forward extends Component {
  constructor(props) {
    super(props);

    this.props.w(localStorage.getItem("work"));
    this.state = {
      username: "",
      avatar: "",
      isUploading: false,
      progress: 0,
      avatarURL: "",
      open: false,
      name: "",
      kl: []
    };

    var olo = [];
    fire
      .database()
      .ref()
      .child("Classes")
      .child(window.localStorage.getItem("work"))
      .child("Notes")
      .on("child_added", lol => {
        olo.push(lol.val());
        this.setState({ kl: olo });
      });
  }

  componentWillMount() {
    var olo = [];
    fire
      .database()
      .ref()
      .child("Classes")
      .child(window.localStorage.getItem("work"))
      .child("Notes")
      .on("child_added", lol => {
        olo.push(lol.val());
        this.setState({ kl: olo });
      });
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  Toggle = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  kok = () => {
    console.log(this.state);
    fire
      .database()
      .ref()
      .child("Classes")
      .child(this.props.work)
      .child("Notes")
      .push({ name: this.state.name, url: this.state.avatarURL });
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
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        console.log(url);
        this.setState({ avatarURL: url });
      });
  };

  render() {
    return (
      <div>
        <Grid container justify="flex-start">
          <Grid md={2} item />
        </Grid>

        <div>
          <ul
            className="nav nav-pills custom-pills"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active show"
                id="pills-timeline-tab"
                data-toggle="pill"
                href="#current-month"
                role="tab"
                aria-controls="pills-timeline"
                aria-selected="true"
              >
                Notes
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade active show"
              id="current-month"
              role="tabpanel"
              aria-labelledby="pills-timeline-tab"
            >
              <div className="card-body">
                {this.state.kl.map(kl => {
                  return (
                    <Grid container>
                      <Grid item md={3}>
                        <h4>{kl.name} </h4>
                      </Grid>
                      <Grid item md={3}>
                        <Button
                          color="primary"
                          onClick={() => {
                            window.open(kl.url);
                          }}
                        >
                          {" "}
                          Open{" "}
                        </Button>{" "}
                      </Grid>
                    </Grid>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <Grid container justify="center">
            <Grid item md={12}>
              <h3>Note </h3>
            </Grid>
            <Grid item md={12}>
              <TextField
                onChange={e => {
                  this.setState({ name: e.target.value });
                }}
                id="outlined-name"
                label="Name"
                margin="normal"
                variant="outlined"
              />{" "}
            </Grid>
            <Grid item md={12}>
              <br />
              <FileUploader
                accept="/*"
                name="avatar"
                randomizeFilename
                storageRef={fire.storage().ref("images")}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
              />
            </Grid>

            <Grid item md={12}>
              {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
              <br />

              {this.state.progress === 100 ? (
                <Button onClick={this.kok} color="secondary">
                  Submit
                </Button>
              ) : null}
            </Grid>
          </Grid>
        </Modal>
        <div className="Rel">
          <div className="Reliy">
            {this.props.ol ? (
              <Button
                onClick={this.onOpenModal}
                variant="outlined"
                color="secondary"
              >
                Add New Notes
              </Button>
            ) : null}
          </div>{" "}
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
    l: id => {
      dispatch(list(id));
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

function list(index) {
  return { type: "LIST", payload: index };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forward);
