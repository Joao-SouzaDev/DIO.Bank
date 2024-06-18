import { Box, Button, Container, FormControl, Image, Input, Stack } from "@chakra-ui/react"
import { login } from "../services/login"

export const Card = () => {
  return (
    <Box minHeight='100vh' backgroundColor='#1E192C' padding='25vh' alignItems='center'>
      <Container maxW='md' bg='white' padding={2} borderRadius={10}>
        <Stack spacing={3} alignItems='center'>
          <Box alignItems='center'>
            <Image src="https://hermes.digitalinnovation.one/assets/diome/logo-full.svg" borderRadius='full'
              boxSize='150px' />
          </Box>
          <FormControl>
            <Input variant='filled' placeholder="Login" id="login-input" type="email" padding='5px' />
          </FormControl>
          <FormControl>
            <Input variant='filled' placeholder="Password" id="pass-input" type="password" padding='5px' />
          </FormControl>
          <Button id="login-button" textColor='black' type='submit' onClick={login}>Entrar</Button>
        </Stack>
      </Container>
    </Box>
  )
}