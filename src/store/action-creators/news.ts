import React, { Dispatch } from 'react';
import { getIdNews, getLastNews } from '../../API/API';
import { newsTypes, TactionNews } from '../reducers/news';

export function getNews() {
  return async (dispatch: Dispatch<TactionNews>) => {
    const ids = await getIdNews();
    const news = await getLastNews(ids);
    console.log(news);
    dispatch({ type: newsTypes.UPDATE_NEWS, payload: news })
  };
}