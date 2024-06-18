import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import './Header.css'

export const Header = () => {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' bg='#1E192C'>
      <Box p='2'>
        <Heading size='lg' color='powderblue'>Dio.Bank</Heading>
      </Box>
      <Spacer />
    </Flex>
  )
}
