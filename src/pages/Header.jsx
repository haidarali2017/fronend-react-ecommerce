
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';

import {Link} from 'react-router-dom';
// import  {Link} from "react-dom/client";
function Header() {
 
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="">eccomerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="Login">Login</Link>
            <Link  to="add">Add product</Link>
            <Link  to="update"> Update product</Link>
            <Link to="register">register</Link>
  
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
  
  export default Header
  