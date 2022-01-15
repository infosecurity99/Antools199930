import React from 'react'
import Carusel from '../Componenta/Carusel/Carusel'
import Contirubut from '../Componenta/Contiribut/Contirubut'
import Footer from '../Componenta/Footer/Footer'
import NewComer from '../Componenta/NewComer/NewComer'
import Popular from '../Componenta/Newsleter/Popular'
import  Navbar from '../Componenta/Section/Navbar'
import {Container } from './style'
const App = () => {
    return (
      <Container>
               <Navbar/>
               <Popular/>
               <NewComer/>
               <Carusel/>
               <Contirubut/>
               <Footer/>
      </Container>
    )
}

export default App
