import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import fire from "../Fire";
import ProfilePage from "../TodoComponent/ProfilePage";

const styles = {
  card: {
    minWidth: 300
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

var qaa = {
  msg: null,
  uid: null,
  timestamp: null
};

var Notes = [];
var Inbox = [];
var key = {};
var Todos = {};

var onClick = () => {
  key = fire
    .database()
    .ref()
    .child("Msg")
    .push(qaa).key;

  if (Notes != null) var n = Notes.length;

  let NotesModel = [];
  if (n > 0) {
    for (let index = 0; index < n; index++) {
      NotesModel.push({
        Note: Notes[index],
        timestamp: qaa.timestamp,
        uid: qaa.uid,
        key: key
      });

      fire
        .database()
        .ref()
        .child("Notes")
        .push(NotesModel[index]);
    }
  }

  if (Inbox != null) var g = Inbox.length;
  if (g > 0) {
    for (let index2 = 0; index2 < g; index2++) {
      fire
        .database()
        .ref()
        .child("Inbox")
        .child(Inbox[index2])
        .push(key);
    }
  }

  let TodoModel = [];

  if (Todos != null) var f = Todos.length;
  if (f > 0) {
    for (let ind = 0; ind < f; ind++) {
      TodoModel.push({
        info: {
          todo: Todos[ind],
          timestamp: qaa.timestamp,
          uid: qaa.uid,
          key: key
        }
      });
      fire
        .database()
        .ref()
        .child("Todo")
        .push(TodoModel[ind]);
    }
  }
};

const fu = e => {
  var date = new Date();
  var timestamp = date.getTime();

  var re = /#\w+/gim;
  var found = e.target.value.match(re);

  var aba = /@\w+/gim;
  var founda = e.target.value.match(aba);

  var Todo = /\$\w+/gim;
  var TodoF = e.target.value.match(Todo);

  Notes = found;
  Inbox = founda;
  Todos = TodoF;

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

  if (TodoF != null) {
    for (let index5 = 0; index5 < TodoF.length; index5++) {
      var f = Todos[index5];
      Todos[index5] = f.substring(1, f.length);
    }
  }

  qaa = {
    uid: qaa.uid,
    msg: e.target.value,
    timestamp: timestamp
  };
};
function CardSendmgs(props) {
  const { classes } = props;
  qaa = {
    uid: props.uid
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            New Messsage
          </Typography>
          <Input onChange={fu} multiline />
        </CardContent>
        <CardActions>
          <div />
          <Button onClick={onClick} size="small">
            Send
          </Button>
          <ProfilePage />
        </CardActions>
      </Card>
    </div>
  );
}

CardSendmgs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardSendmgs);
