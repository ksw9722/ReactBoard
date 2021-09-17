import * as React from 'react'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import {

    NavLink
} from "react-router-dom";

const Menu = (props:any) => {
    return (
        <div>
            <div className="pb-5 mb-3">
            <Navbar bg="dark" expand="xl fixed-top"  variant="dark">
                    <Container className="">
                        <Navbar.Brand href="/" className="">
                        <img
                                alt=""
                                src="./static/react-logo.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-center margin-right: 5px"
                        />{''}
                            &nbsp;React-Board
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Nav className="me-auto">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink  to="/aboutme" className="nav-link">About Me</NavLink>
                            <NavLink to="/link" className="nav-link">Link</NavLink>
                            <NavDropdown className="" title="Dropdown" id="basic-nav-dropdown">
                            <NavLink to="/action/3.1" className="dropdown-item">Action</NavLink>
                            <NavLink to="/action/3.2" className="dropdown-item">Another action</NavLink>
                            <NavLink to="/action/3.3" className="dropdown-item">Something</NavLink>
                            <NavDropdown.Divider />
                            <NavLink to="/action/3.4" className="dropdown-item">Separated link</NavLink>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                        </Nav>
                    </Container>
            </Navbar>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}


const styles={'brandImage':{'margin-right':'5px',
                            'd-inline-block':true,
                            'align-top':true}}
export default Menu;