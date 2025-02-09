import { Heading } from "@chakra-ui/react";
import { Button, VStack, Container } from "@chakra-ui/react";

const ErrorPage = () => {
    return (
        <Container centerContent>
            <VStack mt={10}>
                <Heading as="h1" size="2xl">
                    Oops! Something went wrong.
                </Heading>
                <Button colorScheme="teal" onClick={() => window.location.reload()}>
                    Reload Page
                </Button>
            </VStack>
        </Container>
    );
};

export default ErrorPage;