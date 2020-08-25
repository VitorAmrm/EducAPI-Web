import React from 'react'
import {AiFillCaretRight,AiFillCaretLeft} from 'react-icons/ai'
import './style.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



export default class CardScroll extends React.Component{
        
    

    render() {
            var settings = {
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


          return (
            <div className='container'>
                <Slider {...settings}>

                    <div className='card'>

                        <div className='container-image'>
                                    <img src='https://veekun.com/dex/media/pokemon/dream-world/648-aria.svg' alt=''/>
                                    <img className='blur' src='https://veekun.com/dex/media/pokemon/dream-world/648-aria.svg' alt=''/>
                                </div>
                                <div className='container-text'>
                                    <h2>Meloetta</h2>
                                    
                                </div>
                        </div>

                        <div className='card'>
                            <div className='container-image'>
                                <img src='https://veekun.com/dex/media/pokemon/dream-world/648-aria.svg' alt=''/>
                                <img className='blur' src='https://veekun.com/dex/media/pokemon/dream-world/648-aria.svg' alt=''/>
                            </div>
                            <div className='container-text'>
                                <h2>Meloetta</h2>
                                
                            </div>
                        </div>

                        <div className='card'   >
                            <div className='container-image'>
                                <img src='https://veekun.com/dex/media/pokemon/dream-world/457.svg' alt=''/>
                                <img className='blur' src='https://veekun.com/dex/media/pokemon/dream-world/457.svg' alt=''/>
                            </div>
                            <div className='container-text'>
                                <h2>Finneon</h2>
                                <p></p>
                            </div>
                        </div>

                        <div className='card'  >
                            <div className='container-image'>
                                <img src='https://veekun.com/dex/media/pokemon/dream-world/475.svg' alt=''/>
                                <img className='blur' src='https://veekun.com/dex/media/pokemon/dream-world/475.svg' alt=''/>
                            </div>
                            <div className='container-text'>
                                <h2>Gallade</h2>
                                <p></p>
                            </div>
                        </div>

                        <div className='card'  >
                            <div className='container-image'>
                                <img src='https://veekun.com/dex/media/pokemon/dream-world/461.svg' alt=''/>
                                <img className='blur' src='https://veekun.com/dex/media/pokemon/dream-world/461.svg' alt=''/>
                            </div>
                            <div className='container-text'>
                                <h2>Weavile</h2>
                                
                        </div>
                        </div>

                        <div className='card'>
                            <div className='container-image'>
                                <img src='https://veekun.com/dex/media/pokemon/dream-world/106.svg' alt=''/>
                                <img className='blur' src='https://veekun.com/dex/media/pokemon/dream-world/106.svg' alt=''/>
                            </div>
                            <div className='container-text'>
                                <h2>Hitmonlee</h2>
                                
                            </div>
                        
                        </div>
                        <div className='card'>
                            <div className='container-image'>
                                <img src='https://veekun.com/dex/media/pokemon/dream-world/239.svg' alt=''/>
                                <img className='blur' src='https://veekun.com/dex/media/pokemon/dream-world/239.svg' alt=''/>
                            </div>
                            <div className='container-text'>
                                <h2>Elekid</h2>
                                
                            </div>
                        
                        </div>

                </Slider>
            </div>
          );
            
}
}


/*
     <div className='content'>
                <button id='prev' className='btn'>
                    <i><AiFillCaretLeft/></i>
                </button>
                <div className='container-cards' ref={scroltainer}>
                    

                    <div className='card' >
                            <div className='container-image'>
                                <img src='https://veekun.com/dex/media/pokemon/dream-world/648-aria.svg' alt=''/>
                                <img className='blur' src='https://veekun.com/dex/media/pokemon/dream-world/648-aria.svg' alt=''/>
                            </div>
                            <div className='container-text'>
                                <h2>Meloetta</h2>
                                <p></p>
                            </div>
                </div>

                <div className='card'   >
                            <div className='container-image'>
                                <img src='https://veekun.com/dex/media/pokemon/dream-world/457.svg' alt=''/>
                                <img className='blur' src='https://veekun.com/dex/media/pokemon/dream-world/457.svg' alt=''/>
                            </div>
                            <div className='container-text'>
                                <h2>Finneon</h2>
                                <p></p>
                            </div>
                </div>

                <div className='card'  >
                            <div className='container-image'>
                                <img src='https://veekun.com/dex/media/pokemon/dream-world/475.svg' alt=''/>
                                <img className='blur' src='https://veekun.com/dex/media/pokemon/dream-world/475.svg' alt=''/>
                            </div>
                            <div className='container-text'>
                                <h2>Gallade</h2>
                                <p></p>
                            </div>
                </div>

                <div className='card'  >
                            <div className='container-image'>
                                <img src='https://veekun.com/dex/media/pokemon/dream-world/461.svg' alt=''/>
                                <img className='blur' src='https://veekun.com/dex/media/pokemon/dream-world/461.svg' alt=''/>
                            </div>
                            <div className='container-text'>
                                <h2>Weavile</h2>
                                <p>weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeevile veldamkdasknkanfandknajdnsjdnjasndjasndjanjsdn</p>
                            </div>
                </div>

                </div> 

                <button id='next' className='btn' onClick={}>
                    <i><AiFillCaretRight/></i>
                </button>
            </div>
*/ 