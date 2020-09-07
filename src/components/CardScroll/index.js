import React from 'react'
import './style.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



export default class CardScroll extends React.Component{
        
        
        renderCards(){

            const contexts = [
{"id":9,"name":"Tecnologia","imageUrl":"https://cdn.pixabay.com/photo/2015/06/24/15/45/ipad-820272__340.jpg","soundUrl":null,"videoUrl":null,"creator":null},
{"id":10,"name":"Natureza","imageUrl":"https://cdn.pixabay.com/photo/2018/11/17/22/15/tree-3822149__340.jpg","soundUrl":null,"videoUrl":null,"creator":null},
{"id":11,"name":"Esportes","imageUrl":"https://cdn.pixabay.com/photo/2017/08/24/21/41/tartan-track-2678544__340.jpg","soundUrl":null,"videoUrl":null,"creator":null},
{"id":18,"name":"Construção","imageUrl":"https://c3clube.com.br/wp-content/uploads/2020/03/calculo-do-IRPJ-no-Lucro-Presumido.jpg","soundUrl":null,"videoUrl":null,"creator":null},
{"id":16,"name":"Sistema Solar","imageUrl":"https://image.freepik.com/vetores-gratis/esquema-classico-do-sistema-solar-com-design-plano_23-2147925157.jpg","soundUrl":null,"videoUrl":null,"creator":null}
]
            const challenges = [
{"id":60,"word":"Celular","creator":{"id":6,"name":"Chico","email":"chico@gmail.com"},"soundUrl":null,"videoUrl":null,"imageUrl":"https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770__340.png"},
{"id":137,"word":"natal","creator":{"id":49,"name":"ayla","email":"ayla@dcx.ufpb.br"},"soundUrl":null,"videoUrl":null,"imageUrl":"https://i.vimeocdn.com/video/578323017_640x360.jpg"},
{"id":65,"word":"Tênis","creator":{"id":1,"name":"Marcos Ludgério","email":"marcos@ludgerio.com"},"soundUrl":null,"videoUrl":null,"imageUrl":"https://cdn.pixabay.com/photo/2016/09/15/15/27/tennis-court-1671852_960_720.jpg"},
{"id":83,"word":"zebra","creator":{"id":1,"name":"Marcos Ludgério","email":"marcos@ludgerio.com"},"soundUrl":null,"videoUrl":null,"imageUrl":"https://www.recreio.com.br/images/large/2019/12/18/zebra-capa-1204543.jpeg"},
{"id":67,"word":"Basquete","creator":{"id":1,"name":"Marcos Ludgério","email":"marcos@ludgerio.com"},"soundUrl":null,"videoUrl":null,"imageUrl":"https://content.betsul.com/media/medium/basquete-betsul-brasileiros-nbalat.jpg"},
{"id":100,"word":"saturno","creator":{"id":1,"name":"Marcos Ludgério","email":"marcos@ludgerio.com"},"soundUrl":null,"videoUrl":null,"imageUrl":"https://cdn.pixabay.com/photo/2012/11/28/10/54/saturn-67671_960_720.jpg"},
{"id":71,"word":"natação","creator":{"id":1,"name":"Marcos Ludgério","email":"marcos@ludgerio.com"},"soundUrl":null,"videoUrl":null,"imageUrl":"https://portalbr.akamaized.net/brasil/uploads/2015/10/Tipos-de-nadador.jpg"},
{"id":111,"word":"garçom","creator":{"id":1,"name":"Marcos Ludgério","email":"marcos@ludgerio.com"},"soundUrl":null,"videoUrl":null,"imageUrl":"https://http2.mlstatic.com/aventais-de-cintura-restaurante-chef-garcon-bares-kit-20-D_NQ_NP_641243-MLB31175621091_062019-F.jpg"},
{"id":106,"word":"árvores","creator":{"id":1,"name":"Marcos Ludgério","email":"marcos@ludgerio.com"},"soundUrl":null,"videoUrl":null,"imageUrl":"https://i1.wp.com/radardofuturo.com.br/wp-content/uploads/2019/09/Dia-Mundial-da-%C3%81rvore.jpg?resize=696%2C464&ssl=1"}
]
            
            if(this.props.variant === 'challenges'){
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
            else{
                return contexts.map((challenge,index) =>{
                    
                    const {name,imageUrl} = challenge
                    return(
                        <div className='card'>
                        <div className='container-image'>
                                    <img src={imageUrl} alt=''/>
                                    <img className='blur' src={imageUrl} alt=''/>
                                </div>
                                <div className='container-text'>
                                    <h2>{name}</h2>
                                </div>
                        </div>
                        )        
                }
                )
            }
        
    }
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
                {this.renderCards()}
            </Slider>
        </div>
      );
        




    
      }
 }
    






/*
    
 
    

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
                    {this.renderCards()}
                </Slider>
            </div>
          );
            
}
}



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
   
*/ 