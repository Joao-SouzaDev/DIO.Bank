import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { login } from './services/login';
import { Card } from './components/Card';
import { Header } from './components/Header/Header';

function App() {
  return (
    <ChakraProvider>
      <Header/>
      <Card/>
    </ChakraProvider>
  );
}

export default App;
