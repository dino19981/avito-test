import React from 'react';
import { combineReducers } from 'redux';
import newsReducer from './news';

export const rootReducer = combineReducers({
  news: newsReducer,
});

export type RootState = ReturnType<typeof rootReducer>
