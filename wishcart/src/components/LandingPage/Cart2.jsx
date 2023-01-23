import Carousel from "react-multi-carousel";
import axios from "axios"

import { Box,Flex,Text } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import {useState,useEffect} from "react"
import React from 'react'
import { NavLink } from "react-router-dom";
import { WrapItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
const responsive = {
  
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Cart2 = () => {
const [data,setData]=useState([])

useEffect(()=>{
    axios.get("https://different-bell-bottoms-fox.cyclic.app/wishcart").then(res=>{
     const data = res.data
     console.log(data)
     setData(data)
    })
},[])
  return (
    <>
    <Box display={"flex"}  mt="20px" boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} p='1'  width={"100%"}  style={{marginLeft:"auto",marginRight:"auto",marginTop:"10px"}} backgroundColor={"white"} >

    <Box width={"15%"} paddingTop={"65px"} style={{marginLeft:"auto",marginRight:"auto"}}>
                <Text paddingTop={{base:"120px", md:"120px", lg:"70px"}} fontSize={{ base: '10px', md: '20px', lg: '30px' }}> Fashion Top Deals</Text>

                <WrapItem mt="20px"> 
                    <Button  fontSize={{ base: '6px', md: '9px', lg: '12px' }} m={"auto"} colorScheme='messenger'>
                        <NavLink to='./products/fashion'>VIEW ALL </NavLink>
                    </Button>
                </WrapItem>
                <img  pt="15px" src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/31d46a8fd93eeedd.jpg?q=90" alt="fg" />

            </Box>




     {/* caroual start */}
     <Box  w={{ base: '60%', md: '55%', lg: '70%' }} width="200px" height={"350px"} >
       <Carousel responsive={responsive} 
         swipeable={false}
       draggable={false}
       infinite={true}
       autoPlay={true}
       keyBoardControl={true}
       slidesToSlide={1}
       dotListClass="custom-dot-list-style"
       itemClass="carousel-item-padding-40-px"
       containerClass="carousel-container"
         >
       {
         data.filter(item=>item.category_name==="fashion").map(item=>(
          <NavLink to={`/products/${item.item_id}`} key={Date.now()+item.item_id+Math.random()}>
            <Box  m="5px" alignItems="center" textAlign={"center"} width="200px" backgroundColor={"white"}  >
          
                        <img width={"140px"} height="150px" src={item.image} alt="" style={{marginLeft:"auto",marginRight:"auto"}} />
                        <Text fontWeight="500" fontSize={{base:"13px", md:"12px", lg:"14px"}}> {item.description}</Text>
                       <Flex textAlign={"center"} justifyContent={'space-around'} w="50%" m="auto">
                         <Text fontSize={"15px"} fontWeight={"600"} >   ₹ {item.new_price}</Text>
                         <Text  fontSize={"12px"}><del> ₹ {item.old_price}</del></Text>
                       </Flex>
                        <Text fontWeight={"medium"} mt="8px" fontSize={{base:"13px", md:"14px", lg:"15px"}} color={"green"}>Max {item.discount} % Off</Text>
                    </Box>
                    </NavLink>
         ))
       }
     </Carousel> 
         </Box>
       {/* carousel end  */}
    


   <Box  width={"15%"}  style={{marginLeft:"2000",marginRight:"auto"}}>
    <img src="https://rukminim1.flixcart.com/fk-p-flap/464/708/image/fca25d421602bfb1.jpeg?q=70"  alt="ad" style={{width:217}}/>
   </Box>






       </Box>
    </>
   
  )
}

export default Cart2
