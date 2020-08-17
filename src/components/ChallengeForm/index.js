import React from 'react'
import {Form} from 'react-bootstrap'

export default function ChallengeForm (){
    return(
        <Form>
        <Form.Group controlId="">
            <Form.Label>Palavra do Desafio</Form.Label>
            <Form.Control type="text" placeholder="Palavra do Desafio" />
            <Form.Text className="text-muted">escolha um nome que represente o desafio</Form.Text>
        </Form.Group>
        <Form.Group controlId="">
            <Form.Label>Link da Imagem</Form.Label>
            <Form.Control type="Url" placeholder="Link da Imagem" />
            <Form.Text className="text-muted">escolha uma imagem que represente o desafio</Form.Text>
        </Form.Group>
        <Form.Group controlId="">
            <Form.Label>Link do Vídeo </Form.Label>
            <Form.Control type="Url" placeholder="Link do Vídeo" />
            <Form.Text className="text-muted">escolha um vídeo que represente o desafio</Form.Text>
        </Form.Group>
        <Form.Group controlId="">
            <Form.Label>Link do Áudio</Form.Label>
            <Form.Control type="Url" placeholder="Link do Áudio" />
            <Form.Text className="text-muted">escolha um áudio que represente o desafio</Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Control as="select">
                <option>Animais</option>
                <option>Frutas</option>
                <option>Tecnologia</option>
            </Form.Control>
        </Form.Group>
        </Form>
    )
}