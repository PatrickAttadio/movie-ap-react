import ContentCard from "./ContentCard";
import { CardType } from "../types/cardType";
import { useCards } from "../hooks/useCard";
import { Link } from "react-router";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CardCarouselProps = {
  getData: (searchQuery?: string) => Promise<CardType[]>;
};

export const CardCarousel = ({ getData }: CardCarouselProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const content = useCards(getData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="carousel">
        {content.length === 0 ? (
          <p style={{ fontSize: "1.5rem", color: "yellow", textAlign: "center", marginTop: "20px" }}>
            Nessun risultato trovato
          </p>
        ) : (
          <Slider {...settings}>
            {content.map((card) => (
              <div key={card.id} style={{ padding: "0 10px" }}>
                <Link
                  to={`/detail/${card.type}/${card.id}`}
                  onClick={(e) => isDragging && e.preventDefault()}
                >
                  <ContentCard content={card} />
                </Link>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </>
  );
};