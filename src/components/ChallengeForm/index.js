import React from 'react'
import {Form,Button} from 'react-bootstrap'
import {Formik} from 'formik'
import {Challengeschema} from '../../utils/FormSchema'

export default function ChallengeForm (){
    return(

        <Formik validationSchema={Challengeschema} onSubmit={values =>{alert(JSON.stringify(values))}} initialValues={{word: 'Otto',imageUrl: '',videoUrl: '',audioUrl: ''}}>
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
                                    <Form.Label>Palavra do Desafio</Form.Label>
                                    <Form.Control type="text" placeholder="Palavra do Desafio" name='word'
                                                            onChange={handleChange} 
                                                            value={values.word}
                                                            isValid={touched.word && !errors.word}
                                                            isInvalid={!!errors.word}
                                                            onBlur={handleBlur} />
                                    <Form.Control.Feedback ></Form.Control.Feedback>            
                                    <Form.Control.Feedback type='invalid'>{errors.word}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="">
                                    <Form.Label>Link da Imagem</Form.Label>
                                    <Form.Control type="Url" placeholder="Link da Imagem" name='imageUrl'
                                                                    onChange={handleChange} 
                                                                    value={values.imageUrl}
                                                                    isValid={touched.imageUrl && !errors.imageUrl}
                                                                    isInvalid={!!errors.imageUrl}
                                                                    onBlur={handleBlur} />
                                        <Form.Control.Feedback ></Form.Control.Feedback>            
                                        <Form.Control.Feedback type='invalid'>{errors.imageUrl}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="">
                                    <Form.Label>Link do Vídeo </Form.Label>
                                    <Form.Control type="Url" placeholder="Link do Vídeo" name='videoUrl'
                                                                            onChange={handleChange} 
                                                                            value={values.videoUrl}
                                                                            isValid={touched.videoUrl && !errors.videoUrl}
                                                                            isInvalid={!!errors.videoUrl}
                                                                            onBlur={handleBlur}  />
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
                                                                                onBlur={handleBlur}  />
                                    <Form.Control.Feedback ></Form.Control.Feedback>            
                                    <Form.Control.Feedback type='invalid'>{errors.audioUrl}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Contexto do desafio</Form.Label>
                                    <Form.Control as="select" name='context'>
                                        <option>Animais</option>
                                        <option>Frutas</option>
                                        <option>Tecnologia</option>
                                    </Form.Control>
                                    <Form.Control.Feedback ></Form.Control.Feedback>            
                                    <Form.Control.Feedback type='invalid'>{errors.context}</Form.Control.Feedback>
                                
                                </Form.Group>
                                <Button variant='primary' type='submit'>Cadastrar</Button>


                            </Form>

                        )}
        </Formik>
    )
}