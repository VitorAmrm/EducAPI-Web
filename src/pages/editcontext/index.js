import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import ContextFormEdit from '../../components/ContextForm/edit/index'
import './style.css'
import Footer from '../../components/Footer/index'

export default function EditContext(){
    return (
        <div> 
            <Navigation/>
            <div className="createcontext-box">
                <h2>Editando um Contexto</h2>
                <ContextFormEdit />
            </div>
            <Footer/>
        </div>
    );
}