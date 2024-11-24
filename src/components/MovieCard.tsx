import { MovieType } from '../types/movieTypes';
import { Button, Card, Image, Text, Flex } from "@chakra-ui/react"

type MovieCardProps = {
    movie: MovieType;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <Card.Root className="movie-card" maxW="sm" overflow="hidden">
            <Image
                className="movie-card-image"
                src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                alt={movie.title}
            />
            <Card.Body className="movie-card-body" gap="2">
                <Card.Title className="movie-card-title">{movie.title}</Card.Title>
                <Text className="movie-card-description">
                    {movie.overview}
                </Text>
                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                    {movie.release_date}
                </Text>
            </Card.Body>
            <Card.Footer className="movie-card-footer" gap="2">
                <Button variant="solid">Details</Button>
                <Button variant="ghost">Add to Favorites</Button>
            </Card.Footer>
        </Card.Root>
    )
}