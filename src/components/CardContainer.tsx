import ContentCard from "./ContentCard";
import { SimpleGrid } from "@chakra-ui/react";
import { CardType } from "../types/cardType";
import { useCards } from "../hooks/useCard";
import { Link } from "react-router";
import { useCallback } from "react";

type CardContainerProps = {
  getData: () => Promise<CardType[]>;
};

export const CardContainer = ({ getData }: CardContainerProps) => {
  const data = useCallback(() => getData(), [getData]);

  const content = useCards(data);

  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} gap={10}>
        {content.length === 0 ? (
          <p>Nessun risultato trovato</p>
        ) : (
          content.map((card) => (
            <Link key={card.id} to={`/detail/${card.type}/${card.id}`}>
              <ContentCard key={card.id} content={card} />
            </Link>
          ))
        )}
      </SimpleGrid>
    </>
  );
};
