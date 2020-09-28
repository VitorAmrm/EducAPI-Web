import React,{useEffect,useState} from 'react'
import './style.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import api from '../../service/api'



 const CardScroll = (props) =>{
    const [challenges,setChallenges] = useState([])
    const [contexts,setContexts] = useState([])

     const  settings = {
         dots: false,
         infinite: true,
         speed: 500,
         slidesToShow:4,
         slidesToScroll: 1,
         responsive: [
             {
               breakpoint: 1024,
               settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 infinite: true,
                 dots: true
               }
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2,
                 initialSlide: 2
               }
             },
             {
               breakpoint: 480,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
               }
             }
           ]
       };
    
    useEffect(() => {
        
        if(props.variant === 'contexts'){
          api.get(`/v1/api/contexts`).then(response => {setContexts(response.data.content)}).catch(error => {})
        }else{
            api.get('/v1/api/challenges').then(response => {setChallenges(response.data.content)}).catch(error => {})
        }
    },[props.variant] )

    function renderCards(){
        if(props.variant === 'challenges'){
             return challenges.map((challenge,index) =>{
                
                const {word,imageUrl} = challenge
                return(
                    <div className='card'>
                    <div className='container-image'>
                                <img src={imageUrl} alt=''/>
                                <img className='blur' src={imageUrl} alt=''/>
                            </div>
                            <div className='container-text'>
                                <h2>{word}</h2>
                            </div>
                    </div>
            )
         })
        }
        else{return contexts.map((context,index) =>{
                
            const {name,imageUrl} = context
            return(
                <div className='card'>
                <div className='container-image'>
                            <img src={imageUrl} alt=''/>
                            
                        </div>
                        <div className='container-text'>
                            <h2>{name}</h2>
                        </div>
                </div>
                )        
        })}}

        return (
            <div className='container'>
                <Slider {...settings}>
                      {renderCards()}
                </Slider>
            </div>
          );
        }

export default CardScroll