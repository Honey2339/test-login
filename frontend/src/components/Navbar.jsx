import React from 'react'
import {Link} from 'react-router-dom' 
import { Button, Flex, Heading, Spacer } from '@chakra-ui/react'

function Navbar() {
  return (
    <Flex bgColor="gray.400" padding="10px" gap="10px" justify="center">

      <Heading>Project</Heading>

      <Spacer />

      <Button colorScheme='purple'><Link to='/login'>Login</Link></Button>
      <Button colorScheme='purple'><Link to='/signup'>Sign up</Link></Button>
    </Flex>
  )
}

export default Navbar