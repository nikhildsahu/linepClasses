import React, { Component } from "react";
import fire from "../Fire";
import Card from "../ChatComponents/Card";
import moment from "moment";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    fire
      .database()
      .ref()
      .child("Msg")
      .child(this.props.match.params.key)
      .on("value", da => {
        this.setState({
          msg: da.val().msg,
          uid: da.val().uid,
          pic: da.val().pic,
          timestamp: da.val().timestamp,
          username: da.val().username,
          name: da.val().name
        });
      });
  }

  componentWillMount() {}
  render() {
    return (
      <div className="card">
        {/* Tabs */}
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
              Post
            </a>
          </li>
        </ul>
        {/* Tabs */}
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade active show"
            id="current-month"
            role="tabpanel"
            aria-labelledby="pills-timeline-tab"
          >
            <div className="card-body">
              <div className="profiletimeline m-t-0">
                <Card
                  uid={this.state.uid}
                  username={this.state.username}
                  name={this.state.name}
                  msg={this.state.msg}
                  pic={this.state.pic}
                  timestamp={moment(this.state.timestamp).fromNow()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
