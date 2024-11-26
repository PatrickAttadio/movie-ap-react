import { useEffect, useState } from "react"
import { MovieType, TvType, PersonType } from "../types/elementTypes"
import { getElement } from "../api/element"
import { MyCard } from "./MyCard"
import { SimpleGrid, Heading } from "@chakra-ui/react"

type CardContainerProps = {
  url: string,
  section: string
}

export const CardContainer = ({ url, section }: CardContainerProps) => {
  const [element, setElement] = useState<(MovieType | TvType | PersonType)[]>([]);

  useEffect(() => {
    const fetchElement = async () => setElement(await getElement(url));
    fetchElement();
  }, [url]);

  return (
    <>
      <Heading textAlign="left" size="2xl" py={5} px={10}>{section}</Heading>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }} px={10} gap={5}>
        {element.map((item) => <MyCard key={item.id} element={item} />)}
      </SimpleGrid>
    </>
  );
};