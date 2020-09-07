import React from 'react'
import {Navbar,Nav,NavDropdown,Image, OverlayTrigger,Tooltip} from 'react-bootstrap'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import image from '../../assets/logotipo.png'
import {Link,useHistory} from 'react-router-dom'



export default function Navigation(){
    
    const [Logio, setLogio] = React.useState(0)
    
    const history = useHistory()

    const Logout = () => {
        localStorage.removeItem('token')
        history.push('/')
    }
    const Login = () =>{
        history.push('/login')
    }

    React.useEffect(() => {
        if(localStorage.getItem('token')){setLogio('Sair')}else{setLogio('Entrar')}
    },[])

    function LogButton() {
        if(Logio === 'Entrar'){
            return (<Link to='/login'><OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip>Faça Login ou Registre-se</Tooltip>}>
                <Nav.Link onClick={Login}>{Logio}</Nav.Link></OverlayTrigger></Link>)
        }else{
        return  (<Link to='/'><OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip>Logado como : <strong>{localStorage.getItem('email')}</strong></Tooltip>}>
            <Nav.Link onClick={Logout}>{Logio}</Nav.Link></OverlayTrigger></Link>)
        }
    }


    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><Image id="logo" src={image}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/home"><Nav.Link>Home</Nav.Link></Link>
                    <NavDropdown title="Contextos" id="basic-nav-dropdown">
                        <Link to="/createcontext"><NavDropdown.Item>Criar</NavDropdown.Item></Link>
                        <NavDropdown.Item>Editar</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Desafios" id="basic-nav-dropdown">
                        <Link to="/createchallenge"><NavDropdown.Item>Criar</NavDropdown.Item></Link>
                        <NavDropdown.Item>Editar</NavDropdown.Item>
                    </NavDropdown>
                    <Link to='/gallery'><Nav.Link>Galeria</Nav.Link></Link>
                </Nav>
                <Nav>
                    {LogButton()}
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
        
        
    );
}
