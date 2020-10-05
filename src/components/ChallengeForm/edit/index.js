import React,{useState,useEffect} from 'react'
import {Form,Button,InputGroup} from 'react-bootstrap'
import {Formik} from 'formik'
import {EditChallengeschema} from '../../../utils/FormSchema'
import SessionNotExist from '../../../utils/SessionNotExist'
import api from '../../../service/api'
import {BsImage} from 'react-icons/bs'
import ImageShow from '../../ImageShow/index'

 const ChallengeFormEdit = () => {
    const [show,setShow] = useState(1)
    const [showModal,setShowModal] = useState(false)
    const [challenges,setChallenges] = useState([])
    


    useEffect(() =>{
        
        if(sessionStorage.getItem('token') !== null){ 
            setShow(false)
            handleChallenges()
        }else{  setShow(true)} 
                    
                },[])

    
    function makeOptionsforChallenges(){
        return challenges.map((challenge,index) =>{
            const {id,word} = challenge
            return <option value={id}>{word}</option>
        })
    }

    function showImages(){
        setShowModal(true)
    }
    
    function modalClose(){setShowModal(false)}



    
    function handleChallenges(){
        const token = sessionStorage.getItem('token')
        api.get('v1/api/auth/challenges',{headers: {Authorization: `Bearer ${token}`}})
            .then(response => {setChallenges(response.data)})
            .catch(error => alert(error))
    }


    function putChallenge(values){
        const token = sessionStorage.getItem('token')
        api.put(`v1/api/auth/challenges/${values.challenge}`,{word: values.word,imageUrl: values.imageUrl,videoUrl: values.videoUrl, soundUrl: values.soundUrl},{headers: {Authorization: `Bearer ${token}`}})
                    .then(response => {alert(` O deasfio ${response.data.word} foi alterado com sucesso`)})
                    .catch (error => {alert(`Ocorreu um erro, Tente novamente`)})

    }

    return(

        <Formik validationSchema={EditChallengeschema} onSubmit={values =>{putChallenge(values)}} initialValues={{challenge: 0,word: '',imageUrl: '',videoUrl: '',soundUrl: ''}}>
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
                                <Form.Group>
                                    <Form.Label>Selecione o desafio a ser editado</Form.Label>
                                    <Form.Control as="select" name='context' onChange={handleChange} isInvalid={!!errors.challenge} value={values.challenge}>

                                        {makeOptionsforChallenges()}    
                                        
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