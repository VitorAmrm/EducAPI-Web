import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/index'
import Table from '../../components/GalleryTable/index'


export default function Gallery(){
    return(
        <div>
            <Navigation/>
            <Table/>
            <Footer/>
        </div>
    );
}