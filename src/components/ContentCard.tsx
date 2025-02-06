import { CardType } from "../types/cardType";
import { Card, Box, Image, Text } from "@chakra-ui/react";
import { imageUrl } from "../api/utils";


type ContentCardProps = {
    content: CardType;
};

const defaultImage = import.meta.env.VITE_DEFAULT_IMAGE;

const ContentCard = ({ content }: ContentCardProps) => {
    const image = content.image ? imageUrl(content.image) : defaultImage;

    return (
        <Card.Root maxW="sm" overflow="hidden" rounded="xl" border="none" bg="transparent" position="relative">
            <Card.Body p={0} position="relative">
                <Box w="100%" h="0" pb="150%" position="relative">
                    <Image src={image} alt={content.title} objectFit="cover" w="100%" h="100%" position="absolute" top="0" left="0" />
                </Box>
                <Text truncate position="absolute" bottom="1" right="1" color="white" fontWeight="bold" bg="rgba(0,0,0,0.5)" px="2" py="1" rounded="md" maxW="200px" >
                    {content.title}
                </Text>
            </Card.Body>
        </Card.Root>
    );
};

export default ContentCard;