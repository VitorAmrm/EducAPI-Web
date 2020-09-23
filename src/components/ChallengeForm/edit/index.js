import React,{useState,useEffect} from 'react'
import {Form,Button,InputGroup} from 'react-bootstrap'
import {Formik} from 'formik'
import {Challengeschema} from '../../../utils/FormSchema'
import SessionNotExist from '../../../utils/SessionNotExist'
import api from '../../../service/api'
import {BsImage} from 'react-icons/bs'
import ImageShow from '../../ImageShow/index'

 const ChallengeFormEdit = () => {

    const [contexts,setContexts] = useState(0)
    const [show,setShow] = useState(1)
    const [showModal,setShowModal] = useState(false)


    useEffect(() =>{
        
        if(localStorage.getItem('token') !== null){ 
            setShow(false)
            handleContexts()
        }else{  setShow(true)} 
                    
                },[])

    function makeOptions(){
        
        return contexts.map((context,index) =>{
            const {id,name} = context
            return <option value={id}>{name}</option>
        })
    }

    function showImages(){
        setShowModal(true)
    }
    
    function modalClose(){setShowModal(false)}



    function handleContexts(){
        const token = localStorage.getItem('token')
        
            api.get('v1/api/auth/contexts',{Authorization: token})
            .then(response => {setContexts(response.data); alert(JSON.stringify(response.data))})
            .catch(error => alert(error))
        

    }

    function putChallenge(values){
        const token = localStorage.getItem('token')
        api.put(`v1/api/auth/challenges/${values.context}`,{word: values.word,imageUrl: values.imageUrl,videoUrl: values.videoUrl, soundUrl: values.soundUrl},{Authorization: token})
                    .then(response => {alert(` O deasfio ${response.data.word} foi alterado com sucesso`)})
                    .catch (error => {alert(`Ocorreu um erro, Tente novamente :: ${error} `)})

    }

    return(

        <Formik validationSchema={Challengeschema} onSubmit={values =>{putChallenge(values)}} initialValues={{context: 0 ,word: '',imageUrl: '',videoUrl: '',soundUrl: ''}}>
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
                                 <Form.Group>
                                    <Form.Label>Contexto do desafio</Form.Label>
                                    <Form.Control as="select" name='context' onChange={handleChange} isInvalid={!!errors.context} value={values.context}>
                                        
                                            <option>gggggg</option>
                                            <option>ghhhhhh</option>
                                            <option>jjjjjjj</option>
                                        
                                    </Form.Control>
                                    <Form.Control.Feedback ></Form.Control.Feedback>            
                                    <Form.Control.Feedback type='invalid'>{errors.context}</Form.Control.Feedback>
                                
                                </Form.Group>
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
                                <ImageShow  handleClose={() => modalClose()} handleURL={(value) => {values.imageUrl = value;modalClose()}}  show={showModal} query={values.word}/>
                                    <Form.Label>Link da Imagem</Form.Label>
                                    <InputGroup>
                                    <InputGroup.Append>
                                    <Button variant="secondary" onClick={() => {showImages()}}><BsImage size='16'/></Button>
                                    </InputGroup.Append>
                                    
                                    <Form.Control  placeholder="Link da Imagem" name='imageUrl'
                                                                    onChange={handleChange} 
                                                                    value={values.imageUrl}
                                                                    isValid={touched.imageUrl && !errors.imageUrl}
                                                                    isInvalid={!!errors.imageUrl}
                                                                    onBlur={handleBlur} />
                                        <Form.Control.Feedback ></Form.Control.Feedback>            
                                        <Form.Control.Feedback type='invalid'>{errors.imageUrl}</Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group controlId="">
                                    <Form.Label>Link do Vídeo </Form.Label>
                                    <Form.Control  placeholder="Link do Vídeo" name='videoUrl'
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
                                    <Form.Control  placeholder="Link do Áudio" name='soundUrl'
                                                                                onChange={handleChange} 
                                                                                value={values.soundUrl}
                                                                                isValid={touched.soundUrl && !errors.soundUrl}
                                                                                isInvalid={!!errors.soundUrl}
                                                                                onBlur={handleBlur}  />
                                    <Form.Control.Feedback ></Form.Control.Feedback>            
                                    <Form.Control.Feedback type='invalid'>{errors.soundUrl}</Form.Control.Feedback>
                                </Form.Group>

                               
                                <Button variant='primary' type='submit'>Cadastrar</Button>


                            </Form>

                        )}
        </Formik>
    )
}

export default ChallengeFormEdit



/*



<Form.Group controlId="">
                                    
                                    <Form.Label>Link da Imagem</Form.Label>
                                    <InputGroup>
                                    <InputGroup.Append>
                                        
                                    </InputGroup.Append>
                                    
                                    <Form.Control  placeholder="Link da Imagem" name='imageUrl'
                                                                    onChange={handleChange} 
                                                                    value={values.imageUrl}
                                                                    isValid={touched.imageUrl && !errors.imageUrl}
                                                                    isInvalid={!!errors.imageUrl}
                                                                    onBlur={handleBlur} />
                                        <Form.Control.Feedback ></Form.Control.Feedback>            
                                        <Form.Control.Feedback type='invalid'>{errors.imageUrl}</Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

*/