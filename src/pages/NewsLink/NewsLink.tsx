import React from 'react';
import './style.css';
import Preloader from '../../components/Preloader/Preloader';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { getDate, getTime } from '../../utils/utils';
import ExampleComment from '../../components/Comment/Comment';
import { useNavigate } from 'react-router-dom';
import { useUpdateComments } from '../../hooks/customHooks/useUpdateComments';

export default function NewsLink() {
  const { singleNews, isLoaded } = useTypedSelector((state) => state.news);
  const { by, url, descendants, time, title, kids } = singleNews;
  const [comments, updateComments, isLoadedComments, isUpdateComments] = useUpdateComments();
  const navigate = useNavigate();

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
            comments.map((comment) => <ExampleComment data={comment} key={comment.id} />)
          ) : (
            <p>Нет комментариев</p>
          )}
          {!isUpdateComments && <Preloader />}
        </div>
      </div>
    </div>
  );
}
