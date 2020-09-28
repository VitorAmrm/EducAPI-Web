import React,{useEffect} from 'react'
import {Modal,Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';



export default function SessionNotExist(props)  {
    const [show, setShow] = React.useState(props.show);
    const [now,setNow] = React.useState(props.now);
    const [message,setMessage] = React.useState('Você precisa fazer login para criar ou alterar contextos e desafios.')
    
    const history = useHistory();

    useEffect(() => {
      setShow(props.show)
      setNow(props.now)

      const handleExpiration = () => {
        if(sessionStorage.getItem('exp') >= now ){
          sessionStorage.clear()
          setShow(true)
          setMessage('Sessão expirada, faça o login novamente para continuar')
          return true
        }
      }
      handleExpiration()
      
     
      
    },[props.show,props.now,now])

    function handleInicio(){
       setShow(false) 
       history.push('/')}
    function handleLogin(){ 
      setShow(false) 
      history.push('/login')}
    

    return (
      <Modal show={show} onHide={() => handleInicio()} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login Necessário para Continuar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleInicio()}>
            Inicio
          </Button>
          <Button variant="primary" onClick={() => handleLogin()}>
              Fazer Login
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

