import React from 'react'
import {Navbar,Nav,NavDropdown,Image} from 'react-bootstrap'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import image from '../../assets/logotipo.png'
import {Link} from 'react-router-dom'

export default function Navigation(){
    return(

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><Image id="logo" src={image}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/home"><Nav.Link href="#home">Home</Nav.Link></Link>
                    <NavDropdown title="Contextos" id="basic-nav-dropdown">
                        <Link to="/createcontext"><NavDropdown.Item href="#action/3.1">Criar</NavDropdown.Item></Link>
                        <NavDropdown.Item href="#action/3.2">Editar</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Desafios" id="basic-nav-dropdown">
                        <Link to="/createchallenge"><NavDropdown.Item href="#action/3.1">Criar</NavDropdown.Item></Link>
                        <NavDropdown.Item>Editar</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}