import React from 'react'
import {Form,Button} from 'react-bootstrap'
import {Formik} from 'formik'
import {Contextschema} from '../../../utils/FormSchema'


export default function ContextForm (){
    return(
        <Formik validationSchema={Contextschema} onSubmit={values =>{alert(JSON.stringify(values))}} initialValues={{name: '',imageUrl: '',videoUrl: '',audioUrl: ''}}>
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
                                    <Form.Control type="Url" placeholder="Link da Imagem" name='imageUrl'
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
                                    <Form.Control type="Url" placeholder="Link do Vídeo" name='videoUrl'
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
                                    <Form.Control type="Url" placeholder="Link do Áudio" name='audioUrl'
                                                                onChange={handleChange} 
                                                                value={values.audioUrl}
                                                                isValid={touched.audioUrl && !errors.audioUrl}
                                                                isInvalid={!!errors.audioUrl}
                                                                onBlur={handleBlur}/>

                                    <Form.Control.Feedback ></Form.Control.Feedback>            
                                    <Form.Control.Feedback type='invalid'>{errors.audioUrl}</Form.Control.Feedback>
                                </Form.Group>
                            
                                <Button variant='primary' type='submit' block>
                                    Cadastrar
                                </Button>

                            </Form>
                            

                        )}
        </Formik>
        
    )
}