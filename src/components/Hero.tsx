import { Heading } from "@chakra-ui/react";
import { Button, VStack, Container } from "@chakra-ui/react";

const Hero = () => {
    return (
        <Container maxW="container.xl" centerContent>
            <VStack textAlign="center" py={16} bgGradient="linear(to-b, yellow.900, black)" borderRadius="2xl" p={8}>
            <Heading size="2xl" color="yellow.500">Discover the Magic of Cinema</Heading>
            <Heading size="md" color="gray.300" mt={4}>
                Explore trending movies, TV shows, and famous personalities in the industry.
            </Heading>
            <Button mt={6} bg="yellow.500" color="black" fontWeight="bold" px={6} py={3} borderRadius="xl">
                Start Exploring
            </Button>
            </VStack>
        </Container>
    );
};

export default Hero;