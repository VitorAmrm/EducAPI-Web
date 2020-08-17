import React from 'react'
import LoginForm from '../../components/LoginForm/index'
import {Image} from 'react-bootstrap'
import './style.css'
import image from '../../assets/logotipofinal_prancheta2.png'



export default function LoginPage(){
    return (
        <div className="container-login">
            <div className='form-box'>
                <div className="image-box">
                    <Image src={image} fluid/>
                </div>
                <LoginForm />
            </div>
        </div> 
    );
}
