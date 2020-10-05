import React from 'react';
import './style.css'
import {Form,Button} from 'react-bootstrap'
import {Registerschema} from '../../utils/FormSchema'
import {Formik} from 'formik'
import api from '../../service/api'
import {useHistory} from 'react-router-dom'


export default function RegisterForm(){

    const history = useHistory()

    function postUser(values){
         api.post('v1/api/users',{email: values.email,name: values.name,password: values.password})
        .then(response => {alert(`O usuario ${response.data.name} foi criado`);history.push('/login')})
        .catch(error => {alert(`Algo ocorreu errado, tente novamente`)})
    }

    return(
        
    <Formik validationSchema={Registerschema} onSubmit={values =>{postUser(values)}} initialValues={{name: '',email: '',password: '',password2: ''}}>
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
                            <Button variant="primary" type="submit" block>
                                Cadastrar
                            </Button>
                        </Form>
                        )
                        }</Formik>
                         
                

            
       
    );
}