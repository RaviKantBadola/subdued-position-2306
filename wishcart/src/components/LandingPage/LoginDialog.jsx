import {Modal,ModalContent,Button,useDisclosure,Input,Box} from "@chakra-ui/react";
import { useState } from "react";

import Signup from "./Signup";
const accountinitialvalues={
    login:{
        view:"login",
        heading:"Login",
        subheading:"Get access to your Orders, Wishlist and Recommendations"

    },
    signup:{
  view:"signup",
  heading:"Looks like you're new here!",
  subheading:"Sign up with your mobile number to get started"
    }
}
  function LoginDialog() {
   
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [account,toggleAccount]=useState(accountinitialvalues.login)
  
const toggleSignup=()=>{
    toggleAccount(accountinitialvalues.signup)
}
const handleClose=()=>{
    onClose(true)
    toggleAccount(accountinitialvalues.login)
}

    return (
      <>
        <p onClick={onOpen}>Login</p>
  
        <Modal isOpen={isOpen}  size= "xl" onClose={handleClose} >
    
         
          <ModalContent style={{display:"flex",height:"500px" ,width:"50%",marginTop:"5%"}} >  
            <Box style={{display:"flex", height:"100%"}}>      
        <Box style={{backgroundColor:"#2874f0" , width:"50%",height:"auto",padding:"45px 35px",color:"white"}}>
            <h1 style={{color:878787,fontSize:20}}>{account.heading}</h1>
            <h1 style={{marginTop:20,color:878787}}>{account.subheading}</h1>
            <img  src={"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"} alt={"logo"} style={{paddingTop:"80%",width:"100%"}}/>
        </Box>

        {/* login form------- */}
          { account.view==="login" ?
          <Box style={{height:"100%",width:"60%",padding:"40px 35px",textAlign:"center"}}>
          <Input variant="flushed" placeholder="Enter Email/Mobile Number" style={{marginTop:20}} isRequired/>
          <Input variant="flushed" placeholder="Enter Password" style={{marginTop:20}} isRequired/>
           <p style={{marginTop:20,fontSize:12,color:878787}}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
            <Button style={{marginTop:20,background:"#FB641B",color:"#fff",width:200}}>Login</Button>
            <p style={{marginTop:20,fontSize:12,color:878787}}>OR</p>
            <Button style={{marginTop:20,background:"#FB641B",color:"#fff",width:200}}>Request OTP</Button>
            <p style={{marginTop:20,padding:"5px",fontSize:14,color:"#2874f0"}} onClick={()=>toggleSignup()}>New to Flipkart? Create an account</p>
          </Box>
          : 
          // sign up form
          <Signup/>
          
  }
          </Box>
       
          </ModalContent>
        
        </Modal>
      </>
    );
  }

  export default LoginDialog;