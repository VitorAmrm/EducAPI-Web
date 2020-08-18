import React from 'react'
import RegisterForm from '../../components/RegisterForm/index'
import {Image} from 'react-bootstrap'
import './style.css'
import image from '../../assets/logotipofinal_prancheta2.png'



export default function RegisterPage(){
    return (
        <div className="container-register">
            <div className='form-box'>
                <div className="image-box">
                    <Image src={image} fluid/>
                </div>
                <RegisterForm />
            </div>
        </div> 
    );
}
