import React, { Dispatch } from 'react';
import { getIdNews, getLastNews, HEAD_URL } from '../../API/API';
import { newsTypes, TActionNews } from '../../types/types';

export function getNews(type: string) {
  return async (dispatch: Dispatch<TActionNews>) => {
    dispatch({ type: newsTypes.START_LOADING });
    const ids = await getIdNews(type);
    const news = await getLastNews(ids);
    console.log('update news');
    dispatch({ type: newsTypes.UPDATE_NEWS, payload: news })
  };
}

export function getSingleNews(id: number) {
  return async (dispatch: Dispatch<TActionNews>) => {
    const res = await fetch(`${HEAD_URL}item/${id}.json?print=pretty`);
    const data = await res.json();
    dispatch({ type: newsTypes.GET_SINGLE_NEWS, payload: data });
  };
}