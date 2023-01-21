import Carousel from "react-multi-carousel";
import axios from "axios"
import { Box,Text } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import {useState,useEffect} from "react"
import React from 'react'
import { NavLink } from "react-router-dom";
import { WrapItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
const responsive = {
  
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
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
const Cart5 = () => {
const [data,setData]=useState([])

useEffect(()=>{
    axios.get("https://different-bell-bottoms-fox.cyclic.app/men").then(res=>{
     const data = res.data
     console.log(data)
     setData(data)
    })
},[])
  return (
    <>
    <Box display={"flex"}  mt="20px" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" p='1'  width={"100%"}  margin={"auto"} >

    <Box width={"15%"} marginTop={"10px"} marginLeft={"40px"}>
                <Text paddingTop={{base:"120px", md:"120px", lg:"70px"}} fontSize={{ base: '10px', md: '20px', lg: '30px' }}> Fashion Top Deals</Text>

                <WrapItem mt="20px"> 
                    <Button  fontSize={{ base: '6px', md: '9px', lg: '12px' }} m={"auto"} colorScheme='messenger'>
                        <NavLink to='./products/fashion'>VIEW ALL </NavLink>
                    </Button>
                </WrapItem>
                <img  pt="15px" src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzY291bnR8ZW58MHx8MHx8&w=1000&q=80" alt="fg" />

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
         data.map(item=>(
          
          
      <Box key={item.imageUrl[0]}  m="5px" alignItems="center" textAlign={"center"} >
        <Box height={"270px"} width={"270px"} overflow="hidden" paddingTop={"20px"} style={{marginLeft:"auto",marginRight:"auto"}} >
        <img width={"100%"} src={item.imageUrl[0]} alt="" />
        </Box>
         
          <Text fontWeight="600" p="5px" fontSize={{base:"13px", md:"12px", lg:"14px"}}> {item.Title}</Text>
          <Text  mt="8px" fontSize={{base:"13px", md:"14px", lg:"15px"}} color={"green"}>20 - {item.price.Discount} % Off</Text>
          <Text fontSize={"13px"} color="silver"> {item.Brand}</Text>
      </Box>
        
         ))
       }
     </Carousel> 
         </Box>
       {/* carousel end  */}

       <Box display={{base:'none' , md:'block' , lg:'block'}} w={{base:'0px', md:'30%', lg:"20%"}} width={"15%"} >
    <img src="https://rukminim1.flixcart.com/fk-p-flap/464/708/image/74eaeafbf1a19432.jpeg?q=70"  alt="ad" style={{width:217}}/>
   </Box>
       </Box>
    </>
   
  )
}

export default Cart5
