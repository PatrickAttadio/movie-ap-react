import { CardType } from "@/types/cardType";
import { useEffect, useState } from "react";

export const useCards = (getData: () => Promise<CardType[]>) => {
  const [content, setContent] = useState<CardType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setContent(data);
    };
    fetchData();
  }, [getData]);

  return content;
};