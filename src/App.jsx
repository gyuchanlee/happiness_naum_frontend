import './App.css'
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './pages/HomePage.jsx';

function App() {

  return (
    <>
        <ChakraProvider>
            <HomePage />
        </ChakraProvider>
    </>
  )
}

export default App
