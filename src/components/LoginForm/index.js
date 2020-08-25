import React from 'react'
import {Button,Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {Formik} from 'formik'
import {Loginschema} from '../../utils/FormSchema'
import './style.css'

export default function LoginForm(){
    return(
        
        <Formik validationSchema={Loginschema} onSubmit={values =>{alert(JSON.stringify(values))}} initialValues={{email: 'Otto',password: ''}}>
        {(
        {
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                        }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email"
                                                name="email" 
                                                placeholder="Email"
                                                onChange={handleChange} 
                                                value={values.email}
                                                isValid={touched.email && !errors.email}
                                                isInvalid={!!errors.email} />
                                    <Form.Control.Feedback ></Form.Control.Feedback>            
                                    <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>            
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" placeholder="Senha" name="password"
                                                   onChange={handleChange} 
                                                   value={values.password}
                                                   isValid={touched.password && !errors.password}
                                                   isInvalid={!!errors.password}  />
                                    <Form.Control.Feedback ></Form.Control.Feedback>            
                                    <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
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
                        )
        
        
        }</Formik>
       





        
    );
}