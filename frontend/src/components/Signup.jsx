import React from 'react'
import { Box, Button, FormControl, FormLabel, Input, } from "@chakra-ui/react";

function Signup() {

  async function handleSubmit(e){
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    
    try {
      const res = await fetch('http://localhost:5050/signup',{
        method: 'POST',
        body: JSON.stringify({email : email, password: password}),
        headers: {'Content-Type': 'application/json'}
      })

    } 
    catch (err) {
      console.log(err)
    }

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
      <Input type="password" />
    </FormControl>
    
    <Button type="submit" colorScheme="blue" mt={4}>Register</Button>
    </form>
    </Box>
  )
}

export default Signup