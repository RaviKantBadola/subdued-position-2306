import React from 'react'
import Navbar from '../Navbar'
import {Cart} from './Cart'
import Banner from './Carousel'
import {Box} from "@chakra-ui/react"
function LandingPage(){
  return (
   <>
    <Navbar/>
    <Cart/>
   <Box  style={{padding:"10px"}}>
   <Banner/>
   </Box>

   
   </>
    
 
  )
}

export default LandingPage
