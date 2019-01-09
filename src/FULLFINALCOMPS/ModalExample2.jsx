import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ProfilePage from "./ProfilePage";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
class ModalExample2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <ListItem onClick={this.toggle}>
          <ListItemIcon>@</ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </ListItem>
        <Modal
          style={{
            backgroundColor: "#11ffee00"
          }}
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader style={{ color: "black" }} toggle={this.toggle}>
            <h3>
              <b>Profiles</b>{" "}
            </h3>
          </ModalHeader>
          <ModalBody
            style={{
              backgroundColor: "#11ffee00"
            }}
          >
            <ProfilePage />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample2;
