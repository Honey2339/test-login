import { Box, Button, FormControl, FormLabel, Input, } from "@chakra-ui/react";
import React from 'react'

function Login() {

  function handleSubmit(e){
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email , password)
  }

  return (
    <Box p={4} mx="auto" height="90vh" justifyContent="center" alignItems="center" display="flex">
      <form onSubmit={handleSubmit}>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" name="email"/>
      </FormControl>

      <FormControl id="password" mt={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" name="password" />
      </FormControl>
      
      <Button type="submit" colorScheme="blue" mt={4}>Login</Button>
      </form>
    </Box>
  )
}

export default Login