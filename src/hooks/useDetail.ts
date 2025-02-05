import { useEffect, useState } from "react";
import { getDetail } from "../api/getDetail";
import { ContentType } from "../types/tmdbTypes";

export const useDetail = (contentId: number, contentType: string, isOpen: boolean) => {
  const [content, setContent] = useState<ContentType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!contentId || !contentType) return;
      const endpoint = contentType === "movie" ? "/movie" : contentType === "tv" ? "/tv" : "/person";
      const data = await getDetail(endpoint, contentId);
      setContent(data);
    };

    if (isOpen) {
      fetchData();
    }
  }, [contentId, contentType, isOpen]);

  return content;
};