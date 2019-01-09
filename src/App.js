import React, { Component } from "react";
import "./App.css";
import { Switch } from "react-router";
import { Route } from "react-router-dom";

import FinalChat from "./ChatComponents/FinalChat";
import SignUp2 from "./Auth/SignUp2";
import SignUp3 from "./Auth/SignUp3";

import Login from "./Auth/Login";
import LoginS from "./Auth/LoginS";
import SignUpGoogle from "./Auth/SignUpGoogle";

import FinalTodo from "./ChatComponents/FinalTodo";

import ReduxDemo from "./redux/ReduxDemo ";
import Uikit from "./UIKIT/Uikit";

import Uikit2 from "./UIKIT/Uikit2";
import ChatShow from "./ChatComponents/ChatShow";
import Sidebar from "./UIKIT/Sidebar";
import MainLayout from "./FULLFINALCOMPS/MainLayout";
import AJ from "./UIKIT/AJ";
import axios from "axios";
import Position from "./FULLFINALCOMPS/Position";
import SignUpNow from "./FULLFINALCOMPS/SignUpNow";
import LottieControl from "./FULLFINALCOMPS/LottieControl";
import Landing from "./Landing";
import ChatShow2 from "./ChatComponents/ChatShow2";
import Workstation from "./FULLFINALCOMPS/Workstation";
import TeacherStation from "./FULLFINALCOMPS/TeacherStation";
import StudentStation from "./FULLFINALCOMPS/StudentStation";

import TeacherDash from "./FULLFINALCOMPS/TeacherDash";
import StudentDash from "./FULLFINALCOMPS/StudentDash";
import fire from "./Fire";

class App extends Component {
  componentWillMount() {
    // for (let index = 0; index < 40; index++) {
    //   var h = this.makeid();
    //   fire
    //     .database()
    //     .ref()
    //     .child("Classes")
    //     .child("SYSTEM PROGRAMING")
    //     .child("Assignmnet")
    //     .child("-LV4GFAARmUMgS-On_T5")
    //     .child("Completed")
    //     .child(h)
    //     .set({
    //       file:
    //         "https://firebasestorage.googleapis.com/v0/b/workstation-de68a.appspot.com/o/images%2Fd1be37f7-75cf-4518-89db-55f300e473cb.png?alt=media&token=cbb7c441-eba9-4d4a-9d85-b532f0f77f6d",
    //       name: h,
    //       timestamp: 1546591338510
    //     });
    //   fire
    //     .database()
    //     .ref()
    //     .child("Classes")
    //     .child("SYSTEM PROGRAMING")
    //     .child("Assignmnet")
    //     .child("-LV4GFAARmUMgS-On_T5")
    //     .child("Submission")
    //     .child(h)
    //     .set({
    //       Evaluated: false,
    //       Marks: "dssdsd",
    //       batch: "jk",
    //       endt: "1546276632777",
    //       file: "https://firebasestorage.googleapis.com/v0/b/wor...",
    //       marks: "",
    //       name: "Atharva Udapure",
    //       plagiarism: 0,
    //       plagiarismwith: "Atharva Udapure",
    //       rollno: "jk",
    //       text: "cvvvvvvvv",
    //       timestamp: 1546591338504,
    //       uid: h
    //     });
    // }
  }

  makeid = () => {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  render() {
    return (
      <div style={{ backgroundColor: "white" }} className="App">
        <Switch>
          <Route path="/" exact component={Landing} />

          <Route path="/signupt" exact component={SignUp2} />
          <Route path="/signups" component={SignUpGoogle} />
          <Route path="/logint" component={Login} />
          <Route path="/logins" component={LoginS} />

          <Route path="/work" component={TeacherStation} />
          <Route path="/works" component={StudentStation} />

          <Route path="/dashboard_teacher" component={TeacherDash} />
          <Route path="/dashboard_student" component={StudentDash} />
        </Switch>
      </div>
    );
  }
}

export default App;
