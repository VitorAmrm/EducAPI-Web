import React from 'react'
import {Button,Form} from 'react-bootstrap'
//import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {Formik} from 'formik'
import {Loginschema} from '../../utils/FormSchema'
import './style.css'
import api from '../../service/api'
import {useHistory,Link} from 'react-router-dom'



export default function LoginForm(){

    const history = useHistory();
    

    function authorization(email,password){
        
        const invalid = "Invalid e-mail or password. Login not successful.";
        
        api.post('v1/api/auth/login',{email: email,password: password})
                             .then(response => {
                                 if(response.data.token === invalid){
                                    alert("senha ou email invalido, tente novamente")
                                 }else{
                                    
                                    let datafromtoken = response.data.token.split('.')
                                    sessionStorage.setItem('token',response.data.token)
                                    let payload = JSON.parse(atob(datafromtoken[1]))
                                    sessionStorage.setItem('email',payload.sub)
                                    sessionStorage.setItem('exp',payload.exp)
                                    console.log(Date.now())
                                    history.push('/gallery')
                                 }
                             })
                             .catch(error => alert(`Ocorreu um erro, tente novamente`))
    }

    return(
        <Formik validationSchema={Loginschema} onSubmit={values =>{console.log(authorization(values.email,values.password))}} initialValues={{email: '',password: ''}}>
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
                                
                                
                                <Button variant="primary" type="submit" >
                                    Entrar
                                </Button>
                                
                                
                                <Link to='/register'><Button className='register-btn'variant="info" type="submit">
                                    Ainda Não tem Cadastro?
                                </Button></Link>

                              
    </Form>
                        )
        
        
        }</Formik>
       





        
    );
}