import React, { useEffect, useRef, useState } from 'react'
import { getComments } from '../../API/API';
import { IComment } from '../../types/types';
import useNewsActions from '../useNewsAction';
import { useTypedSelector } from '../useTypeSelector';

type updateComments = [IComment[], () => void, boolean, boolean];

export const useUpdateComments = (): updateComments => {
  const { singleNews, isLoaded } = useTypedSelector((state) => state.news);
  const { getSingleNews } = useNewsActions();
  const { by, kids } = singleNews;
  const [comments, setComments] = useState<IComment[]>([]);
  const [isLoadedComments, setIsLoadedComments] = useState(false);
  const [isUpdateComments, setIsUpdateComments] = useState(false);
  const idInterval: { current: NodeJS.Timeout | null } = useRef(null);


  async function updateComments() {
    if (kids) {
      setIsUpdateComments(false);
      const comment = await getComments(kids!);
      setIsUpdateComments(true);
      setComments(comment);
    }

    if (!isLoadedComments) {
      setIsLoadedComments(true);
      setIsUpdateComments(true);
    }
    console.log('update comments');
  }

  useEffect(() => {
    if (!localStorage.getItem('currentNews')) {
      updateComments();
    } else if (!by && localStorage.getItem('currentNews')) {
      const id = +localStorage.getItem('currentNews')!;
      getSingleNews(id);
    }

    idInterval.current = setInterval(() => {
      updateComments();
    }, 60000);

    return () => {
      clearInterval(idInterval.current!);
    };
  }, []);

  useEffect(() => {
    if (isLoaded && !comments.length) {
      updateComments();
    }
  }, [isLoaded]);

  return [comments, updateComments, isLoadedComments, isUpdateComments]
}