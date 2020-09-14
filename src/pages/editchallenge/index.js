import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import ChallengeFormEdit from '../../components/ChallengeForm/edit/index'
import './style.css'
import Footer from '../../components/Footer/index'

export default function CreateChallenge(){
    return (
        <div> 
            <Navigation/>
            <div className="createchallenge-box">
                <h2>Criando um Desafio</h2>
                <ChallengeFormEdit />
            </div>
            <Footer/>
        </div>
    );
}