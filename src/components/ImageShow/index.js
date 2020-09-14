import React, { useEffect, useState } from 'react'
import {Modal,ModalBody,ModalFooter,Container,ModalTitle,Button} from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'
import GoogleImages from 'google-images'
import './style.css'


export default function ImageShow (props) {
    


    const [images,setImages] = useState([])
    const [show,setShow] = useState(props.show)
    const [nullquery,setNullQuery ]= useState('') 
    
    
    useEffect(() =>{
        setShow(props.show)
        if(props.query === ''){
            setNullQuery('Você precisa digitar o nome do contexto ou a palavra do desafio primeiro')
        }
        else{
        const client = new GoogleImages(process.env.REACT_APP_CX,process.env.REACT_APP_API_KEY)
        
        const imagesSearch = client.search(props.query)

        imagesSearch.then(images => {setImages(images)}).catch(error => console.log(error))
        }
        
    },[props.query,props.show])

   

    function renderizar(){
        return images.map((img,index) => {return <img onClick={() => {props.handleURL(img.url)}} className='result-image' alt={img.description} width="200" height="100" src={img.url}></img>})

    }
    
    
   

    return(
    <Modal show={show} centered size='lg' onHide={()=>{props.handleClose()}}> 
       
        <ModalHeader><ModalTitle>Escolha Uma Imagem</ModalTitle></ModalHeader>
        <ModalBody><Container>
                {props.query !== '' ? renderizar(): nullquery}
            </Container></ModalBody>
        <ModalFooter> <Button variant="secondary" onClick={()=>{props.handleClose()}}>
            Cancelar
          </Button>
           </ModalFooter>
    </Modal>
    )
}

