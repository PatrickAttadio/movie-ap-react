import { useDetail } from "../hooks/useDetail";
import { DialogBody, DialogCloseTrigger, DialogContent, DialogHeader, DialogRoot, DialogTitle } from "../components/ui/dialog";
import { Box, Flex, Image, Text, VStack, Heading } from "@chakra-ui/react";
import { imageUrl } from "../api/utils";
import { MovieType, PersonType, TvType } from "../types/tmdbTypes";
import { useNavigate, useParams } from "react-router";

type ContentType = MovieType | PersonType | TvType;

const defaultImage = import.meta.env.VITE_DEFAULT_IMAGE;


const MovieDetail = () => {

  const { contentType, contentId } = useParams();

  const navigate = useNavigate();

  const content = useDetail(Number(contentId), contentType || "", true);

  const { image, title, description } = getCardData(content, contentType || "");

  const handleClose = () => {
    navigate(-1);   
  };

  return (
    <DialogRoot size="full" motionPreset="slide-in-bottom" lazyMount={true} open>
      <DialogContent p={4} bg="#60006a" color="white">
      <DialogHeader>
      <DialogTitle fontSize="2xl" fontWeight="bold" textAlign="center" mb={4} color="yellow">
      {title}
      </DialogTitle>
      </DialogHeader>
      <DialogBody>
      <Flex direction={{ base: "column", md: "row" }} gap={6} align="center" justify="space-between">
      <Box flex="1" display="flex" justifyContent="center" alignItems="center" maxW={{ base: "100%", md: "40%" }}>
        <Image src={image} alt={title} borderRadius="lg" boxShadow="lg" objectFit="cover" maxW="100%" maxH="450px" />
      </Box>
      <Box flex="2">
        <VStack align="stretch">
        <Heading size="xl" fontWeight="bold" color="yellow">
        Details
        </Heading>
        <Text fontSize="lg">
        {contentType === "person" ? (<><strong>Name:</strong> {title}</>) : (<><strong>Title:</strong> {title}</>)}
        </Text>
        <Text fontSize="lg">
        {description ? (<><strong>Description:</strong> {description}</>) : null}
        </Text>
        </VStack>
      </Box>
      </Flex>
      </DialogBody>
      <DialogCloseTrigger onClick={handleClose} />
      </DialogContent>
    </DialogRoot>
  );
};

export default MovieDetail;

const getCardData = (content: ContentType | null, type: string) => {
    let image;
    let title = "Unknown";
    let description;

    if (content && type === "movie") {
        const movie = content as MovieType;
        image = movie.poster_path ? `${imageUrl(movie.poster_path)}` : defaultImage;
        title = movie.title || "Unknown Movie";
        description = movie.overview;
    } else if (content && type === "tv") {
        const tv = content as TvType;
        image = tv.poster_path ? `${imageUrl(tv.poster_path)}` : defaultImage;
        title = tv.name || "Unknown TV Show";
        description = tv.overview;
    } else if (content && type === "person") {
        const person = content as PersonType;
        image = person.profile_path ? `${imageUrl(person.profile_path)}` : defaultImage;
        title = person.name || "Unknown Person";
    }

    return { image, title, description };
};