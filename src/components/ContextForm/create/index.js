import React,{useState,useEffect} from 'react'
import {Form,Button,InputGroup} from 'react-bootstrap'
import {Formik} from 'formik'
import {Contextschema} from '../../../utils/FormSchema'
import api from '../../../service/api'
import SessionNotExist from '../../../utils/SessionNotExist'
import {BsImage} from 'react-icons/bs'
import ImageShow from '../../ImageShow/index'



const ContextFormCreate = () => {

    const [show,setShow] = useState(1)
    const [showModal,setShowModal] = useState(false)
    


    useEffect(() =>{
        
        if(sessionStorage.getItem('token') !== null){ 
            setShow(false)
        }else{  setShow(true)} 
                    
                },[])
                
    function showImages(){
        setShowModal(true)
    }
    
    function modalClose(){setShowModal(false)}

    
    
 

    function onSubmit(values){
        const token = sessionStorage.getItem('token')

            api.post('/v1/api/auth/contexts',{imageUrl: values.imageUrl,name: values.name,soundUrl: values.soundUrl,videoUrl: values.videoUrl},{'Authorization': `Bearer ${token}`})
                    .then(response =>{alert(`O Contexto ${response.data.name} foi criado`)})
                    .catch(error => {alert('Ocorreu um erro, Tente Novamente');console.log(error)})

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
                                <SessionNotExist show={show} now={Date.now()}/>
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
                                <ImageShow  handleClose={() => modalClose()} handleURL={(value) => {values.imageUrl = value;modalClose()}}  show={showModal} query={values.name}/>
                                    <Form.Label>Link da Imagem</Form.Label>
                                    <InputGroup>
                                    <InputGroup.Append>
                                        <Button variant="secondary" onClick={() => {showImages()}}><BsImage size='16'/></Button>
                                    </InputGroup.Append>
                                    <Form.Control type='text' placeholder="Link da Imagem" name='imageUrl'
                                                                onChange={handleChange} 
                                                                value={values.imageUrl}
                                                                isValid={touched.imageUrl && !errors.imageUrl}
                                                                isInvalid={!!errors.imageUrl}
                                                                onBlur={handleBlur}/>

                                    <Form.Control.Feedback ></Form.Control.Feedback>            
                                    <Form.Control.Feedback type='invalid'>{errors.imageUrl}</Form.Control.Feedback>
                                    </InputGroup>
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

export default ContextFormCreate

