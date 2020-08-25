import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/index'
import Body from '../../components/HomeBody/index'
export default function Home(){
    return(
        <div>
            <Navigation />
            <Body/>
            <Footer />
        </div>
    );
}