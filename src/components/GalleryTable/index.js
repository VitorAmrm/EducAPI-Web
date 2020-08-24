import React from 'react'
import {Image} from 'react-bootstrap'
import {Tabs,Table} from 'antd'
//import GET from '../../service/api'
//import superagent from 'superagent'
import './style.css'
import 'antd/dist/antd.css';

const {TabPane} = Tabs

export default function ContextTable(){
    
/*
    function GET(){
        superagent
            .get('http://educapi-v2.herokuapp.com/contexts')
            .end((err, res) => {
                return res.body.json()
            });
    }
    
    function renderTableData(path){
        
        return path.map((context,index) =>{
            
            const {id,name,imageUrl} = context

            return(
                <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td></td>
                <td></td>
                </tr>
            );
        });

    }
    */
    const columns = [{
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
        
      },
      {
        title: 'Imagem',
        dataIndex: 'imageUrl',
        key: 'imageUrl',
        render: text => (<Image className='table-image' src={text}/>)
      }]

    const contexts = [

        {
        "id": 9,
        "name": "Tecnologia",
        "imageUrl": "https://cdn.pixabay.com/photo/2015/06/24/15/45/ipad-820272__340.jpg",
        },
        
        {
        "id": 10,
        "name": "Natureza",
        "imageUrl": "https://cdn.pixabay.com/photo/2018/11/17/22/15/tree-3822149__340.jpg"
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
        
        }]
    return (
        
        
                        <Tabs defaultActiveKey="1" centered size='large'>
                            <TabPane tab="Contextos" key="1">
                            <div className='container-table'>
                                    <Table bordered columns={columns} dataSource={contexts}  />
                            </div>
                            </TabPane>
                            <TabPane tab="Tab 2" key="2">
                            <div className='container-table'>
                                    <Table bordered columns={columns} dataSource={contexts}  />
                            </div>
                            </TabPane>
                        </Tabs>
        
    );

}





/*
<div className='container-table'>
                                    <Table responsive='sm' striped  hover >
                                        <thead>
                                            <tr>
                                            <th>ID</th>
                                            <th>Nome</th>
                                            <th>Imagem</th>
                                            <th>Ações</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {renderTableData(contexts)}
                                        </tbody>
                                    </Table>
                                </div>
                                */