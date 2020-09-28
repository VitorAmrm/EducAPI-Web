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
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('token_exp')
        history.push('/login')
    }
    const Login = () =>{
        history.push('/login')
    }

    React.useEffect(() => {
        if(sessionStorage.getItem('token')){setLogio('Sair')}else{setLogio('Entrar')}
    },[])

    function LogButton() {
        if(Logio === 'Entrar'){
            return (<OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip>Faça Login ou Registre-se</Tooltip>}>
                <Nav.Link onClick={Login}>{Logio}</Nav.Link></OverlayTrigger>)
        }else{
        return  (<OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip>Logado como : <strong>{sessionStorage.getItem('email')}</strong></Tooltip>}>
            <Nav.Link onClick={Logout}>{Logio}</Nav.Link></OverlayTrigger>)
        }
    }


    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><Image id="logo" src={image}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link to="/"><Nav.Link as='ul'>Home</Nav.Link></Link>
                    <NavDropdown bsPrefix='nav-link'title="Contextos" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to="/createcontext">Criar</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/editcontext'>Editar</Link></NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Desafios" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to='/createchallenge'>Criar</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/editchallenge'>Editar</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Link to="/gallery"><Nav.Link as='ul'>Galeria</Nav.Link></Link>
                </Nav>
                <Nav as='ul'>
                    {LogButton()}
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
        
        
    );
}
