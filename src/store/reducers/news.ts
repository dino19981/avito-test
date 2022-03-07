import { newsTypes, TActionNews, TNewsState } from '../../types/types';

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
