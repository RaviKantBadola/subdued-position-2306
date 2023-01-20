import React from 'react'
import {Button,Input,Box, InputGroup,InputRightElement} from "@chakra-ui/react";
import { useState } from "react";
import {ViewIcon,ViewOffIcon} from "@chakra-ui/icons"
const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);
  return (
   <>
   <Box style={{height:"100%",width:"60%",padding:"40px 35px",textAlign:"center"}} >
            <form action="">
          <Input variant="flushed" placeholder="Enter Firstname" style={{marginTop:20}} isRequired  />
          <Input variant="flushed" placeholder="Enter Lastname" style={{marginTop:20}} isRequired />
          <Input variant="flushed" placeholder="Enter Email/Mobile Number" style={{marginTop:20}} />
          <InputGroup>
          <Input variant="flushed" placeholder="Enter Password" style={{marginTop:20}} isRequired type={showPassword ? 'text' : 'password'} />
          <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
          </InputGroup>
         
          <Button style={{marginTop:20,background:"#FB641B",color:"#fff",width:200}}>Continue</Button>
            </form>
        
          </Box>
   
   </>
  )
}

export default Signup
