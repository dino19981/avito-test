import React from 'react';
import { INews } from '../../types/types';

export enum newsTypes {
  UPDATE_NEWS = 'UPDATE_NEWS'
}

export type TactionNews = {
  type: newsTypes.UPDATE_NEWS
  payload: INews[]
}
type TNewsState = {
  news: INews[]
}
const initialState = {
  news: [],
}


function newsReducer(state: TNewsState = initialState, action: TactionNews): TNewsState {
  switch (action.type) {
    case newsTypes.UPDATE_NEWS: {
      return { news: action.payload }
    }
    default:
      return { news: state.news };
  }
}

export default newsReducer;
