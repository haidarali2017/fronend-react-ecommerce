
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';

import {Link} from 'react-router-dom';
// import  {Link} from "react-dom/client";
function Header() {
 
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/register">register</Link>
              <Link to="/add">add</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
  
  export default Header
  