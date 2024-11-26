import { MovieType, TvType, PersonType } from "../types/elementTypes";
import { CardType } from "../types/cardType";
import { srcImage } from "../functions/functions";
import { Card, Image } from "@chakra-ui/react"
import { CardButton } from "./CardButton"

type CardProps = {
  element: MovieType | PersonType | TvType;
}

export const MyCard = ({ element }: CardProps) => {

  let cardType: CardType = { media_type: "" };

  switch (element.media_type) {
    case "movie":
      cardType = {
        media_type: element.media_type,
        name: (element as MovieType).title,
        image: (element as MovieType).backdrop_path,
        description: (element as MovieType).overview + "\nReleased on " + (element as MovieType).release_date + ".",
        class: "movie"
      };
      break;
    case "person":
      cardType = {
        media_type: element.media_type,
        name: (element as PersonType).name,
        image: (element as PersonType).profile_path,
        description: "Role: " + (element as PersonType).known_for_department + "\nPopularity: " + (element as PersonType).popularity,
        class: "person"
      };
      break;
    case "tv":
      cardType = {
        media_type: element.media_type,
        name: (element as TvType).name,
        image: (element as TvType).backdrop_path,
        description: (element as TvType).overview + "\nFirst air date: " + (element as TvType).first_air_date,
        class: "tv"
      };
      break;
  }

  return (
    <Card.Root className={`card-root ${cardType.class}`}>
      <Image roundedTop="lg" src={srcImage(cardType, cardType.image)} />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{cardType.name}</Card.Title>
        <Card.Description className="card-description" lineClamp="3" whiteSpace="pre-wrap" marginTop={2}>
          {cardType.description}
        </Card.Description>
      </Card.Body>
      <Card.Footer className="card-footer">
        <CardButton cardType={cardType} />
      </Card.Footer>
    </Card.Root>
  )
}