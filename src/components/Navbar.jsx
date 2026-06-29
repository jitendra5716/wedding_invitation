import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarExample() {
  return (
    <Navbar expand="lg" className="carousel-navbar" style={{ background: 'transparent' }}>
      <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{fontWeight:"700",color:"maroon",lineHeight:"2.5rem",marginRight:"15px"}}>Home</Nav.Link>
            <Nav.Link href="#couple" style={{fontWeight:"700",color:"maroon",lineHeight:"2.5rem",marginRight:"15px"}}>Couple</Nav.Link>
            <Nav.Link href="#events" style={{fontWeight:"700",color:"maroon",lineHeight:"2.5rem",marginRight:"15px"}}>Events</Nav.Link>
            <Nav.Link href="#gallery" style={{fontWeight:"700",color:"maroon",lineHeight:"2.5rem",marginRight:"15px"}}>Gallery</Nav.Link>
            <Nav.Link href="#wishes" style={{fontWeight:"700",color:"maroon",lineHeight:"2.5rem",marginRight:"15px"}}>Wishes</Nav.Link>
            <Nav.Link href="#contact" style={{fontWeight:"700",color:"maroon",lineHeight:"2.5rem",marginRight:"15px"}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarExample;