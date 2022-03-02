import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import Preloader from '../../components/Preloader/Preloader';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { getDate, getTime } from '../../utils/utils';
import { getComments } from '../../API/API';
import ExampleComment from '../../components/Comment/Comment';
import { IComment } from '../../types/types';
import useNewsActions from '../../hooks/useNewsAction';
import { useNavigate } from 'react-router-dom';

export default function NewsLink() {
  const { singleNews, isLoaded } = useTypedSelector((state) => state.news);
  const { getSingleNews } = useNewsActions();
  const { by, url, descendants, time, title, kids } = singleNews;
  const [isLoadedComments, setIsLoadedComments] = useState(false);
  const [comments, setComments] = useState<IComment[]>([]);
  const idInterval: { current: NodeJS.Timeout | null } = useRef(null);
  const navigate = useNavigate();

  async function updateComments() {
    if (kids) {
      const comment = await getComments(kids!);
      setComments(comment);
    }

    if (!isLoadedComments) {
      setIsLoadedComments(true);
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

    idInterval.current = setInterval(async () => {
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

  if (!isLoaded || !isLoadedComments) {
    return <Preloader />;
  }

  return (
    <div className="news__wrapper">
      <div className="news__inner">
        <button className="news__update" onClick={() => navigate('/')}>
          All news
        </button>
        <div className="news__title">
          <h3 className="news__title_text">{title}</h3>
        </div>
        <div className="news__author-wrapper">
          <h4 className="news__author">
            Author:<span>{` ${by}`}</span>
          </h4>
          <button className="news__update" onClick={updateComments}>
            Update comments
          </button>
        </div>
        <h4 className="news__author">
          Link:<a href={url}>News link</a>
        </h4>
        <div className="news__comments-wrapper">
          <h4>{`${descendants} comments`}</h4>
          <h4>
            <span>{getTime(time)}</span>
            {getDate(time)}
          </h4>
        </div>
        <div className="comment__wrapper">
          {comments.length ? (
            comments.map((comment) => (
              <ExampleComment data={comment} update={{ setComments, kids }} key={comment.id} />
            ))
          ) : (
            <p>Нет комментариев</p>
          )}
        </div>
      </div>
    </div>
  );
}
