

import React from 'react';
import Routes from './routes'




export default function App(){
  
function showExpiration(){
        if(new Date().getHours*60+new Date().getMinutes === localStorage.getItem('token_exp') && !!localStorage.getItem('token_exp')){
                alert('Sessão expirada, faça o login novamente')
        }
}
        return(
                <div>
                        {showExpiration()}
                        <Routes />
                </div>
        )
    }
