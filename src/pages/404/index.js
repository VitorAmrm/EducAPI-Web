import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import {Button} from 'react-bootstrap'


const erro404 = () => {
     
    return (
        <div className='container-404'>
                <div className='number-404'><h1>404</h1></div>
                <div className='text-404'><h3>Pagina não encontrada</h3></div>
                <div className='returntohome'><Link to='/'><Button variant='info' block>Inicio</Button></Link></div>
        </div>
    )
}

export default erro404;