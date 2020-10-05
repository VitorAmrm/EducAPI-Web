import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import './style.css'
//import CardScroll from '../CardScroll/index'



export default function Body(){
    return(
            <div className='homebody'>
               <Container fluid >
                    <Row className='top-row'>
                       <Col className='col-home' >
                            <div className='center-line'>
                                    <h1 className='text-white'>EducAPI Web</h1>
                                    <h5 className='text-white'>Uma ferramenta que busca proporcionar apoio na alfabetização.<br/> Utilizando conceitos de contextos e desafios, aliando tecnologia a educação<br/> para um melhor desenvolvimento no processo de ensino-aprendizagem </h5>
                            </div>
                       </Col>
                    </Row>
                       
               </Container>
            </div>     
            );
}


