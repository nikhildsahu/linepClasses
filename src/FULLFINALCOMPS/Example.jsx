import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  CardBody,
  Card
} from "reactstrap";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import FF from "../assets/MyImages/beats.png";
import ModalExample from "./ModalExample";

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div style={{ height: 40 }}>
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="ml-sm-auto navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/components/">
                  Components
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/utilities/">
                  Utilities
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://github.com/reactstrap/reactstrap"
                  className="nav-link"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
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
)(Example);
