import ContentCard from "./ContentCard";
import { CardType } from "../types/cardType";
import { useCards } from "../hooks/useCard";
import { Link, useParams } from "react-router";
import { useCallback } from "react";

type CardCarouselProps = {
  getData: (searchQuery?: string) => Promise<CardType[]>;
};


export const CardCarousel = ({ getData }: CardCarouselProps) => {
  const { searchQuery } = useParams<{ searchQuery?: string }>();

  const data = useCallback(() => getData(searchQuery), [getData, searchQuery]);

  const content = useCards(data);

  return (
    <>
      <div className="carousel">
        {content.length === 0 ? (
          <p style={{ fontSize: "1.5rem", color: "yellow", textAlign: "center", marginTop: "20px" }}>
        Nessun risultato trovato
          </p>
        ) : (
          content.map((card) => (
        <Link key={card.id} to={`/detail/${card.type}/${card.id}`}>
          <ContentCard key={card.id} content={card} />
        </Link>
          ))
        )}
      </div>
    </>
  );
};