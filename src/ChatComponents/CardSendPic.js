import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import fire from "../Fire";
import { DropdownButton } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { parse } from "url";

var Notes = [];
var Inbox = [];
var key = {};
var Todos = {};
var Pol = {};
var Link = [];
var Poll = {};
var key22 = null;
class CardSendPic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Upload: {
        avatar: "",
        isUploading: false,
        progress: 0,
        avatarURL: ""
      },
      Info: {
        uid: null,
        username: null,
        name: null,
        msg: null,
        timestamp: null,
        key: null,
        propic: "0"
      }
    };
  }

  onClick = () => {
    if (this.props.type === "closed") {
      key22 = fire
        .database()
        .ref()
        .child("WorkStation")
        .child(this.props.work)
        .child("Msg")
        .push(this.state.Info).key;
    } else {
      key22 = fire
        .database()
        .ref()
        .child("OpenGroup")
        .child(this.props.work)
        .child("Msg")
        .push(this.state.Info).key;
    }

    key = key22;
    var headers = {
      "Content-Type": "application/json"
    };
    axios
      .post(
        "https://restinbase2.herokuapp.com/u",
        JSON.stringify({
          users: this.props.list,
          key: key22,
          type: this.props.type,
          work: this.props.work,
          hi: "Msg"
        }),
        {
          headers: headers
        }
      )

      .then(response => {
        console.log("lolo", response);
      })
      .catch(error => {});

    console.log(key22);
    console.log(Pol);

    if (Notes != null) var n = Notes.length;
    console.log("LOG HO ERAA ");

    let NotesModel = [];
    if (n > 0) {
      for (let index = 0; index < n; index++) {
        NotesModel.push({
          Note: Notes[index],
          username: this.state.Info.username,
          timestamp: this.state.Info.timestamp,
          uid: this.state.Info.uid,
          key: key
        });

        if (this.props.type === "closed") {
          fire
            .database()
            .ref()
            .child("WorkStation")
            .child(this.props.work)
            .child("Notes")
            .push(NotesModel[index]);
        } else {
          fire
            .database()
            .ref()
            .child("OpenGroup")
            .child(this.props.work)
            .child("Notes")
            .push(NotesModel[index]);
        }
      }

      axios
        .post(
          "https://restinbase2.herokuapp.com/u",
          JSON.stringify({
            users: this.props.list,
            key: key22,
            type: this.props.type,
            work: this.props.work,
            hi: "Note"
          }),
          {
            headers: headers
          }
        )

        .then(response => {
          console.log("lolo", response);
        })
        .catch(error => {});
    }

    if (this.props.type === "closed") {
      fire
        .database()
        .ref()
        .child("WorkStation")
        .child(this.props.work)
        .child("Link")

        .push(Link);
    } else {
      fire
        .database()
        .ref()
        .child("OpenGroup")
        .child(this.props.work)
        .child("Link")

        .push(Link);
    }

    if (Inbox != null) var g = Inbox.length;
    if (g > 0) {
      for (let index2 = 0; index2 < g; index2++) {
        if (this.props.type === "closed") {
          fire
            .database()
            .ref()
            .child("WorkStation")
            .child(this.props.work)
            .child("Inbox")
            .child(Inbox[index2])
            .push(key);
        } else {
          fire
            .database()
            .ref()
            .child("OpenGroup")
            .child(this.props.work)
            .child("Inbox")
            .child(Inbox[index2])
            .push(key);
        }

        axios
          .post(
            "https://restinbase2.herokuapp.com/inbox",
            JSON.stringify({
              key: key,
              to: Inbox[index2],
              msg: this.state.Info.msg,
              sender: this.props.username
            }),
            {
              headers: headers
            }
          )

          .then(response => {
            console.log("YESSSSSSSSSSSSSSSSS", response);
          })
          .catch(error => {
            console.log("ERRRRRRRRRRRRRRRRRRR", error);
          });
      }
    }

    let TodoModel = [];

    if (Todos != null) var f = Todos.length;
    if (f > 0) {
      for (let ind = 0; ind < f; ind++) {
        TodoModel.push({
          info: {
            todo: Todos[ind],
            timestamp: this.state.Info.timestamp,
            uid: this.state.Info.uid,
            username: this.state.Info.username,
            key: key22,
            msg: this.state.Info.msg
          }
        });

        if (this.props.type === "closed") {
          fire
            .database()
            .ref()
            .child("WorkStation")
            .child(this.props.work)
            .child("Todo")
            .push(TodoModel[ind]);
        } else {
          fire
            .database()
            .ref()
            .child("OpenGroup")
            .child(this.props.work)
            .child("Todo")
            .push(TodoModel[ind]);
        }
      }

      axios
        .post(
          "https://restinbase2.herokuapp.com/u",
          JSON.stringify({
            users: this.props.list,
            key: key22,
            type: this.props.type,
            work: this.props.work,
            hi: "Todo"
          }),
          {
            headers: headers
          }
        )

        .then(response => {
          console.log("lolo", response);
        })
        .catch(error => {});
    }

    if (Poll.title.Pol != null) {
      if (this.props.type === "closed") {
        fire
          .database()
          .ref()
          .child("WorkStation")
          .child(this.props.work)
          .child("Poll")
          .push(Poll);
      } else {
        fire
          .database()
          .ref()
          .child("OpenGroup")
          .child(this.props.work)
          .child("Poll")
          .push(Poll);
      }

      axios
        .post(
          "https://restinbase2.herokuapp.com/u",
          JSON.stringify({
            users: this.props.list,
            key: key22,
            type: this.props.type,
            work: this.props.work,
            hi: "Poll"
          }),
          {
            headers: headers
          }
        )

        .then(response => {})
        .catch(error => {});
    }

    // fire
    //   .database()
    //   .ref()
    //   .child("Notifications")
    //   .child("HVJ4brpcPMQ13ayeQ2s4aRp3Jiy1")
    //   .child("Home")
    //   .set(true);
  };
  l = () => {
    if (this.state.Info.uid === null) {
      this.setState({
        Info: {
          uid: this.props.uid,
          name: this.props.name,
          username: this.props.username,
          propic: this.props.pic
        }
      });
    }
    console.log("ALLLA", this.state);
  };
  fu = e => {
    var date = new Date();
    var timestamp = date.getTime();
    console.log(this.state);
    this.setState({
      Info: {
        uid: this.state.Info.uid,
        msg: e.target.value,
        timestamp: timestamp,
        username: this.state.Info.username,
        name: this.state.Info.name,
        propic: this.state.Info.propic,
        nonce: -timestamp
      }
    });

    var Todo = /\$\w+/gim;
    var TodoF = e.target.value.match(Todo);
    Todos = TodoF;
    if (TodoF != null) {
      for (let index5 = 0; index5 < TodoF.length; index5++) {
        var f = Todos[index5];
        Todos[index5] = f.substring(1, f.length);
      }
    }
    console.log(Todos);
    var re = /#\w+/gim;
    var found = e.target.value.match(re);

    var aba = /@\w+/gim;
    var founda = e.target.value.match(aba);

    // const Todo = /\$\w+/gim;

    // var TodoF = e.target.value.match(Todo);
    var Polex = /%\w+/gim;
    var Pol = e.target.value.match(Polex);

    var lin = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/gim;

    var lini = e.target.value.match(lin);

    Notes = found;
    Inbox = founda;
    Link = lini;
    // this.setState({
    //   Todos: TodoF

    console.log(Link);
    // });
    // console.log (this.state.Todos);

    // //   console.log (Notes, Inbox, Todos);

    if (Inbox != null) {
      for (let index3 = 0; index3 < Inbox.length; index3++) {
        var c = Inbox[index3];

        Inbox[index3] = c.substring(1, c.length);
      }
    }

    if (Notes != null) {
      for (let index4 = 0; index4 < Notes.length; index4++) {
        var d = Notes[index4];

        Notes[index4] = d.substring(1, d.length);
      }
    }

    // if (this.state.Todos != null) {
    //   for (let index5 = 0; index5 < this.state.Todos.length; index5++) {
    //     var f = this.state.Todos[index5];

    //     f = f.substring(1, f.length);

    //     var a = [];
    //     a = this.state.Todos;
    //     a[index5] = f;

    //     this.setState({ Todos: a });
    //     console.log (this.state);
    //   }
    // }
    // };
    console.log("PL", Pol);

    if (Pol != null) {
      for (let index6 = 0; index6 < Pol.length; index6++) {
        var l = Pol[index6];
        Pol[index6] = l.substring(1, l.length);
      }
    }

    Poll = {
      title: { Pol },
      Info: {
        name: this.state.Info.name,
        username: this.state.Info.username,
        timestamp: this.state.Info.timestamp,
        uid: this.state.Info.uid
      }
    };

    console.log("POLL", Poll);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({ avatarURL: url });

        this.setState({
          Info: {
            username: this.state.Info.username,
            name: this.state.Info.name,
            uid: this.state.Info.uid,
            timestamp: this.state.Info.timestamp,
            pic: url,
            msg: this.state.Info.msg
          }
        });
      });
  };
  render() {
    return (
      <div style={{ width: 300, zIndex: 30 }} className="card">
        <div className="card-body">
          <h4>New Messages</h4>
          <div>
            <TextField
              style={{ width: 270 }}
              id="outlined-multiline-static"
              label="LineUp"
              multiline
              placeholder="Hey @TimStart Prepare %Login_Page "
              rows="5"
              margin="normal"
              onChange={this.fu.bind(this)}
              variant="outlined"
            />
          </div>
          {this.kj}
          <div className="input">
            {" "}
            <DropdownButton className="btn-primary" white title="Photo">
              {" "}
              <FileUploader
                accept="Posts/*"
                name="avatar"
                randomizeFilename
                storageRef={firebase.storage().ref("images")}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
              />
            </DropdownButton>
            <Button
              onClick={this.onClick}
              variant="contained"
              color="secondary"
              style={{ width: "60%" }}
            >
              Send
            </Button>
          </div>
          {this.l()}
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
)(CardSendPic);
