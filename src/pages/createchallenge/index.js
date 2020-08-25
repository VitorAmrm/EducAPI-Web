import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import ChallengeForm from '../../components/ChallengeForm/index'
import './style.css'
import Footer from '../../components/Footer/index'

export default function CreateChallenge(){
    return (
        <div> 
            <Navigation/>
            <div className="createchallenge-box">
                <h2>Criando um Desafio</h2>
                <ChallengeForm />
            </div>
            <Footer/>
        </div>
    );
}