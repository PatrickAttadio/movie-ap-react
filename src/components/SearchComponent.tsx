import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useDebounce } from "../hooks/useDobounce";
 
type SearchComponentProps = {
    display?: { base: string; md: string; lg:string };
};
const SearchComponent = ({display}: SearchComponentProps) => {
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState<string>("");
    const debouncedQuery = useDebounce((query: string) => {
        if (query.trim()) {
            navigate(`/search/${encodeURIComponent(query)}`);
        } else {
            navigate(`/`);
        }
    }, 1000);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);
        debouncedQuery(query);
    };

    const handleBlur = () => {
        setSearchQuery("");
    };

    return (
        <InputGroup
            flex="1"
            startElement={<LuSearch />}
            display={display}
            w={{ base: "100%", md: "auto" }}
        >
            <Input
                placeholder="Search"
                borderRadius={{base:"lg", md:"full"}}
                type="search"
                name="searchQuery"
                bg="grey"
                color="black"
                value={searchQuery}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </InputGroup>
    );
};

export default SearchComponent;