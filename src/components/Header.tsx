import { useState, useEffect } from "react";
import { Link } from "react-router";
import { FaBars } from "react-icons/fa";
import logo from "../../public/logo2.webp";
import { Flex, Box, Heading } from "@chakra-ui/react";
import SearchComponent from "./searchComponent";

// import { useState, useEffect } from "react";
// import { Flex, Link, Box, Heading } from "@chakra-ui/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <Flex 
        as="header" 
        align="center" 
        justify="space-between" 
        py={isScrolled ? 3 : 4} 
        px={isScrolled ? 6 : 8} 
        bg="gray.800" 
        color="white" 
        shadow="md"
        wrap="wrap"
        position="fixed"
        top={0}
        width="100%"
        zIndex={1000}
        transition="all 0.3s ease-in-out">
        <Flex align="center" transform={isScrolled ? "scale(0.8)" : "scale(1)"} transition="transform 0.3s ease-in-out">
            <img src={logo} alt="logo" className="App-logo" style={{ height: "100px" }} />
            <Heading as="h1" size="xl" color="yellow.500" ml={4}>DuNeFlIx</Heading>
        </Flex>

        <FaBars className="menuToggleBtn" onClick={toggleMenu} />

        <Flex align="center" gap={6}>
            <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
                <li>
                    <Link to="/movies" style={{ color: "yellow.400" }} onMouseOver={(e) => e.currentTarget.style.textDecoration = "underline"} onMouseOut={(e) => e.currentTarget.style.textDecoration = "none"}>Movies</Link>
                </li>
                <li>
                    <Link to="/tv" style={{ color: "yellow.400" }} onMouseOver={(e) => e.currentTarget.style.textDecoration = "underline"} onMouseOut={(e) => e.currentTarget.style.textDecoration = "none"}>TVs</Link>
                </li>
                <li>
                    <Link to="/people" style={{ color: "yellow.400" }} onMouseOver={(e) => e.currentTarget.style.textDecoration = "underline"} onMouseOut={(e) => e.currentTarget.style.textDecoration = "none"}>People</Link>
                </li>
            </ul>
            <Box ml={4}>
                <SearchComponent />
            </Box>
        </Flex>
    </Flex>
  );
};

export default Header;

// import { useState, useEffect } from "react";
// import { Flex, Link, Box, Heading } from "@chakra-ui/react";
// import logo from "../../public/logo2.webp";
// import SearchComponent from "./searchComponent";


//     return (
//         <Flex 
//             as="header" 
//             align="center" 
//             justify="space-between" 
//             py={isScrolled ? 3 : 4} 
//             px={isScrolled ? 6 : 8} 
//             bg="gray.800" 
//             color="white" 
//             shadow="md"
//             wrap="wrap"
//             position="fixed"
//             top={0}
//             width="100%"
//             zIndex={1000}
//             transition="all 0.3s ease-in-out">
//             <Flex align="center" transform={isScrolled ? "scale(0.8)" : "scale(1)"} transition="transform 0.3s ease-in-out">
//                 <img src={logo} alt="logo" className="App-logo" style={{ height: "100px" }} />
//                 <Heading as="h1" size="xl" color="yellow.500" ml={4}>DuNeFlIx</Heading>
//             </Flex>

//             <Flex align="center" gap={6}>
//                 <Link href="/movies" color="yellow.400" _hover={{ textDecoration: "underline" }}>Movies</Link>
//                 <Link href="/tv" color="yellow.400" _hover={{ textDecoration: "underline" }}>TVs</Link>
//                 <Link href="/people" color="yellow.400" _hover={{ textDecoration: "underline" }}>People</Link>
//                 <Box ml={4}>
//                     <SearchComponent />
//                 </Box>
//             </Flex>
//         </Flex>
//     );
// };
