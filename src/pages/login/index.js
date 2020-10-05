import React from 'react'
import LoginForm from '../../components/LoginForm/index'
import {Image,Container,Row,Col} from 'react-bootstrap'
import './style.css'
import image from '../../assets/logotipofinal_prancheta2.png'



export default function LoginPage(){
    return (
            <Container className='container-content' > 
                <Row className='row-content'>
                    <Col className='column-content'>
                        <div className="image-box">
                            <Image src={image} fluid/>
                        </div>
                        <LoginForm />
                    </Col>
                </Row>
            </Container>
        
    );
}
