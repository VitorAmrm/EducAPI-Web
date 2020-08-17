import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import ContextForm from '../../components/ContextForm/index'
import './style.css'

export default function CreateContext(){
    return (
        <div> 
            <Navigation/>
            <div className="createcontext-box">
                <h2>Criando um Contexto</h2>
                <ContextForm />
            </div>
        </div>
    );
}