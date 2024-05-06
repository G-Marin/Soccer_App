import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import './Header.css';

function Header() {
    return (
        <div className="Header">
      
            

            <Navbar className = "navbar" expand="lg">

                <Container>
                    <Navbar.Brand className = "navBrand" href="#home">Golazo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav fill  variant = "tabs" className="me-auto">
                            <Nav.Link className = "navItem" href="#home">Home</Nav.Link>
                            <Nav.Link className = "navItem" href="#link">Link</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

    

        </div>
  );
}

export default Header;
