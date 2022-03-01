import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NewsActionsCreators from '../store/action-creators/news';

const useNewsActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(NewsActionsCreators, dispatch);
};

export default useNewsActions;
