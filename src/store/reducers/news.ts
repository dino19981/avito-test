import React from 'react';
import { INews } from '../../types/types';

export enum newsTypes {
  UPDATE_NEWS = 'UPDATE_NEWS',
  GET_SINGLE_NEWS = 'GET_SINGLE_NEWS',
  END_LOADING = 'END_LOADING',
  START_LOADING = 'START_LOADING',
}

export type TActionNews = TActionAllNews | TSingleNews | TLoading

export type TActionAllNews = {
  type: newsTypes.UPDATE_NEWS
  payload: INews[]
}

type TSingleNews = {
  type: newsTypes.GET_SINGLE_NEWS
  payload: INews
}

type TLoading = {
  type: newsTypes.START_LOADING
}

type TNewsState = {
  news: INews[]
  singleNews: INews
  isLoaded: boolean
}
const initialState = {
  news: [],
  singleNews: {
    by: '',
    descendants: 0,
    id: 0,
    score: 0,
    time: 0,
    title: '',
    type: '',
    url: '',
  },
  isLoaded: false,
}


function newsReducer(state: TNewsState = initialState, action: TActionNews): TNewsState {
  switch (action.type) {
    case newsTypes.UPDATE_NEWS: {
      return { ...state, news: action.payload, isLoaded: true }
    }
    case newsTypes.GET_SINGLE_NEWS: {
      return { ...state, singleNews: action.payload, isLoaded: true }
    }
    case newsTypes.START_LOADING: {
      return { ...state, isLoaded: false }
    }
    default:
      return state;
  }
}

export default newsReducer;
