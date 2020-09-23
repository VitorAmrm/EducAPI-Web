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
        localStorage.removeItem('email')
        localStorage.removeItem('token_exp')
        history.push('/login')
    }
    const Login = () =>{
        history.push('/login')
    }

    React.useEffect(() => {
        if(localStorage.getItem('token')){setLogio('Sair')}else{setLogio('Entrar')}
    },[])

    function LogButton() {
        if(Logio === 'Entrar'){
            return (<OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip>Faça Login ou Registre-se</Tooltip>}>
                <Nav.Link onClick={Login}><Link to='/login'>{Logio}</Link></Nav.Link></OverlayTrigger>)
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
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <NavDropdown title="Contextos" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to="/createcontext">Criar</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/editcontext'>Editar</Link></NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Desafios" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to='/createchallenge'>Criar</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/editchallenge'>Editar</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link><Link to='/gallery'>Galeria</Link></Nav.Link>
                </Nav>
                <Nav>
                    {LogButton()}
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
        
        
    );
}
