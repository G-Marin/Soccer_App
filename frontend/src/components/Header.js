import React from 'react';
import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import './Header.css';

function Header() {
    return (
        <div className="Header">
      
            

            <Navbar className = "bg-dark-blue" expand="lg">

                <Container fluid>

                    <Navbar.Brand className = "navBrand fs-2 text-white" href="/">Golazo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">


                        <Nav className="w-100 nav-justified" variant = "tabs">

                            
                            <Nav.Link className = "navItem text-white fs-4 " href="/news">News</Nav.Link>

                            <Nav.Link className = "navItem fs-4 text-white" href="/live">Live Scores</Nav.Link>

                            <Nav.Link className = "navItem text-white fs-4 " href="/standings">League Standings</Nav.Link>

                            <Nav.Link className = "navItem text-white fs-4 " href="/scorers">Top Scorers</Nav.Link>

                            
                            
                        </Nav>       

                    </Navbar.Collapse>

                    <div style={{ width: '80px' }}></div>

                    <Button className = "loginButton btn p-2 ml-3 fw-bold" href="/login">Login</Button>

                </Container>
            </Navbar>

     

        </div>
  );
}

export default Header;
