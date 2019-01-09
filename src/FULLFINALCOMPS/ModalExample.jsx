import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ProfilePage from "./ProfilePage";

class ModalExample extends React.Component {
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
      <div
        style={{
          backgroundColor: "#11ffee00",
          marginTop: "25%"
        }}
      >
        <a
          style={{
            backgroundColor: "#11ffee00"
          }}
          onClick={this.toggle.bind(this)}
        >
          <h4>
            <b style={{ color: "black" }}>Profile</b>
          </h4>
        </a>
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

export default ModalExample;
