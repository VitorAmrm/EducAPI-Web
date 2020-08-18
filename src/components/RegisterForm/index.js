import React from 'react';
import './style.css'
import {Form,Button} from 'react-bootstrap'
import {Registerschema} from '../../utils/FormSchema'
import {Formik} from 'formik'


export default function RegisterForm(){



    return(
        
                   

                                                        //aqui vai entra o api.post(user)
    <Formik validationSchema={Registerschema} onSubmit={values =>{alert(JSON.stringify(values))}} initialValues={{name: 'Mark',email: 'Otto',password: '',password2: ''}}>
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
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control name ='name'
                                            type="text" 
                                            placeholder="Nome" 
                                            onChange={handleChange} 
                                            value={values.name}
                                            isValid={touched.name && !errors.name}
                                            isInvalid={!!errors.name}
                                            />
                                <Form.Control.Feedback ></Form.Control.Feedback>
                                <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label >Email </Form.Label>
                                <Form.Control name ='email' type="email" placeholder="Email"
                                                onChange={handleChange} 
                                                value={values.email}
                                                isValid={touched.email && !errors.email}
                                                isInvalid={!!errors.email}
                                                />
    
                                <Form.Control.Feedback ></Form.Control.Feedback>
                                <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                            </Form.Group>
                            
                            
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label >Senha</Form.Label>
                                <Form.Control name ='password' type="password" placeholder="Senha"
                                                onChange={handleChange} 
                                                value={values.password}
                                                isValid={touched.password && !errors.password}
                                                isInvalid={!!errors.password}
                                                />
    
                                <Form.Control.Feedback ></Form.Control.Feedback>
                                <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label >Confirme sua Senha</Form.Label>
                                <Form.Control name ='password2' type="password" 
                                            placeholder="Confirme sua Senha"
                                            onChange={handleChange} 
                                            value={values.password2}
                                            isValid={touched.password2 && !errors.password2}
                                            isInvalid={!!errors.password2}
                                            />
                                            <Form.Control.Feedback ></Form.Control.Feedback>
                                <Form.Control.Feedback type='invalid'>{errors.password2}</Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Cadastrar
                            </Button>
                        </Form>
                        )
                        }</Formik>
                         
                

            
       
    );
}