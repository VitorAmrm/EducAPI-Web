import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import ChallengeFormEdit from '../../components/ChallengeForm/edit/index'
import './style.css'
import Footer from '../../components/Footer/index'

export default function EditChallenge(){
    return (
        <div clasName='body'> 
            <Navigation/>
            <div className="createchallenge-box">
                <h2>Editando um Desafio</h2>
                <ChallengeFormEdit />
            </div>
            <div className='separator'>

            </div>
            <div className='footer-container'>
            <Footer/>
            </div>
        </div>
    );
}