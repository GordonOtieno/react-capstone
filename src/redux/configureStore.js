import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countriesReducer from './countries/countries';

const reducer = combineReducers({
  countries: countriesReducer,
  loadingBar: loadingBarReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(thunk),
});

export default store;
