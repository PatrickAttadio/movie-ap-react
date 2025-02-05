import { Heading, Flex } from "@chakra-ui/react";
import logo from "../../public/logo2.webp";
import { Tabs } from "@chakra-ui/react";
import { Link } from "react-router";

const Header = () => {
    return (
      <Flex as="header" align="center" justify="flex-start" py={4} px={8} height="100px">
        <img src={logo} alt="logo" className="App-logo" style={{ height: "100%" }} />
        <Heading as="h1" size="xl" color="yellow.500" height="100%" ml={4}>DuneFlix</Heading>
        <Flex gap={6} height="100%" ml="auto">
            <Tabs.Root defaultValue="movies">
                <Tabs.List>
                    <Link to="/movies">
                        <Tabs.Trigger value="movies">Movies</Tabs.Trigger>
                    </Link>
                    <Link to="/tv">
                        <Tabs.Trigger value="tv">TVs</Tabs.Trigger>
                    </Link>
                    <Link to="/people">
                        <Tabs.Trigger value="people">People</Tabs.Trigger>
                    </Link>
                </Tabs.List>
            </Tabs.Root>
        </Flex>
    </Flex>
    );
};

export default Header;