import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import ChallengeFormCreate from '../../components/ChallengeForm/create/index'
import './style.css'
import '../../index.css'
import Footer from '../../components/Footer/index'

export default function CreateChallenge(){
    return (
        <div className='body'> 
            <Navigation/>
            <div className="createchallenge-box">
                <h2>Criando um Desafio</h2>
                <ChallengeFormCreate/>
            </div>
            <div className='separator'>

            </div>
            <div className='footer-container'>
            <Footer/>
            </div>
        </div>
    );
}