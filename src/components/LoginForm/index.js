import React from 'react'
import {Button,Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


export default function LoginForm(){
    return(
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                Entre com o email cadastrado.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Link to="/home">
            <Button variant="primary" type="submit">
                Entrar
            </Button>
            </Link>
            <Button variant="secondary" type="submit">
                Ainda Não tem Cadastro?
            </Button>
    </Form>
    );
}