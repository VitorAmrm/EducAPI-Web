import React from 'react'
import {Form} from 'react-bootstrap'

export default function ContextForm (){
    return(
        <Form>
        <Form.Group controlId="">
            <Form.Label>Nome do contexto</Form.Label>
            <Form.Control type="text" placeholder="Nome do Contexto" />
            <Form.Text className="text-muted">escolha um nome que represente o contexto</Form.Text>
        </Form.Group>
        <Form.Group controlId="">
            <Form.Label>Link da Imagem</Form.Label>
            <Form.Control type="Url" placeholder="link da imagem" />
            <Form.Text className="text-muted">escolha uma imagem que represente o contexto</Form.Text>
        </Form.Group>
        <Form.Group controlId="">
            <Form.Label>Link </Form.Label>
            <Form.Control type="Url" placeholder="link do video" />
            <Form.Text className="text-muted">escolha um vídeo que represente o contexto</Form.Text>
        </Form.Group>
        <Form.Group controlId="">
            <Form.Label>Password</Form.Label>
            <Form.Control type="Url" placeholder="link do audio" />
            <Form.Text className="text-muted">escolha um áudio que represente o contexto</Form.Text>
        </Form.Group>
        </Form>
    )
}