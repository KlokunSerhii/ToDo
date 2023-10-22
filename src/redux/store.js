import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todoSlice from './ToDo/slice';
import filterSlice from './filterSlice/filterSlice';

const rootReducer = combineReducers({
  todos: todoSlice,
  filter: filterSlice,
});

const persistConfig = {
  key: 'todos',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
