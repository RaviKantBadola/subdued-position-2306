
import React from 'react'
import {
    Button
    } from '@chakra-ui/react'
import LoginDialog from './LoginDialog'

const LoginButton = () => {
  return (
    <>
   
      <Button rounded={"none"} style={{color:"#2874f0",backgroundColor:"white",border:"1px solid #dbdbdb",height:"32px"}}><LoginDialog/></Button >
    

</>
  )
}

export default LoginButton
