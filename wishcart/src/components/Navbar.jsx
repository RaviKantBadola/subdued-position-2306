import {HiUserCircle} from 'react-icons/hi';

import {BiSearchAlt2 } from 'react-icons/bi';
import {BiChevronDown} from "react-icons/bi";
import {FaShoppingCart} from "react-icons/fa"
import { InputGroup, InputRightElement } from '@chakra-ui/react';
import {
 
  Box,
  Flex,
  useColorModeValue,
  Input,
  Link
} from '@chakra-ui/react';
import {
Popover,
PopoverTrigger,
PopoverContent,
PopoverHeader,
PopoverBody,
PopoverArrow,
PopoverCloseButton,


} from '@chakra-ui/react'
import LoginButton from './LoginButton';



 function Navbar() {
  
  return (
    <>
      <Box bg={useColorModeValue('#2874f0', '#2874f0')}  >
        <Flex h={16} alignItems={'center'} marginLeft="12%" gap={"40px"}>
          <Box>
          <img src={"https://i.ibb.co/C0qLmPg/Screenshot-20230118-154340.png" } alt="Screenshot-20230118-154340" style={{width:"180px",marginLeft:"12%"}} />
          </Box>
          <Box>
            <InputGroup>
            <Input placeholder='Search for products, brands and more ' style={{color:"black",width:"600px",backgroundColor:"white",display:'flex'}}rounded={"none"} />
      <InputRightElement>
         <BiSearchAlt2/>
      </InputRightElement>
            </InputGroup>
          </Box>
          

<LoginButton/>



<Box color={"white"} fontSize={"18px"}>Become a Seller</Box>
        <Popover trigger="hover" >
  <PopoverTrigger>
  <Flex>
  
  
  <Box color={"white"} fontSize={"18px"}>
   More
  </Box>
  <Box as={BiChevronDown} marginTop={"6px"} size={"18"} color={"white"} marginRight={"10px"}/>

</Flex>
  </PopoverTrigger>
  <PopoverContent zIndex={4}>
    <PopoverHeader fontWeight='semibold' marginLeft={"30px"}>New customar ? <Link>Sign up</Link></PopoverHeader>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody><HiUserCircle/> My Profile</PopoverBody>
    <PopoverArrow />

  </PopoverContent>
</Popover>
<Flex>
  <Box as={FaShoppingCart} marginTop={"5px"} size={"18"} color={"white"} marginRight={"10px"}/>

  
  <Box color={"white"} fontSize={"18px"}>
    Cart
  </Box>

</Flex>

        </Flex>
      </Box>
    </>
  );
}

export default Navbar