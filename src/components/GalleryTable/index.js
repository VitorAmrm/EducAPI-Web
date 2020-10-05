import React,{useState,useEffect} from 'react'
import {Container} from 'react-bootstrap'
import {Tabs,Table,Popconfirm} from 'antd'
import api from '../../service/api'
import {BsFillTrashFill} from 'react-icons/bs'
import './style.css'
import 'antd/dist/antd.css';
import SessionNotExist from '../../utils/SessionNotExist'


const {TabPane} = Tabs



const TableGallery = () => {
    const [contexts,setContexts] = useState([])
    const [challenges,setChalleges] = useState([])
    const [show,setShow] = useState(false)

   

    useEffect(() => {

      if(sessionStorage.getItem('token') === null ){
  
        setShow(true)
        handleData()

      }else{
        setShow(false)
        handleData()
        }
      
    },[])




    function tratarAutor(creator){

        if(creator === null){return '-'}
        else{return creator.name}
    }

    function handleData(){
      api.get(`v1/api/contexts`).then(response => {setContexts(response.data.content)}).catch(error => alert('Não foi possivel carregar os contextos'))

      api.get(`v1/api/challenges`).then(response => {setChalleges(response.data.content)}).catch(error => alert('Não foi possivel carregar os desafios'))
    }
    function handleDeleteContext(record){
      const token = sessionStorage.getItem('token')
      api.delete(`/v1/api/auth/contexts/${record}`,{headers: {Authorization: `Bearer ${token}`}}).then(response => alert("Contexto excluido com sucesso")).catch("Erro ao excluir o contexto")
    }
    function handleDeleteChallenge(record){
      const token = sessionStorage.getItem('token')
      api.delete(`/v1/api/auth/contexts/${record}`,{headers: {Authorization: `Bearer ${token}`}}).then(response => alert("Contexto excluido com sucesso")).catch("Erro ao excluir o contexto")
    }
    
      
                
            
    
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
        render: creator => (<div className='actions'><p>{tratarAutor(creator)}</p></div>)
        },
        {
          title:'Ação',
          dataIndex:'actions',
          key:'actions',
          render: (text,record) =>(<Popconfirm title="Tem certeza que deseja deletar?" onConfirm={() => handleDeleteContext(record.id)}>
          <div className='actions'><BsFillTrashFill size='24px' className='icon'/><p>Deletar</p></div></Popconfirm>)
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
          render: creator => (<p>{tratarAutor(creator)}</p>)
        },
        {
          title:'Ação',
          dataIndex:'actions',
          key:'actions',
          render: (text,record) => (<Popconfirm title="Sure to delete?" onConfirm={() => handleDeleteChallenge(record.id)}>
          <div className='actions'><BsFillTrashFill size='24px' className='icon'/><p>Deletar</p></div></Popconfirm>)
        }
      ]
   
  
        

          return (
        
        <Container fluid className='background-table'>
                <SessionNotExist show={show} now={Date.now()}/>
                <Tabs defaultActiveKey="1" centered size='large'>
                    <TabPane tab="Contextos" key="1">
                        <div className='container-table'>
                                <Table bordered columns={columnsContexts} dataSource={contexts}  />
                        </div>
                    </TabPane>
                    <TabPane tab="Desafios" key="2">
                        <div className='container-table'>
                                <Table bordered columns={columnsChallenges} dataSource={challenges}  />
                        </div>
                    </TabPane>
                </Tabs>
        </Container>
        
);
    

}

export default TableGallery


