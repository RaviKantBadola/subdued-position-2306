import React from 'react'
import {Button,Input,Box, InputGroup,InputRightElement,useToast} from "@chakra-ui/react";
import { useState,useContext } from "react";
import {ViewIcon,ViewOffIcon} from "@chakra-ui/icons"
  import { AuthContext } from "../context/AuthContext";



const Signup = () => {


  const [showPassword, setShowPassword] = useState(false);
    
  const {SignUpData} = useContext(AuthContext);
  const toast = useToast();
  const obj={
    firstname:"",
    lastname:"",
    email:"",
    password:""
   }
  const [formData,setFormData] = useState(obj)
  const {firstname,lastname,email,password} = formData;
  
  const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value});
    }
  
  function handleSubmit(event) {
      event.preventDefault();
      if(formData.email==="" || formData.password==="" || formData.firstname===""){
        return (
          toast({
        title: 'Details Missing.',
        description: "Please fill in all the Details.",
        status: 'error',
        duration: 1000,
        isClosable: true,
        position:"top"
      })
  
        
        );
    }
    else if(password.length<8){
        setFormData(obj);
        return (
          toast({
            title: "Can't creat Account",
            description: "Password too short",
            status: 'error',
            duration: 1000,
            isClosable: true,
            position:"top"
          })
        );
    }
      
      setFormData(obj);
      SignUpData(formData)
      toast({
        title: "Account Created",
        description: "Welcome to WishCart",
        status: 'success',
        duration: 1000,
        isClosable: true,
        position:"bottom"
      })
    }
  return (
   <>
   <Box style={{height:"100%",width:"60%",padding:"40px 35px",textAlign:"center"}} >
            <form action="">
          <Input variant="flushed" placeholder="Enter Firstname" style={{marginTop:20}} isRequired  name="firstname" value={firstname} onChange={handleChange} />
          <Input variant="flushed" placeholder="Enter Lastname" style={{marginTop:20}} isRequired name="lastname" value={lastname} onChange={handleChange}/>
          <Input variant="flushed" placeholder="Enter Email/Mobile Number" style={{marginTop:20}}  name="email" value={email} onChange={handleChange} />
          <InputGroup>
          <Input variant="flushed" placeholder="Enter Password" style={{marginTop:20}} isRequired  type={showPassword ? 'text' : 'password'}  name="password" value={password} onChange={handleChange}/>
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
         
          <Button style={{marginTop:20,background:"#FB641B",color:"#fff",width:200}}   onClick={handleSubmit}>Continue</Button>
            </form>
          </Box>
   
   </>
  )
}

export default Signup
