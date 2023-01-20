import React from 'react'
import Navbar from '../Navbar'
import {Cart} from './Cart'
import Banner from './Carousel'
import {Box} from "@chakra-ui/react"
import Cart1 from './Cart1'
import Cart2 from './Cart2'
import Cart4 from './Cart4'
import Cart5 from './Cart5'
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
   </>
    
 
  )
}

export default LandingPage
