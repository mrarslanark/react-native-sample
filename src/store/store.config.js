/**
 * Backbone file for redux initialization.
 * Registers all the reducers, These reducer are called from there
 * respective actions. The Purpose of combineReducers is to map which field
 * of state is handled by which reducers.
 */

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import general from './reducers/general.reducer';
import auth from './reducer/auth.reducer';

const rootReducer = combineReducers({
  general: general,
  auth: auth,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['general'],
};

const middleware = applyMiddleware(promise, thunk);

let composeEnhancers = compose;

if (_DEV_) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const STORE = createStore(
  persistedReducer,
  composeEnhancers(middleware),
);

export const PERSISTOR = persistStore(STORE);
