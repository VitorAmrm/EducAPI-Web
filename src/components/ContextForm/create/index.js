import React from 'react'
import {Form,Button} from 'react-bootstrap'
import {Formik} from 'formik'
import {Contextschema} from '../../../utils/FormSchema'
import api from '../../../service/api'
import SessionNotExist from '../../../utils/SessionNotExist'



export default function ContextForm (){

    const [show,setShow] = React.useState(false)

    React.useEffect(() => {localStorage.getItem('token') ? setShow(false) : setShow(true)})
    

    function onSubmit(values){
        const token = localStorage.getItem('token')

            api.post('/v1/api/auth/contexts',{values},{'Authorization': token})
                    .then(response =>{alert(JSON.stringify(response.data))})
                    .catch(error => {alert(error); console.log(values)})

    }

    return(
        <Formik validationSchema={Contextschema} onSubmit={values =>{onSubmit(values)}} initialValues={{name: '',imageUrl: '',videoUrl: '',soundUrl: ''}}>
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
                                <SessionNotExist show={show}/>
                                <Form.Group controlId="">
                                    <Form.Label>Nome do contexto</Form.Label>
                                    <Form.Control type="text" placeholder="Nome do Contexto" name='name'
                                                                onChange={handleChange} 
                                                                value={values.name}
                                                                isValid={touched.name && !errors.name}
                                                                isInvalid={!!errors.name}
                                                                onBlur={handleBlur}/>

                                    <Form.Control.Feedback ></Form.Control.Feedback>            
                                    <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="">
                                    <Form.Label>Link da Imagem</Form.Label>
                                    <Form.Control type='text' placeholder="Link da Imagem" name='imageUrl'
                                                                onChange={handleChange} 
                                                                value={values.imageUrl}
                                                                isValid={touched.imageUrl && !errors.imageUrl}
                                                                isInvalid={!!errors.imageUrl}
                                                                onBlur={handleBlur}/>

                                    <Form.Control.Feedback ></Form.Control.Feedback>            
                                    <Form.Control.Feedback type='invalid'>{errors.imageUrl}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="">
                                    <Form.Label>Link do Vídeo</Form.Label>
                                    <Form.Control type='text' placeholder="Link do Vídeo" name='videoUrl'
                                                                onChange={handleChange} 
                                                                value={values.videoUrl}
                                                                isValid={touched.videoUrl && !errors.videoUrl}
                                                                isInvalid={!!errors.videoUrl}
                                                                onBlur={handleBlur}/>

                                    <Form.Control.Feedback ></Form.Control.Feedback>            
                                    <Form.Control.Feedback type='invalid'>{errors.videoUrl}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="">
                                    <Form.Label>Link do Áudio</Form.Label>
                                    <Form.Control type='text' placeholder="Link do Áudio" name='soundUrl'
                                                                onChange={handleChange} 
                                                                value={values.soundUrl}
                                                                isValid={touched.soundUrl && !errors.soundUrl}
                                                                isInvalid={!!errors.soundUrl}
                                                                onBlur={handleBlur}/>

                                    <Form.Control.Feedback ></Form.Control.Feedback>            
                                    <Form.Control.Feedback type='invalid'>{errors.soundUrl}</Form.Control.Feedback>
                                </Form.Group>
                            
                                <Button variant='primary' type='submit' block>
                                    Cadastrar
                                </Button>

                            </Form>
                            

                        )}
        </Formik>
        
    )
}