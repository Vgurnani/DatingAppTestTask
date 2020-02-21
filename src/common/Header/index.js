import React from "react";
import PropTypes from "prop-types";
import {
  Navbar,
  Nav,
  Form,
  NavDropdown,
  FormControl,
  Button
} from "react-bootstrap";
import history from "utils/history";

const Header = props => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Dating App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link> */}
          {/* <Nav.Link href="#link">Link</Nav.Link> */}
          <NavDropdown title="Admin" id="basic-nav-dropdown">
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item onClick={() => history.push("/")}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  showBackground: PropTypes.bool
};

export default Header;
