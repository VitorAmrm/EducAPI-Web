import React from 'react'
import {Table,Image} from 'react-bootstrap'
import GET from '../../service/api'
import './style.css'

export default function ContextTable(){
    
    
    
    function renderTableData(){
        
        return GET().map((context,index) =>{
            
            const {id,name,imageUrl} = context

            return(
                <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td><Image className='table-image' src={imageUrl}/></td>
                <td></td>
                </tr>
            );
        });

    }

    const contexts = [

        {
        "id": 9,
        "name": "Tecnologia",
        "imageUrl": "https://cdn.pixabay.com/photo/2015/06/24/15/45/ipad-820272__340.jpg",
        
        "soundUrl": null,
        
        "videoUrl": null,
        
        "creator": null
        },
        
        {
        "id": 10,
        "name": "Natureza",
        "imageUrl": "https://cdn.pixabay.com/photo/2018/11/17/22/15/tree-3822149__340.jpg",
        
        "soundUrl": null,
        
        "videoUrl": null,
        
        "creator": null
        },
        
        {
        "id": 11,
        "name": "Esportes",
        "imageUrl": "https://cdn.pixabay.com/photo/2017/08/24/21/41/tartan-track-2678544__340.jpg",
        
        "soundUrl": null,
        
        "videoUrl": null,
        
        "creator": null
        },
        
        {
        "id": 18,
        "name": "Construção",
        "imageUrl": "https://c3clube.com.br/wp-content/uploads/2020/03/calculo-do-IRPJ-no-Lucro-Presumido.jpg",
        
        "soundUrl": null,
        
        "videoUrl": null,
        
        "creator": null
        },
        
        {
        "id": 16,
        "name": "Sistema Solar",
        "imageUrl": "https://image.freepik.com/vetores-gratis/esquema-classico-do-sistema-solar-com-design-plano_23-2147925157.jpg",
        
        "soundUrl": null,
        
        "videoUrl": null,
        
        "creator": null
        },
        
        {
        "id": 19,
        "name": "Restaurante",
        "imageUrl": "https://etacanadavisa.com.br/main/wp-content/uploads/2018/07/image11.jpg",
        
        "soundUrl": null,
        
        "videoUrl": null,
        
        "creator": null
        },
        
        {
        "id": 22,
        "name": "trânsito",
        "imageUrl": "https://cdn.pixabay.com/photo/2020/04/05/17/57/traffic-5007115_640.jpg",
        
        "soundUrl": null,
        
        "videoUrl": null,
        
        "creator": null
        },
        
        {
        "id": 23,
        "name": "calçados",
        "imageUrl": "https://cdn.pixabay.com/photo/2016/03/03/16/42/shoe-1234548_640.jpg",
        
        "soundUrl": null,
        
        "videoUrl": null,
        
        "creator": null
        },
        
        {
        "id": 25,
        "name": "Cozinha",
        "imageUrl": "https://cdn.pixabay.com/photo/2017/10/20/14/45/kitchen-2871400__340.jpg",
        
        "soundUrl": null,
        
        "videoUrl": null,
        
        "creator": null
        },
        
        {
        "id": 30,
        "name": "Atualizando pra ver se funciona",
        "imageUrl": "https://www.youbilingue.com.br/blog/wp-content/uploads/2019/06/capa-blog-diferenciar-escola-min.png",
        
        "soundUrl": null,
        
        "videoUrl": null,
        
        "creator": null
        },
        
        {
        "id": 31,
        "name": "Formas",
        "imageUrl": "https://cdn.pixabay.com/photo/2017/07/01/19/48/background-2462431__340.jpg",
        
        "soundUrl": null,
        
        "videoUrl": null,
        
        "creator": null
        },
        
        {
        "id": 32,
        "name": "peixes",
        "imageUrl": "https://cdn.pixabay.com/photo/2018/10/17/20/47/fish-3754939__340.jpg",
        
        "soundUrl": null,
        
        "videoUrl": null,
        
        "creator": null
        },
        
        {
        "id": 33,
        "name": "festa",
        "imageUrl": "https://cdn.pixabay.com/photo/2016/07/16/02/34/festa-junina-1520909__340.jpg",
        
        "soundUrl": null,
        
        "videoUrl": null,
        
        "creator": null
        },
        
        {
        "id": 17,
        "name": "Animais",
        "imageUrl": "https://static.vecteezy.com/system/resources/previews/000/485/013/non_2x/animals-head-vector-design.jpg",
        
        "soundUrl": null,
        
        "videoUrl": null,
        
        "creator": null
        },
        
        {
        "id": 34,
        "name": "teste",
        "imageUrl": "https://cdn.pixabay.com/photo/2016/11/21/18/00/bricks-1846866__340.jpg",
        
        "soundUrl": null,
        
        "videoUrl": null,
        
        "creator": null
        }]
    return (
        <Table striped bordered hover responsive size="sm">
                
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                
                <tbody>
                    {renderTableData()}
                </tbody>
            </Table>
    );

}