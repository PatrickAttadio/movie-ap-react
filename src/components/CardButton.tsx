import { CardType } from "../types/cardType"
import { learnMore } from "../functions/functions"
import { Button, Link, Text } from "@chakra-ui/react"
import { DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger, DialogActionTrigger } from "../components/ui/dialog"

type CardButtonProps = {
    cardType: CardType;
};

export const CardButton = ({ cardType }: CardButtonProps) => {

  return (
        <DialogRoot placement="center" motionPreset="slide-in-bottom">
          <DialogTrigger asChild>
            <Button bgColor="blue">Show Details</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{cardType.name}</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <Text whiteSpace="pre-wrap">{cardType.description}</Text>
            </DialogBody>
            <DialogFooter>
              <DialogActionTrigger asChild>
                <Button bgColor="red">Close</Button>
              </DialogActionTrigger>
              <Link href={learnMore(cardType)} target="blank">
                <Button bgColor="black">Learn More</Button>
              </Link>
            </DialogFooter>
            <DialogCloseTrigger />
          </DialogContent>
        </DialogRoot>
  )
}