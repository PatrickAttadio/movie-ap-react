import { Heading, Flex } from "@chakra-ui/react";
import logo from "../../public/logo2.webp";
import { Tabs } from "@chakra-ui/react"

const Header = () => {
    return (
      <Flex as="header" align="center" justify="flex-start" py={4} px={8} height="100px">
        <img src={logo} alt="logo" className="App-logo" style={{ height: "100%" }} />
        <Heading as="h1" size="xl" color="yellow.500" height="100%" ml={4}>DuneFlix</Heading>
        <Flex gap={6} height="100%" ml="auto">
            <Tabs.Root defaultValue="movies">
            <Tabs.List>
                <Tabs.Trigger value="movies">Movies</Tabs.Trigger>
                <Tabs.Trigger value="tvs">TVs</Tabs.Trigger>
                <Tabs.Trigger value="people">People</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="movies">Manage your team members</Tabs.Content>
            <Tabs.Content value="tvs">Manage your projects</Tabs.Content>
            <Tabs.Content value="people">Manage your tasks for freelancers</Tabs.Content>
            </Tabs.Root>
        </Flex>
    </Flex>
    );
};

export default Header;