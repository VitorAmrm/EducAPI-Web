import React,{useState} from 'react'
import {Container,Row,Col,Carousel, Button} from 'react-bootstrap'
import './style.css'
import CardScroll from '../CardScroll/index'



export default function Body(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };    
    
    return(
            <div className='homebody'>
               <Container >
                   <Row className='top-row'>
                       <div className='center-line'>
                            <h1>EducAPI Web</h1>
                            <h4>Uma ferramenta para apoiar a alfabetização. Utilizando contextos e desafios para um melhor desenvolvimento do ensino-aprendizagem</h4>
                       </div>
                   </Row>
                   <Row >
                   <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://apps4society.dcx.ufpb.br/wp-content/uploads/2020/06/Adicionar-um-t%C3%ADtulo.png"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                                <Button variant='light' href='https://play.google.com/store/apps/details?id=com.napoleao.alphabeto'>Baixar Agora</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://apps4society.dcx.ufpb.br/wp-content/uploads/2019/06/learning-your-abc-s-1257379.jpg?text=Third slide&bg=20232a"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                   </Row>
                   <Row className='center-line'>
                       <h1>Exemplos de Contextos</h1>
                        <Col>
                            <CardScroll />    
                        </Col>
                   </Row>
                   <Row className='center-line'>
                    <h1>Exemplos de Contextos</h1>
                       <Col>
                      
                       </Col>
                   </Row>
               </Container>
            </div>     
            );
}