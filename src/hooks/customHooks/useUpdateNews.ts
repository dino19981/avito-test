import React, { useEffect, useRef, useState } from 'react'
import useNewsActions from '../useNewsAction';

type updateNews = [string, (state: string) => void]

export const useUpdateNews = (): updateNews => {
  const { getNews } = useNewsActions();
  const idInterval: { current: NodeJS.Timeout | null } = useRef(null);
  const [typeNews, setTypeNews] = useState<string>('newstories');

  useEffect(() => {
    idInterval.current = setInterval(() => {
      getNews(typeNews);
    }, 60000);
    return () => {
      clearInterval(idInterval.current!);
    };
  }, []);

  useEffect(() => {
    getNews(typeNews);
  }, [typeNews]);

  return [typeNews, setTypeNews];
}