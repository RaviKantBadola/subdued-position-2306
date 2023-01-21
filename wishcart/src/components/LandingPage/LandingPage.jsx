import React from 'react'
import Navbar from '../Navbar'
import {Cart} from './Cart'
import Banner from './Carousel'
import {Box} from "@chakra-ui/react"
import Cart1 from './Cart1'
import Cart2 from './Cart2'
import Cart4 from './Cart4'
import Cart5 from './Cart5'
import Cart6 from './Cart6'
import BeforeFooter from './BeforeFooter'
import Footer from './Footer'
function LandingPage(){
  return (
   <>
    <Navbar/>
    <Cart/>
   <Box  style={{padding:"10px"}}>
   <Banner/>
   </Box>
   <Cart1/>
   <Cart2/>
   <Cart4/>
   <Cart5/>
   <Cart6/>

   <BeforeFooter/>
   <Footer/>
   
   </>
    
 
  )
}

export default LandingPage
