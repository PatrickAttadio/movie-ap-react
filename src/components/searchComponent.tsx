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
    // eslint-disable-next-line prefer-const
    let navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState<string>("");
    const debouncedQuery = useDebounce((query: string) => {
        if (query.trim()) {
            navigate(`/search/${encodeURIComponent(query)}`);
        }
    }, 1000);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        debouncedQuery(event.target.value);
    };

    const handleBlur = () => {
        setSearchQuery(""); // Inizializza l'input impostando lo stato a una stringa vuota
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
                value={searchQuery}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </InputGroup>
    );
};

export default SearchComponent;