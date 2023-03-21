import './App.css';
import { Web3ContextProvider } from './context/Web3Context';
import { FeeCardContainer } from './components';
import { Container, Box, Center, Text, Divider } from '@chakra-ui/react';

function App() {
  return (
    <Web3ContextProvider>
      <Box w="100%" className="gradient-bg-welcome">
        <Container minH="100vh" maxW="2xl" paddingTop={24}>
          <Center>
            <Text fontSize="3xl" color={'white'} as="b">
              Guess 😎
            </Text>
          </Center>
          <Center>
            <Text fontSize="md" color={'white'} as="samp">
              Gas fee estimator under EIP-1559
            </Text>
          </Center>
          <Divider mb={8} mt={8} />
          <FeeCardContainer />
        </Container>
      </Box>
    </Web3ContextProvider>
  );
}

export default App;
