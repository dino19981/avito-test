import React, { ReactNode, useEffect } from 'react';
import './style.css';
import { INews } from '../../types/types';
import { getDate, getTime } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { newsTypes } from '../../store/reducers/news';

type TSingleNews = {
  data: INews;
};

export default function SingleNews({ data }: TSingleNews) {
  const { by, score, time, title } = data;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleNews() {
    dispatch({ type: newsTypes.GET_SINGLE_NEWS, payload: data });
    navigate('/news');
    localStorage.setItem('currentNews', String(data.id));
  }

  return (
    <tr className="news__row" onClick={handleNews}>
      <td className="news__score">{title}</td>
      <td className="news__score">{score}</td>
      <td className="news__score nickname">{by}</td>
      <td className="news__date">
        <span>{getTime(time)}</span> {getDate(time)}
      </td>
    </tr>
  );
}
