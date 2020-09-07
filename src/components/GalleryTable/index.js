import React from 'react'
import {Container} from 'react-bootstrap'
import {Tabs,Table} from 'antd'
import api from '../../service/api'
import {BsFillTrashFill} from 'react-icons/bs'
import './style.css'
import 'antd/dist/antd.css';
import SessionNotExist from '../../utils/SessionNotExist'

const {TabPane} = Tabs



export default class TableGallery extends React.Component{
    

    tratarAutor(creator){

        if(creator === null){return 'Autor Fantasma'}
        else{return creator.name}
    }
  
    async componentDidMount(){
      
      if(!localStorage.getItem('token')){
        this.setState({show: true})
      }else{
        this.setState({show: false})
      const token = localStorage.getItem('token')
      
      await api.get('v1/api/auth/contexts',{headers: {'Authorization': token}}).then(response => {this.setState({contexts: response.data})})

      await api.get('v1/api/auth/challenges',{headers: {'Authorization': token}}).then(response => {this.setState({challenges: response.data})})
    }
    }

    handleDelete(record){
        
    }

    constructor(){
        super()
        this.state = { contexts: [],
                       challenges: [],
                       show: false,
                    }
    }


    render(){
        var columnsContexts = [{
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: text => <div className='actions'><p>{text}</p></div>
          },
          {
            title: 'Nome',
            dataIndex: 'name',
            key: 'name',
            render: text => <div className='actions'><p>{text}</p></div>
            
          },
          {
            title: 'Imagem',
            dataIndex: 'imageUrl',
            key: 'imageUrl',
            render: text => (<div className='actions'><img className='table-image' alt ={text} src={text}/></div>)
          },
          {
          title: 'Autor',
          dataIndex: 'creator',
          key: 'creator',
          render: creator => (<div className='actions'><p>{this.tratarAutor(creator)}</p></div>)
          },
          {
            title:'Ação',
            dataIndex:'actions',
            key:'actions',
            render: text =>(<div className='actions'><BsFillTrashFill size='24px' className='icon'/><p>Deletar</p></div>)
          }
        ]
        var columnsChallenges = [{
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: text => (<p>{text}</p>)
          },
          {
            title: 'Palavra',
            dataIndex: 'word',
            key: 'word',
            render: text => (<p>{text}</p>)
            
          },
          {
            title: 'Imagem',
            dataIndex: 'imageUrl',
            key: 'imageUrl',
            render: text => (<div className='actions'><img className='table-image' alt={text} src={text}/></div>)
          },
          {
            title: 'Autor',
            dataIndex: 'creator',
            key: 'creator',
            render: creator => (<p>{this.tratarAutor(creator)}</p>)
          },
          {
            title:'Ação',
            dataIndex:'actions',
            key:'actions',
            render: (text,record) => <button onClick={() => this.handleDelete(record)}>Delete</button>
          }
        ]

          return (
        
        <Container fluid className='background-table'>
                <SessionNotExist show={this.state.show}/>
                <Tabs defaultActiveKey="1" centered size='large'>
                    <TabPane tab="Contextos" key="1">
                        <div className='container-table'>
                                <Table bordered columns={columnsContexts} dataSource={this.state.contexts}  />
                        </div>
                    </TabPane>
                    <TabPane tab="Desafios" key="2">
                        <div className='container-table'>
                                <Table bordered columns={columnsChallenges} dataSource={this.state.challenges}  />
                        </div>
                    </TabPane>
                </Tabs>
        </Container>

);
        }

    

    
    

}




/*(text,record) =>(<div className='actions'><a onClick={this.handleDelete(record)}><BsFillTrashFill size='24px' className='icon' /></a><p>Deletar</p></div>)*/