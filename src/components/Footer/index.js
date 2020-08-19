import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { AiFillInstagram,AiFillGithub } from 'react-icons/ai'
import {FiGlobe,FiMail} from 'react-icons/fi'
import './style.css'

export default function Footer(){

    return(
            <Container fluid>
                    <Row className='divider-line'/>
                    <Row className="justify-content-md-center">
                        <Col className='column-margin-lr'>
                            <h5>APPS4SOCIETY</h5>
                            <p>O Apps4Society é um projeto de extensão desenvolvido pela UFPB-Campus IV (CCAE) 
                                e que visa construir aplicativos que venham a impactar positivamente a sociedade,
                                 promovendo também a capacitação dos estudantes dos cursos de Licenciatura em Ciência da Computação,
                                   Bacharelado em Sistemas de Informação e Design.</p>
                        </Col>
                        
                        <Col className='column-margin-lr'>
                            <h5>CONTATO</h5>
                            <Row className='float display-flex-column'>
                                <div className='icons-container'>
                                    <a href='https://www.instagram.com/apps4society/'><AiFillInstagram className='icons' size='24px'  /></a>
                                    <a href='https://www.instagram.com/apps4society/'><p>@apps4society</p></a>
                                </div>
                                <div className='icons-container'>
                                    <a href='https://github.com/a4s-ufpb'><AiFillGithub className='icons' size='24px' /></a>
                                    <a href='https://github.com/a4s-ufpb'><p>github.com/a4s-ufpb</p></a>
                                </div>
                                <div className='icons-container'>
                                    <a href='https://apps4society.dcx.ufpb.br/'><FiGlobe className='icons' size='24px'/></a>
                                    <a href='https://apps4society.dcx.ufpb.br/'><p>apps4society.dcx.ufpb.br/</p></a>
                                </div>
                                <div className='icons-container'> 
                                    <FiMail className='icons' size='24px'/>
                                    <p>apps4society@dcx.ufpb.br</p>
                                </div>
                            </Row>
                        </Col>
                        <Col className='column-margin-lr'>
                            <h5>OUTRAS CONTRIBUIÇÕES</h5>
                            <Row className='justify-content-md-center'>
                                <div className='contributions'>
                                    <Button variant="link" href='https://apps4society.dcx.ufpb.br/?page_id=671'>AlfaBeto</Button>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row  className="justify-content-md-center border-top" >
                        <p>Copyright © 2020 Apps4Society</p>
                    </Row>
            </Container>
    );

}