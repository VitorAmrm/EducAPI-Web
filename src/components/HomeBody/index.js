import React from 'react'
import {Container,Row,Col,Image} from 'react-bootstrap'
import './style.css'
import CardScroll from '../CardScroll/index'



export default function Body(){
    return(
            <div className='homebody'>
               <Container fluid >
                    <Row className='top-row'>
                       <Col className='col-home' >
                            <div className='center-line'>
                                    <h1 className='text-white'>EducAPI Web</h1>
                                    <h5 className='text-white'>Uma ferramenta que busca proporcionar apoio na alfabetização.<br/> Utilizando conceitos de contextos e desafios, aliando a tecnologia à educação<br/> para um melhor desenvolvimento no processo de ensino-aprendizagem </h5>
                            </div>
                            <Image id='image-title' fluid src='https://itforum365.com.br/wp-content/uploads/2018/11/como-a-tecnologia-impacta-na-educacao.png' />
                       </Col>
                    </Row>
                       
                       
                   <Row className='center-line margin-top'>
                       <h1 className='text-white'>Alguns Contextos</h1>
                        <Col>
                            <CardScroll variant='contexts' />    
                        </Col>
                   </Row>
                   <Row className='center-line'>
                    <h1 className='text-white'>Alguns Desafios</h1>
                       <Col>
                        <CardScroll variant='challenges'/>
                       </Col>
                   </Row>
               </Container>
            </div>     
            );
}


