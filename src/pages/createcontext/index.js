import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import ContextFormCreate from '../../components/ContextForm/create/index'
import Footer from '../../components/Footer/index'
import './style.css'
import '../../index.css'

export default function CreateContext(){
    return (
        <div className='body'> 
            <Navigation/>
            <div className="createcontext-box">
                <h2>Criando um Contexto</h2>
                <ContextFormCreate />
            </div>
            <div className='separator'>

            </div>
            <div className='footer-container'>
            <Footer/>
            </div>
        </div>
    );
}