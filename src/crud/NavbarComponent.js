import React from 'react'
import { NavDropdown, Navbar, Nav, Form } from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="#home">PENCAKER</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#Terbaru">Loker Terbaru</Nav.Link>
                        <NavDropdown title="Kota" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Cilegon</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Serang</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Pandeglang</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComponent